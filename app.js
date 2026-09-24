'use strict';

const NIVELES = {
  facil: { nombre: 'Fácil', barras: 1 },
  media: { nombre: 'Media', barras: 2 },
  dificil: { nombre: 'Difícil', barras: 3 },
};
const LETRAS = 'ABCDEFGH';

const $ = (selector) => document.querySelector(selector);

const estado = {
  preguntas: [],   // preguntas de la ronda actual
  orden: {},       // id de pregunta -> índices de sus opciones, mezclados
  respuestas: {},  // id de pregunta -> índice (en p.opciones) de la opción elegida
  actual: 0,
  filtroRevision: 'todas',
};

function mezclar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function barras(nivel) {
  const llenas = NIVELES[nivel].barras;
  const is = [1, 2, 3].map((n) => `<i${n <= llenas ? ' class="llena"' : ''}></i>`).join('');
  return `<span class="barras dificultad--${nivel}" aria-hidden="true">${is}</span>`;
}

function badgeDificultad(nivel) {
  return `<span class="dificultad dificultad--${nivel}">${barras(nivel)}<span class="vh">Dificultad: </span>${NIVELES[nivel].nombre}</span>`;
}

function mostrar(pantalla) {
  for (const id of ['inicio', 'quiz', 'resultados']) $(`#${id}`).hidden = id !== pantalla;
  window.scrollTo(0, 0);
}

const respondida = (p) => p.id in estado.respuestas;
const esCorrecta = (p) => respondida(p) && p.opciones[estado.respuestas[p.id]].correcta;

/* ---------- Inicio ---------- */

function preguntasDelNivel(nivel) {
  return PREGUNTAS.filter((p) => nivel === 'todas' || p.dificultad === nivel);
}

function renderInicio() {
  const opciones = [['todas', 'Todas'], ...Object.entries(NIVELES).map(([k, v]) => [k, v.nombre])];
  $('#chips-nivel').innerHTML = opciones.map(([valor, nombre], i) => `
    <label class="chip">
      <input type="radio" name="nivel" value="${valor}"${i === 0 ? ' checked' : ''}>
      <span>
        ${valor !== 'todas' ? barras(valor) : ''}${nombre} <small>${preguntasDelNivel(valor).length}</small>
      </span>
    </label>`).join('');
  actualizarBotonComenzar();
}

function actualizarBotonComenzar() {
  const nivel = new FormData($('#form-inicio')).get('nivel');
  $('#btn-comenzar').textContent = `Comenzar (${preguntasDelNivel(nivel).length} preguntas)`;
}

$('#form-inicio').addEventListener('change', actualizarBotonComenzar);

$('#form-inicio').addEventListener('submit', (e) => {
  e.preventDefault();
  const datos = new FormData(e.target);
  let lista = preguntasDelNivel(datos.get('nivel'));
  if (datos.get('mezclar')) lista = mezclar(lista);
  empezar(lista);
});

function empezar(lista) {
  estado.preguntas = lista;
  estado.respuestas = {};
  estado.orden = Object.fromEntries(lista.map((p) => [p.id, mezclar(p.opciones.map((_, i) => i))]));
  estado.actual = 0;
  mostrar('quiz');
  renderPregunta();
}

/* ---------- Cuestionario ---------- */

function renderPregunta() {
  const total = estado.preguntas.length;
  const p = estado.preguntas[estado.actual];
  const elegida = estado.respuestas[p.id];

  $('#titulo-pregunta').innerHTML = `Pregunta ${estado.actual + 1} <span>de ${total}</span>`;
  $('#tema').textContent = p.tema;
  $('#dificultad').innerHTML = badgeDificultad(p.dificultad);
  $('#enunciado').innerHTML = p.enunciado;
  $('#opciones').innerHTML = estado.orden[p.id].map((idx, pos) => {
    const id = `op-${p.id}-${idx}`;
    return `
      <label class="opcion" for="${id}">
        <input type="radio" name="respuesta" id="${id}" value="${idx}"${idx === elegida ? ' checked' : ''}>
        <span class="letra" aria-hidden="true">${LETRAS[pos]}</span>
        <span class="texto">${p.opciones[idx].texto}</span>
      </label>`;
  }).join('');

  $('#btn-anterior').disabled = estado.actual === 0;
  $('#btn-siguiente').textContent = estado.actual === total - 1 ? 'Ver resultados' : 'Siguiente →';
  actualizarProgreso();
  $('#titulo-pregunta').focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

function actualizarProgreso() {
  const total = estado.preguntas.length;
  const hechas = estado.preguntas.filter(respondida).length;
  $('#respondidas').textContent = `${hechas} de ${total} respondidas`;
  $('#progreso').max = total;
  $('#progreso').value = hechas;

  $('#mapa').innerHTML = estado.preguntas.map((p, i) => {
    const r = respondida(p);
    return `<li><button type="button" data-ir="${i}"${r ? ' class="respondida"' : ''}${i === estado.actual ? ' aria-current="step"' : ''}
      aria-label="Pregunta ${i + 1}, ${r ? 'respondida' : 'sin responder'}">${i + 1}</button></li>`;
  }).join('');
}

function irA(indice) {
  estado.actual = indice;
  renderPregunta();
}

$('#opciones').addEventListener('change', (e) => {
  estado.respuestas[estado.preguntas[estado.actual].id] = Number(e.target.value);
  actualizarProgreso();
});

$('#btn-anterior').addEventListener('click', () => irA(estado.actual - 1));

$('#form-pregunta').addEventListener('submit', (e) => {
  e.preventDefault();
  if (estado.actual < estado.preguntas.length - 1) irA(estado.actual + 1);
  else finalizar();
});

$('#mapa').addEventListener('click', (e) => {
  const boton = e.target.closest('[data-ir]');
  if (boton) irA(Number(boton.dataset.ir));
});

$('#btn-finalizar').addEventListener('click', finalizar);

function finalizar() {
  const faltan = estado.preguntas.filter((p) => !respondida(p)).length;
  if (faltan) {
    const texto = faltan === 1 ? 'Te queda 1 pregunta sin responder' : `Te quedan ${faltan} preguntas sin responder`;
    if (!confirm(`${texto}. ¿Querés terminar igual? Las que no respondiste cuentan como incorrectas.`)) return;
  }
  estado.filtroRevision = 'todas';
  renderResultados();
  mostrar('resultados');
  $('#titulo-resultados').focus();
}

/* ---------- Resultados ---------- */

function mensajePara(porcentaje) {
  if (porcentaje >= 90) return '¡Excelente! Dominás los conceptos.';
  if (porcentaje >= 70) return '¡Muy bien! Repasá las que fallaste para cerrar los detalles.';
  if (porcentaje >= 50) return 'Vas bien, pero conviene repasar algunos temas.';
  return 'Hay que repasar. Mirá las explicaciones de abajo.';
}

function renderResultados() {
  const total = estado.preguntas.length;
  const aciertos = estado.preguntas.filter(esCorrecta).length;
  const porcentaje = Math.round((aciertos / total) * 100);
  const nota = ((aciertos / total) * 10).toLocaleString('es-AR', { maximumFractionDigits: 1 });

  $('#puntaje').textContent = aciertos;
  $('#puntaje-total').textContent = ` / ${total}`;
  $('#puntaje-detalle').textContent = `${porcentaje}% de aciertos · Nota ${nota} / 10`;
  $('#mensaje').textContent = mensajePara(porcentaje);

  $('#por-nivel').innerHTML = Object.keys(NIVELES).map((nivel) => {
    const delNivel = estado.preguntas.filter((p) => p.dificultad === nivel);
    if (!delNivel.length) return '';
    const ok = delNivel.filter(esCorrecta).length;
    return `<li>
      ${badgeDificultad(nivel)}
      <progress max="${delNivel.length}" value="${ok}" aria-label="Aciertos en ${NIVELES[nivel].nombre}"></progress>
      <span class="fraccion">${ok}/${delNivel.length}</span>
    </li>`;
  }).join('');

  const falladas = total - aciertos;
  $('#btn-repetir').hidden = falladas === 0;
  $('#btn-repetir').textContent = `Repetir las que fallé (${falladas})`;

  renderRevision();
}

function renderRevision() {
  const items = estado.preguntas.map((p, i) => ({ p, i, ok: esCorrecta(p) }));
  const cuenta = { todas: items.length, correctas: items.filter((x) => x.ok).length };
  cuenta.incorrectas = cuenta.todas - cuenta.correctas;

  for (const boton of document.querySelectorAll('[data-filtro]')) {
    boton.setAttribute('aria-pressed', boton.dataset.filtro === estado.filtroRevision);
    boton.querySelector('small').textContent = cuenta[boton.dataset.filtro];
  }

  const visibles = items.filter((x) => estado.filtroRevision === 'todas' || (estado.filtroRevision === 'correctas') === x.ok);
  const vacio = estado.filtroRevision === 'incorrectas' ? '¡No fallaste ninguna!' : 'No hay preguntas para mostrar.';
  $('#revision').innerHTML = visibles.length ? visibles.map(itemRevision).join('') : `<li class="vacio">${vacio}</li>`;
}

function itemRevision({ p, i, ok }) {
  const elegida = estado.respuestas[p.id];
  const [clase, icono, etiqueta] = ok
    ? ['ok', '✓', 'Correcta']
    : elegida === undefined ? ['vacia', '–', 'Sin responder'] : ['mal', '✗', 'Incorrecta'];

  const opciones = estado.orden[p.id].map((idx, pos) => {
    const o = p.opciones[idx];
    const esElegida = idx === elegida;
    let claseOpcion = '';
    let nota = '';
    let marca = LETRAS[pos];
    if (o.correcta) {
      claseOpcion = 'es-correcta';
      nota = esElegida ? 'Tu respuesta · Correcta' : 'Respuesta correcta';
      marca = '✓';
    } else if (esElegida) {
      claseOpcion = 'es-elegida';
      nota = 'Tu respuesta';
      marca = '✗';
    }
    const explicacion = (o.correcta || esElegida) && o.explicacion ? `<p class="explicacion">${o.explicacion}</p>` : '';
    return `<li class="${claseOpcion}">
      <span class="letra" aria-hidden="true">${marca}</span>
      <div>
        ${nota ? `<span class="nota">${nota}</span>` : ''}
        <div class="texto">${o.texto}</div>
        ${explicacion}
      </div>
    </li>`;
  }).join('');

  return `<li class="tarjeta item-revision item-revision--${clase}">
    <div class="item-cabecera">
      <span class="estado estado--${clase}"><span aria-hidden="true">${icono}</span> ${etiqueta}</span>
      <span class="num">Pregunta ${i + 1}</span>
      <span class="tema">${p.tema}</span>
      ${badgeDificultad(p.dificultad)}
    </div>
    <div class="enunciado">${p.enunciado}</div>
    <ul class="opciones-revision">${opciones}</ul>
  </li>`;
}

document.querySelector('.filtros').addEventListener('click', (e) => {
  const boton = e.target.closest('[data-filtro]');
  if (!boton) return;
  estado.filtroRevision = boton.dataset.filtro;
  renderRevision();
});

$('#btn-repetir').addEventListener('click', () => empezar(mezclar(estado.preguntas.filter((p) => !esCorrecta(p)))));
$('#btn-inicio').addEventListener('click', () => mostrar('inicio'));

renderInicio();
