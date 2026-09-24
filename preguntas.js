// Banco Angular Essentials - 40 preguntas (generado a partir de banco_angular_40.gift)
// dificultad: "facil" | "media" | "dificil"
// Los textos admiten HTML (<code>, <pre>), tal como en el GIFT original.
const PREGUNTAS = [
  {
    "id": 1,
    "tema": "Introducción",
    "titulo": "Qué aporta TypeScript",
    "dificultad": "facil",
    "enunciado": "Angular usa TypeScript en lugar de JavaScript puro. Lo que TypeScript agrega es",
    "opciones": [
      {
        "texto": "la posibilidad de declarar tipos, lo que ayuda a detectar errores antes de ejecutar.",
        "explicacion": "Los tipos permiten que el editor y el compilador avisen de errores mientras se escribe el código.",
        "correcta": true
      },
      {
        "texto": "un motor propio que reemplaza al navegador para ejecutar la aplicación más rápido.",
        "explicacion": "El código termina ejecutándose en el navegador como JavaScript.",
        "correcta": false
      },
      {
        "texto": "una forma de escribir los estilos dentro de las clases.",
        "explicacion": "Los estilos se siguen escribiendo en CSS.",
        "correcta": false
      },
      {
        "texto": "una base de datos integrada para guardar la información.",
        "explicacion": "TypeScript es un lenguaje, no un sistema de almacenamiento.",
        "correcta": false
      }
    ]
  },
  {
    "id": 2,
    "tema": "Introducción",
    "titulo": "La línea con arroba",
    "dificultad": "facil",
    "enunciado": "En un componente, la línea que empieza con @ justo arriba de la clase",
    "opciones": [
      {
        "texto": "le indica a Angular que esa clase es un componente y cómo configurarlo.",
        "explicacion": "Es un decorador: agrega configuración a la clase que tiene debajo.",
        "correcta": true
      },
      {
        "texto": "crea una copia de la clase para cada página del sitio donde se use el componente.",
        "explicacion": "Crear copias no es la función del decorador.",
        "correcta": false
      },
      {
        "texto": "marca la clase como privada para que no se pueda importar.",
        "explicacion": "No cambia la visibilidad de la clase.",
        "correcta": false
      },
      {
        "texto": "es un comentario que el navegador ignora al ejecutar el código.",
        "explicacion": "No es un comentario: Angular lo usa para configurar la clase.",
        "correcta": false
      }
    ]
  },
  {
    "id": 3,
    "tema": "Componentes",
    "titulo": "Qué conviene convertir en componente",
    "dificultad": "facil",
    "enunciado": "En una tienda online, ¿qué parte conviene convertir en un componente?",
    "opciones": [
      {
        "texto": "La tarjeta de producto que se repite con distintos datos en la página.",
        "explicacion": "Es una parte visible, con estructura y comportamiento propios, que se reutiliza.",
        "correcta": true
      },
      {
        "texto": "El color de fondo que usan todas las páginas de la tienda.",
        "explicacion": "Eso es un estilo, no una parte de la interfaz.",
        "correcta": false
      },
      {
        "texto": "La dirección web del servidor donde están alojadas la tienda y su base de datos.",
        "explicacion": "Es información de infraestructura, no una parte de la página.",
        "correcta": false
      },
      {
        "texto": "El nombre de la tipografía que se usa en los títulos.",
        "explicacion": "Es un estilo, no una parte de la interfaz.",
        "correcta": false
      }
    ]
  },
  {
    "id": 4,
    "tema": "Componentes",
    "titulo": "Cómo se usa el selector",
    "dificultad": "facil",
    "enunciado": "Un componente tiene como selector <code>app-boton-compra</code>. ¿Cómo se usa dentro de otro componente?",
    "opciones": [
      {
        "texto": "Escribiendo en su plantilla una etiqueta con ese mismo nombre.",
        "explicacion": "El selector es el nombre de la etiqueta que inserta el componente.",
        "correcta": true
      },
      {
        "texto": "Llamando a una función con ese nombre desde la clase del otro componente.",
        "explicacion": "Los componentes no se insertan llamando funciones.",
        "correcta": false
      },
      {
        "texto": "Agregando ese nombre como regla en la hoja de estilos.",
        "explicacion": "Los estilos no insertan componentes.",
        "correcta": false
      },
      {
        "texto": "Escribiendo ese nombre entre dobles llaves en la plantilla.",
        "explicacion": "Las dobles llaves muestran valores como texto.",
        "correcta": false
      }
    ]
  },
  {
    "id": 5,
    "tema": "Componentes",
    "titulo": "Etiqueta no reconocida",
    "dificultad": "media",
    "enunciado": "Un estudiante escribe en la plantilla la etiqueta de otro componente, pero Angular avisa que no la reconoce. El selector está bien escrito. La causa más probable es que",
    "opciones": [
      {
        "texto": "falta agregar ese componente a la lista de importaciones del decorador.",
        "explicacion": "Sin importarlo, Angular no sabe qué componente corresponde a esa etiqueta.",
        "correcta": true
      },
      {
        "texto": "el componente no tiene estilos propios definidos.",
        "explicacion": "Un componente puede no tener estilos y funcionar igual.",
        "correcta": false
      },
      {
        "texto": "la etiqueta debe escribirse en mayúsculas para que Angular la encuentre en el HTML.",
        "explicacion": "El nombre debe coincidir con el selector, no ir en mayúsculas.",
        "correcta": false
      },
      {
        "texto": "la clase del componente no tiene ningún método.",
        "explicacion": "Una clase sin métodos es válida.",
        "correcta": false
      }
    ]
  },
  {
    "id": 6,
    "tema": "Componentes",
    "titulo": "Plantilla y estilos externos",
    "dificultad": "facil",
    "enunciado": "Observá la configuración de este componente:<pre>@Component({\n  selector: 'app-perfil',\n  templateUrl: 'perfil.html',\n  styleUrl: 'perfil.css',\n})\nexport class Perfil {}</pre> ¿Qué indican <code>templateUrl</code> y <code>styleUrl</code>?",
    "opciones": [
      {
        "texto": "Los archivos donde están el HTML y el CSS del componente.",
        "explicacion": "Permiten tener la plantilla y los estilos en archivos propios.",
        "correcta": true
      },
      {
        "texto": "Las direcciones web a las que envía sus datos.",
        "explicacion": "No son direcciones de envío de datos.",
        "correcta": false
      },
      {
        "texto": "Los nombres con los que el componente se usa en otras plantillas.",
        "explicacion": "Eso lo define el selector.",
        "correcta": false
      },
      {
        "texto": "Los archivos que el componente descarga solo la primera vez.",
        "explicacion": "Son parte del componente, no descargas opcionales.",
        "correcta": false
      }
    ]
  },
  {
    "id": 7,
    "tema": "Componentes",
    "titulo": "Plantilla corta",
    "dificultad": "media",
    "enunciado": "Si la plantilla de un componente es corta, se puede escribir",
    "opciones": [
      {
        "texto": "directamente en la configuración del decorador, sin un archivo aparte.",
        "explicacion": "Para plantillas chicas no hace falta un archivo HTML separado.",
        "correcta": true
      },
      {
        "texto": "dentro de un método de la clase que devuelve el HTML como texto cada vez.",
        "explicacion": "La plantilla no se genera desde métodos.",
        "correcta": false
      },
      {
        "texto": "en el archivo principal de la aplicación, fuera de cualquier componente.",
        "explicacion": "Cada plantilla pertenece a su componente.",
        "correcta": false
      },
      {
        "texto": "solo en un archivo HTML aparte, porque es obligatorio.",
        "explicacion": "El archivo aparte es una opción, no una obligación.",
        "correcta": false
      }
    ]
  },
  {
    "id": 8,
    "tema": "Componentes",
    "titulo": "Usar el mismo componente varias veces",
    "dificultad": "facil",
    "enunciado": "Un componente de estrella de calificación se necesita cinco veces en la misma página. Lo correcto es",
    "opciones": [
      {
        "texto": "escribir su etiqueta cinco veces; cada uso es una aparición independiente.",
        "explicacion": "Un componente se define una vez y se puede usar todas las veces que haga falta.",
        "correcta": true
      },
      {
        "texto": "crear cinco componentes distintos, uno por cada estrella que se muestra.",
        "explicacion": "Duplicaría código sin necesidad.",
        "correcta": false
      },
      {
        "texto": "copiar su código en la plantilla principal para poder repetirlo sin importarlo.",
        "explicacion": "Se pierde la ventaja de reutilizar el componente.",
        "correcta": false
      },
      {
        "texto": "usarlo una sola vez, porque cada componente aparece una única vez.",
        "explicacion": "No existe esa limitación.",
        "correcta": false
      }
    ]
  },
  {
    "id": 9,
    "tema": "Componentes",
    "titulo": "Cómo se relacionan",
    "dificultad": "facil",
    "enunciado": "La relación entre los componentes de una aplicación Angular se parece a",
    "opciones": [
      {
        "texto": "un árbol: un componente puede contener a otros, que a su vez contienen a otros.",
        "explicacion": "La interfaz se arma anidando componentes dentro de componentes.",
        "correcta": true
      },
      {
        "texto": "una lista plana en la que ningún componente contiene a otro y todos están al mismo nivel.",
        "explicacion": "Los componentes se anidan.",
        "correcta": false
      },
      {
        "texto": "una sola pieza que se divide recién al publicar la aplicación.",
        "explicacion": "La división se hace al programar.",
        "correcta": false
      },
      {
        "texto": "un conjunto de páginas sueltas que no se comunican entre sí.",
        "explicacion": "Los componentes se combinan para formar las páginas.",
        "correcta": false
      }
    ]
  },
  {
    "id": 10,
    "tema": "Componentes",
    "titulo": "Dónde va un cálculo",
    "dificultad": "media",
    "enunciado": "Un componente debe calcular el precio con descuento antes de mostrarlo. ¿Dónde conviene escribir ese cálculo?",
    "opciones": [
      {
        "texto": "En la clase, y la plantilla solo muestra el resultado.",
        "explicacion": "La clase aporta el comportamiento; la plantilla se ocupa de mostrar.",
        "correcta": true
      },
      {
        "texto": "En la hoja de estilos, con una regla que modifique el número que se muestra.",
        "explicacion": "Los estilos no hacen cálculos con datos.",
        "correcta": false
      },
      {
        "texto": "En el selector del componente, junto al nombre de la etiqueta.",
        "explicacion": "El selector solo define cómo se usa el componente.",
        "correcta": false
      },
      {
        "texto": "En un comentario de la plantilla para que quede documentado.",
        "explicacion": "Los comentarios no se ejecutan.",
        "correcta": false
      }
    ]
  },
  {
    "id": 11,
    "tema": "Signals",
    "titulo": "Dónde guardar el estado",
    "dificultad": "facil",
    "enunciado": "En un componente, un dato que cambia con el tiempo, como la cantidad de productos en un carrito, conviene guardarlo",
    "opciones": [
      {
        "texto": "en una señal declarada como propiedad de la clase.",
        "explicacion": "Así la plantilla que la lee se actualiza sola cuando cambia.",
        "correcta": true
      },
      {
        "texto": "en una variable escrita dentro de la plantilla, entre dobles llaves.",
        "explicacion": "La plantilla muestra datos, no los guarda.",
        "correcta": false
      },
      {
        "texto": "en el selector, para que otros componentes lo lean.",
        "explicacion": "El selector no guarda datos.",
        "correcta": false
      },
      {
        "texto": "en la hoja de estilos del componente.",
        "explicacion": "Los estilos no guardan datos.",
        "correcta": false
      }
    ]
  },
  {
    "id": 12,
    "tema": "Signals",
    "titulo": "Valor inicial",
    "dificultad": "facil",
    "enunciado": "¿Qué hace <code>signal(0)</code>?",
    "opciones": [
      {
        "texto": "Crea una señal cuyo valor inicial es 0.",
        "explicacion": "El argumento es el valor con el que arranca la señal.",
        "correcta": true
      },
      {
        "texto": "Crea una señal vacía hasta que el usuario escriba.",
        "explicacion": "El valor inicial ya queda asignado al crearla.",
        "correcta": false
      },
      {
        "texto": "Lee el valor de la señal que está en la posición 0.",
        "explicacion": "Leer se hace llamando a una señal ya creada.",
        "correcta": false
      },
      {
        "texto": "Borra el valor de una señal y lo deja en 0.",
        "explicacion": "Crea una señal nueva, no modifica otra.",
        "correcta": false
      }
    ]
  },
  {
    "id": 13,
    "tema": "Signals",
    "titulo": "Qué puede guardar",
    "dificultad": "facil",
    "enunciado": "Una señal puede guardar",
    "opciones": [
      {
        "texto": "cualquier tipo de valor: números, textos, objetos o listas.",
        "explicacion": "Envuelve un valor sin importar de qué tipo sea.",
        "correcta": true
      },
      {
        "texto": "solo números, porque sirve para contadores y cálculos.",
        "explicacion": "No está limitada a números.",
        "correcta": false
      },
      {
        "texto": "solo textos, porque su valor termina mostrándose en la plantilla como texto.",
        "explicacion": "Puede guardar valores de cualquier tipo.",
        "correcta": false
      },
      {
        "texto": "solo valores verdadero o falso.",
        "explicacion": "No está limitada a booleanos.",
        "correcta": false
      }
    ]
  },
  {
    "id": 14,
    "tema": "Signals",
    "titulo": "Leer una señal dentro de una computada",
    "dificultad": "media",
    "enunciado": "Para usar el valor de la señal <code>precio</code> dentro de una señal computada, se escribe",
    "opciones": [
      {
        "texto": "<code>precio()</code> dentro de la función de <code>computed</code>.",
        "explicacion": "Se lee llamándola, igual que en cualquier otro lugar.",
        "correcta": true
      },
      {
        "texto": "<code>precio.value</code> dentro de la función de <code>computed</code>.",
        "explicacion": "Las señales no se leen con una propiedad.",
        "correcta": false
      },
      {
        "texto": "<code>precio</code> sin paréntesis, porque <code>computed</code> lo lee solo.",
        "explicacion": "Sin paréntesis se obtiene la señal, no su valor.",
        "correcta": false
      },
      {
        "texto": "<code>set(precio)</code> dentro de la función de <code>computed</code>.",
        "explicacion": "<code>set</code> sirve para cambiar valores, no para leerlos.",
        "correcta": false
      }
    ]
  },
  {
    "id": 15,
    "tema": "Signals",
    "titulo": "Reiniciar un contador",
    "dificultad": "media",
    "enunciado": "Un botón debe volver un contador a 0 sin importar su valor actual. Lo más directo es",
    "opciones": [
      {
        "texto": "asignarle 0 con <code>set</code>, sin mirar el valor actual.",
        "explicacion": "No depende del valor anterior, así que alcanza con asignar el nuevo.",
        "correcta": true
      },
      {
        "texto": "usar <code>update</code> restando 1 al valor actual.",
        "explicacion": "Solo bajaría una unidad.",
        "correcta": false
      },
      {
        "texto": "volver a crear la señal con <code>signal(0)</code> en el método.",
        "explicacion": "Se crearía otra señal y la plantilla seguiría leyendo la anterior.",
        "correcta": false
      },
      {
        "texto": "llamar a la señal pasándole el 0 entre paréntesis.",
        "explicacion": "Llamarla sirve para leerla.",
        "correcta": false
      }
    ]
  },
  {
    "id": 16,
    "tema": "Signals",
    "titulo": "Cuándo cambia una computada",
    "dificultad": "media",
    "enunciado": "Una señal computada depende de las señales <code>a</code> y <code>b</code>. Si cambia solo <code>a</code>,",
    "opciones": [
      {
        "texto": "la computada se recalcula, porque depende de las dos.",
        "explicacion": "Alcanza con que cambie cualquiera de las señales que lee.",
        "correcta": true
      },
      {
        "texto": "la computada no cambia hasta que también cambie <code>b</code>.",
        "explicacion": "No necesita que cambien todas.",
        "correcta": false
      },
      {
        "texto": "hay que llamar a <code>update</code> sobre la computada.",
        "explicacion": "Las computadas no tienen <code>update</code>: se actualizan solas.",
        "correcta": false
      },
      {
        "texto": "la computada se borra y hay que crearla de nuevo.",
        "explicacion": "Sigue existiendo y se actualiza.",
        "correcta": false
      }
    ]
  },
  {
    "id": 17,
    "tema": "Signals",
    "titulo": "Total con dos señales",
    "dificultad": "dificil",
    "enunciado": "Analizá el siguiente código:<pre>const precio = signal(100);\nconst cantidad = signal(2);\nconst total = computed(() =&gt; precio() * cantidad());\ncantidad.update(c =&gt; c + 1);\nprecio.set(50);</pre> ¿Cuánto vale <code>total()</code>?",
    "opciones": [
      {
        "texto": "150",
        "explicacion": "La cantidad pasa a 3 y el precio a 50: 50 por 3.",
        "correcta": true
      },
      {
        "texto": "200",
        "explicacion": "Usa los valores iniciales, pero la computada se actualiza.",
        "correcta": false
      },
      {
        "texto": "300",
        "explicacion": "Toma la cantidad nueva, pero no el precio nuevo.",
        "correcta": false
      },
      {
        "texto": "100",
        "explicacion": "Toma el precio nuevo, pero no la cantidad nueva.",
        "correcta": false
      }
    ]
  },
  {
    "id": 18,
    "tema": "Signals",
    "titulo": "Agregar a una lista",
    "dificultad": "dificil",
    "enunciado": "Una señal guarda una lista de tareas:<pre>const tareas = signal(['Estudiar']);</pre> ¿Qué instrucción agrega la tarea \"Practicar\" manteniendo la señal?",
    "opciones": [
      {
        "texto": "<code>tareas.update(t =&gt; [...t, 'Practicar'])</code>",
        "explicacion": "Parte de la lista actual y devuelve una nueva con la tarea agregada.",
        "correcta": true
      },
      {
        "texto": "<code>tareas.set('Practicar')</code>",
        "explicacion": "Reemplaza toda la lista por un texto.",
        "correcta": false
      },
      {
        "texto": "<code>tareas() + 'Practicar'</code>",
        "explicacion": "Calcula un valor, pero no modifica la señal.",
        "correcta": false
      },
      {
        "texto": "<code>tareas = [...tareas(), 'Practicar']</code>",
        "explicacion": "Pisa la señal con una lista común.",
        "correcta": false
      }
    ]
  },
  {
    "id": 19,
    "tema": "Signals",
    "titulo": "Modificar una computada",
    "dificultad": "dificil",
    "enunciado": "Analizá el siguiente código:<pre>const numero = signal(3);\nconst doble = computed(() =&gt; numero() * 2);\ndoble.set(10);</pre> ¿Qué ocurre?",
    "opciones": [
      {
        "texto": "Da error, porque una señal computada no tiene <code>set</code>.",
        "explicacion": "Su valor solo depende de las señales que lee.",
        "correcta": true
      },
      {
        "texto": "<code>doble</code> pasa a valer 10 hasta que <code>numero</code> cambie.",
        "explicacion": "No se puede asignar un valor a una computada.",
        "correcta": false
      },
      {
        "texto": "<code>numero</code> pasa a valer 5 para que el doble sea 10.",
        "explicacion": "Una computada no modifica las señales de las que depende.",
        "correcta": false
      },
      {
        "texto": "<code>doble</code> vale 20.",
        "explicacion": "La instrucción falla antes de cambiar nada.",
        "correcta": false
      }
    ]
  },
  {
    "id": 20,
    "tema": "Plantillas",
    "titulo": "Imagen desde una señal",
    "dificultad": "media",
    "enunciado": "La dirección de una imagen está en la señal <code>foto</code>. Para que la imagen la use hay que",
    "opciones": [
      {
        "texto": "enlazar la propiedad <code>src</code> con corchetes y leer la señal con paréntesis.",
        "explicacion": "Así el valor se asigna y se actualiza cuando cambia la señal.",
        "correcta": true
      },
      {
        "texto": "escuchar el evento <code>src</code> con paréntesis y pasarle la señal.",
        "explicacion": "<code>src</code> no es un evento.",
        "correcta": false
      },
      {
        "texto": "escribir el nombre de la señal como texto fijo en el atributo <code>src</code>.",
        "explicacion": "Se tomaría el texto literal, no el valor.",
        "correcta": false
      },
      {
        "texto": "escribir la señal entre dobles llaves, sin paréntesis, dentro del atributo <code>src</code>.",
        "explicacion": "Sin paréntesis no se lee el valor de la señal.",
        "correcta": false
      }
    ]
  },
  {
    "id": 21,
    "tema": "Plantillas",
    "titulo": "Reaccionar mientras se escribe",
    "dificultad": "media",
    "enunciado": "Se quiere ejecutar el método <code>buscar</code> cada vez que el usuario escribe en un input, pasándole el evento. Hay que",
    "opciones": [
      {
        "texto": "escuchar el evento <code>input</code> con paréntesis y pasar <code>$event</code> al método.",
        "explicacion": "Los paréntesis conectan el evento y <code>$event</code> entrega sus datos.",
        "correcta": true
      },
      {
        "texto": "enlazar la propiedad <code>input</code> con corchetes y pasar <code>$event</code> al método.",
        "explicacion": "Los corchetes asignan propiedades, no escuchan eventos.",
        "correcta": false
      },
      {
        "texto": "escribir <code>buscar()</code> entre dobles llaves dentro del input.",
        "explicacion": "Solo mostraría el resultado como texto.",
        "correcta": false
      },
      {
        "texto": "escuchar el evento <code>buscar</code> con paréntesis y llamar a un método llamado <code>input</code> en la clase.",
        "explicacion": "Invierte el evento y el método.",
        "correcta": false
      }
    ]
  },
  {
    "id": 22,
    "tema": "Plantillas",
    "titulo": "Bienvenida condicional",
    "dificultad": "facil",
    "enunciado": "Observá la siguiente plantilla:<pre>@if (logueado()) {\n  &lt;p&gt;Bienvenido&lt;/p&gt;\n} @else {\n  &lt;p&gt;Iniciá sesión&lt;/p&gt;\n}</pre> Si <code>logueado()</code> es falso, ¿qué se ve?",
    "opciones": [
      {
        "texto": "Solo el texto \"Iniciá sesión\".",
        "explicacion": "Con la condición falsa se muestra únicamente la rama del <code>@else</code>.",
        "correcta": true
      },
      {
        "texto": "Los dos textos, porque <code>@else</code> agrega contenido.",
        "explicacion": "Las ramas son excluyentes: se muestra una u otra.",
        "correcta": false
      },
      {
        "texto": "Solo el texto \"Bienvenido\".",
        "explicacion": "Esa rama requiere que la condición sea verdadera.",
        "correcta": false
      },
      {
        "texto": "Nada, porque falta un <code>@for</code>.",
        "explicacion": "El <code>@for</code> no es necesario para mostrar contenido condicional.",
        "correcta": false
      }
    ]
  },
  {
    "id": 23,
    "tema": "Plantillas",
    "titulo": "Cuándo usar attr",
    "dificultad": "dificil",
    "enunciado": "El prefijo <code>attr.</code> en un binding se usa cuando",
    "opciones": [
      {
        "texto": "hay que asignar un atributo HTML que no tiene una propiedad equivalente.",
        "explicacion": "Indica que el destino es el atributo del HTML y no una propiedad.",
        "correcta": true
      },
      {
        "texto": "se quiere escuchar un evento que no pertenece al elemento HTML.",
        "explicacion": "Para eventos se usan paréntesis.",
        "correcta": false
      },
      {
        "texto": "el valor viene de una señal computada en vez de una señal común de la clase.",
        "explicacion": "El tipo de señal no influye.",
        "correcta": false
      },
      {
        "texto": "se quiere mostrar el valor como texto.",
        "explicacion": "Para eso se usan dobles llaves.",
        "correcta": false
      }
    ]
  },
  {
    "id": 24,
    "tema": "Plantillas",
    "titulo": "Para qué sirve track",
    "dificultad": "media",
    "enunciado": "En un <code>@for</code>, la expresión <code>track</code> sirve para",
    "opciones": [
      {
        "texto": "que Angular identifique cada elemento y sepa cuál cambió.",
        "explicacion": "Así actualiza solo lo necesario cuando la lista cambia.",
        "correcta": true
      },
      {
        "texto": "ordenar alfabéticamente la lista antes de mostrarla en pantalla al usuario.",
        "explicacion": "No ordena la lista.",
        "correcta": false
      },
      {
        "texto": "contar cuántos elementos tiene la lista.",
        "explicacion": "No cuenta elementos.",
        "correcta": false
      },
      {
        "texto": "filtrar los elementos repetidos.",
        "explicacion": "No filtra elementos.",
        "correcta": false
      }
    ]
  },
  {
    "id": 25,
    "tema": "Plantillas",
    "titulo": "Cuándo se ve el @else",
    "dificultad": "facil",
    "enunciado": "El bloque <code>@else</code> que acompaña a un <code>@if</code> se muestra",
    "opciones": [
      {
        "texto": "cuando la condición del <code>@if</code> es falsa.",
        "explicacion": "Es la alternativa para cuando no se cumple la condición.",
        "correcta": true
      },
      {
        "texto": "siempre, después del contenido del <code>@if</code>.",
        "explicacion": "Se muestra solo si la condición es falsa.",
        "correcta": false
      },
      {
        "texto": "cuando la condición del <code>@if</code> es verdadera.",
        "explicacion": "En ese caso se muestra la rama del <code>@if</code>.",
        "correcta": false
      },
      {
        "texto": "solo si la lista de un <code>@for</code> está vacía.",
        "explicacion": "No depende de ningún <code>@for</code>.",
        "correcta": false
      }
    ]
  },
  {
    "id": 26,
    "tema": "Plantillas",
    "titulo": "Cuántos elementos se repiten",
    "dificultad": "media",
    "enunciado": "Observá la señal de la clase y la plantilla:<pre>// en la clase\nproductos = signal([\n  { id: 1, nombre: 'Mate' },\n  { id: 2, nombre: 'Termo' },\n  { id: 3, nombre: 'Bombilla' },\n]);\n&lt;!-- en la plantilla --&gt;\n&lt;ul&gt;\n  @for (p of productos(); track p.id) {\n    &lt;li&gt;{{ p.nombre }}&lt;/li&gt;\n  }\n&lt;/ul&gt;</pre> ¿Cuántos elementos <code>li</code> se muestran?",
    "opciones": [
      {
        "texto": "3",
        "explicacion": "Se genera un elemento por cada producto de la lista.",
        "correcta": true
      },
      {
        "texto": "1",
        "explicacion": "El bloque se repite por cada producto, no una sola vez.",
        "correcta": false
      },
      {
        "texto": "0, porque falta un <code>@if</code>.",
        "explicacion": "El <code>@for</code> no necesita un <code>@if</code> para funcionar.",
        "correcta": false
      },
      {
        "texto": "4, porque también cuenta la lista <code>ul</code>.",
        "explicacion": "La lista <code>ul</code> está fuera del bloque que se repite.",
        "correcta": false
      }
    ]
  },
  {
    "id": 27,
    "tema": "Plantillas",
    "titulo": "Propiedad y atributo",
    "dificultad": "dificil",
    "enunciado": "La diferencia entre una propiedad y un atributo de un elemento es que",
    "opciones": [
      {
        "texto": "el atributo está escrito en el HTML y la propiedad pertenece al objeto que arma el navegador.",
        "explicacion": "Por eso Angular distingue entre enlazar propiedades y enlazar atributos.",
        "correcta": true
      },
      {
        "texto": "son lo mismo con nombres distintos, y Angular siempre los trata de la misma forma.",
        "explicacion": "Angular ofrece sintaxis distintas para cada uno.",
        "correcta": false
      },
      {
        "texto": "el atributo solo existe en los componentes y la propiedad en los elementos HTML.",
        "explicacion": "Los dos existen en los elementos HTML.",
        "correcta": false
      },
      {
        "texto": "la propiedad se escribe en CSS y el atributo en HTML.",
        "explicacion": "Las propiedades del elemento no son reglas de CSS.",
        "correcta": false
      }
    ]
  },
  {
    "id": 28,
    "tema": "Formularios",
    "titulo": "Crear el formulario",
    "dificultad": "media",
    "enunciado": "Para crear el formulario a partir del modelo se usa",
    "opciones": [
      {
        "texto": "la función <code>form()</code>, pasándole la señal del modelo.",
        "explicacion": "Devuelve los campos del formulario a partir del modelo.",
        "correcta": true
      },
      {
        "texto": "la función <code>signal()</code>, pasándole el HTML de los inputs.",
        "explicacion": "<code>signal()</code> crea el modelo, no el formulario.",
        "correcta": false
      },
      {
        "texto": "la función <code>computed()</code>, que arma el formulario sola.",
        "explicacion": "Una computada no crea formularios.",
        "correcta": false
      },
      {
        "texto": "el decorador del componente, agregando el modelo a sus importaciones.",
        "explicacion": "Las importaciones son para componentes.",
        "correcta": false
      }
    ]
  },
  {
    "id": 29,
    "tema": "Formularios",
    "titulo": "Campos según el modelo",
    "dificultad": "media",
    "enunciado": "Si el modelo tiene las propiedades <code>nombre</code> y <code>email</code>, el formulario creado a partir de él tiene",
    "opciones": [
      {
        "texto": "un campo para <code>nombre</code> y otro para <code>email</code>, accesibles con notación de punto.",
        "explicacion": "Los campos siguen la misma forma que el modelo.",
        "correcta": true
      },
      {
        "texto": "un único campo que guarda los dos valores juntos, separados por una coma.",
        "explicacion": "Cada propiedad tiene su propio campo.",
        "correcta": false
      },
      {
        "texto": "tantos campos como inputs haya en la plantilla, sin importar el modelo.",
        "explicacion": "Los campos salen del modelo, no de la plantilla.",
        "correcta": false
      },
      {
        "texto": "ningún campo hasta que se agregan las reglas de validación.",
        "explicacion": "Los campos existen desde que se crea el formulario.",
        "correcta": false
      }
    ]
  },
  {
    "id": 30,
    "tema": "Formularios",
    "titulo": "Dónde se declaran",
    "dificultad": "facil",
    "enunciado": "La señal del modelo y el formulario creado con <code>form()</code> se declaran",
    "opciones": [
      {
        "texto": "como propiedades de la clase del componente.",
        "explicacion": "Así la plantilla puede vincular sus inputs a esos campos.",
        "correcta": true
      },
      {
        "texto": "dentro de la plantilla, junto a cada input.",
        "explicacion": "La plantilla muestra y vincula, no declara datos.",
        "correcta": false
      },
      {
        "texto": "en un archivo CSS aparte.",
        "explicacion": "Los estilos no declaran datos.",
        "correcta": false
      },
      {
        "texto": "en el selector del componente.",
        "explicacion": "El selector solo define la etiqueta.",
        "correcta": false
      }
    ]
  },
  {
    "id": 31,
    "tema": "Formularios",
    "titulo": "El modelo se actualiza",
    "dificultad": "media",
    "enunciado": "El usuario escribe su nombre en un input vinculado al formulario. Si después se lee la señal del modelo, esta",
    "opciones": [
      {
        "texto": "contiene el nombre escrito, porque el modelo se actualiza automáticamente.",
        "explicacion": "El vínculo mantiene sincronizados el input y el modelo.",
        "correcta": true
      },
      {
        "texto": "sigue vacía hasta que se envía el formulario con un botón de tipo submit.",
        "explicacion": "La actualización ocurre mientras se escribe.",
        "correcta": false
      },
      {
        "texto": "contiene el nombre, pero solo si se llamó a <code>set</code> a mano.",
        "explicacion": "No hace falta llamar a <code>set</code>.",
        "correcta": false
      },
      {
        "texto": "da error, porque el modelo no se puede leer.",
        "explicacion": "El modelo es una señal y se lee como cualquier otra.",
        "correcta": false
      }
    ]
  },
  {
    "id": 32,
    "tema": "Formularios",
    "titulo": "Casilla de verificación",
    "dificultad": "facil",
    "enunciado": "Una casilla \"Acepto los términos\" vinculada a un campo guarda",
    "opciones": [
      {
        "texto": "un valor verdadero o falso, según esté marcada.",
        "explicacion": "Las casillas de verificación se corresponden con valores booleanos.",
        "correcta": true
      },
      {
        "texto": "el texto de la etiqueta que acompaña a la casilla cuando el usuario la marca.",
        "explicacion": "No se guarda la etiqueta.",
        "correcta": false
      },
      {
        "texto": "un número que cuenta cuántas veces se hizo clic.",
        "explicacion": "No cuenta clics.",
        "correcta": false
      },
      {
        "texto": "un valor vacío hasta que se envía el formulario.",
        "explicacion": "Se actualiza en el momento.",
        "correcta": false
      }
    ]
  },
  {
    "id": 33,
    "tema": "Formularios",
    "titulo": "Formato de correo",
    "dificultad": "facil",
    "enunciado": "Para exigir que un campo tenga formato de correo electrónico se usa el validador",
    "opciones": [
      {
        "texto": "<code>email</code>",
        "explicacion": "Comprueba que el texto tenga forma de dirección de correo.",
        "correcta": true
      },
      {
        "texto": "<code>required</code>",
        "explicacion": "Solo exige que el campo no esté vacío.",
        "correcta": false
      },
      {
        "texto": "<code>minLength</code>",
        "explicacion": "Controla la cantidad mínima de caracteres.",
        "correcta": false
      },
      {
        "texto": "<code>max</code>",
        "explicacion": "Controla el valor máximo de un número.",
        "correcta": false
      }
    ]
  },
  {
    "id": 34,
    "tema": "Formularios",
    "titulo": "Campo obligatorio",
    "dificultad": "facil",
    "enunciado": "El validador <code>required</code> hace que el campo",
    "opciones": [
      {
        "texto": "sea inválido mientras esté vacío.",
        "explicacion": "Exige que el usuario complete un valor.",
        "correcta": true
      },
      {
        "texto": "se complete solo con un valor por defecto.",
        "explicacion": "No completa valores.",
        "correcta": false
      },
      {
        "texto": "no pueda editarse después de escrito.",
        "explicacion": "No bloquea la edición.",
        "correcta": false
      },
      {
        "texto": "se muestre siempre marcado en rojo.",
        "explicacion": "La apariencia depende de los estilos.",
        "correcta": false
      }
    ]
  },
  {
    "id": 35,
    "tema": "Formularios",
    "titulo": "Cuándo se valida",
    "dificultad": "media",
    "enunciado": "Un campo tiene la regla <code>required</code> y está vacío. En cuanto el usuario escribe algo, el campo",
    "opciones": [
      {
        "texto": "pasa a ser válido, sin esperar al envío.",
        "explicacion": "La validación reacciona a cada cambio de valor.",
        "correcta": true
      },
      {
        "texto": "sigue inválido hasta que se envía el formulario.",
        "explicacion": "No espera al envío.",
        "correcta": false
      },
      {
        "texto": "sigue inválido hasta que se recarga la página.",
        "explicacion": "No hace falta recargar.",
        "correcta": false
      },
      {
        "texto": "solo se revalida si se llama a un método de validación.",
        "explicacion": "Se revalida automáticamente.",
        "correcta": false
      }
    ]
  },
  {
    "id": 36,
    "tema": "Inyección",
    "titulo": "Pedir un servicio",
    "dificultad": "media",
    "enunciado": "¿Cuál es la forma correcta de obtener el servicio <code>Carrito</code> dentro de un componente?",
    "opciones": [
      {
        "texto": "<code>private carrito = inject(Carrito);</code>",
        "explicacion": "Angular entrega la instancia que gestiona.",
        "correcta": true
      },
      {
        "texto": "<code>private carrito = new Carrito();</code>",
        "explicacion": "Crea una instancia propia que no se comparte.",
        "correcta": false
      },
      {
        "texto": "<code>private carrito = Carrito();</code>",
        "explicacion": "Una clase no se usa llamándola como función.",
        "correcta": false
      },
      {
        "texto": "<code>private carrito = import(Carrito);</code>",
        "explicacion": "<code>import</code> no entrega servicios.",
        "correcta": false
      }
    ]
  },
  {
    "id": 37,
    "tema": "Inyección",
    "titulo": "Cambiar una regla compartida",
    "dificultad": "facil",
    "enunciado": "Una regla de cálculo de envío está en un servicio que usan cinco componentes. Si la regla cambia,",
    "opciones": [
      {
        "texto": "alcanza con modificar el servicio y los cinco componentes usan la regla nueva.",
        "explicacion": "La lógica está en un solo lugar.",
        "correcta": true
      },
      {
        "texto": "hay que modificar uno por uno los cinco componentes que usan el servicio.",
        "explicacion": "Justamente el servicio evita eso.",
        "correcta": false
      },
      {
        "texto": "hay que borrar el servicio y crearlo de nuevo.",
        "explicacion": "Alcanza con editarlo.",
        "correcta": false
      },
      {
        "texto": "los componentes siguen usando la regla vieja hasta recargar el servidor.",
        "explicacion": "Usan el código del servicio.",
        "correcta": false
      }
    ]
  },
  {
    "id": 38,
    "tema": "Inyección",
    "titulo": "Servicio y componente",
    "dificultad": "facil",
    "enunciado": "La diferencia principal entre un servicio y un componente es que",
    "opciones": [
      {
        "texto": "el servicio no tiene plantilla: aporta lógica, no una parte visible.",
        "explicacion": "Los componentes muestran; los servicios comparten lógica.",
        "correcta": true
      },
      {
        "texto": "el servicio se muestra en pantalla y el componente no.",
        "explicacion": "Es al revés.",
        "correcta": false
      },
      {
        "texto": "el servicio solo puede usarse una vez en toda la aplicación.",
        "explicacion": "Se puede inyectar en muchos lugares.",
        "correcta": false
      },
      {
        "texto": "el servicio se escribe en HTML y el componente en TypeScript.",
        "explicacion": "Los dos se escriben en TypeScript.",
        "correcta": false
      }
    ]
  },
  {
    "id": 39,
    "tema": "Inyección",
    "titulo": "Buen candidato a servicio",
    "dificultad": "media",
    "enunciado": "¿Cuál de estas tareas es un buen candidato para un servicio?",
    "opciones": [
      {
        "texto": "Pedir al servidor la lista de productos que usan varias pantallas.",
        "explicacion": "Es lógica compartida que no depende de una parte visual.",
        "correcta": true
      },
      {
        "texto": "Definir el color y el tamaño de los botones de la página de inicio de la tienda.",
        "explicacion": "Es un tema de estilos.",
        "correcta": false
      },
      {
        "texto": "Mostrar la foto de un producto dentro de una tarjeta.",
        "explicacion": "Es trabajo de la plantilla de un componente.",
        "correcta": false
      },
      {
        "texto": "Repetir una fila de tabla por cada producto de la lista.",
        "explicacion": "Se hace con un <code>@for</code> en la plantilla.",
        "correcta": false
      }
    ]
  },
  {
    "id": 40,
    "tema": "Inyección",
    "titulo": "Cambio visible en otro componente",
    "dificultad": "dificil",
    "enunciado": "Dos componentes inyectan el mismo servicio, que guarda el carrito en una señal. Uno de ellos agrega un producto. ¿Qué ve el otro componente?",
    "opciones": [
      {
        "texto": "El carrito con el producto nuevo, porque los dos usan la misma instancia.",
        "explicacion": "Comparten el servicio y, con él, la señal.",
        "correcta": true
      },
      {
        "texto": "El carrito sin cambios, porque cada componente tiene su propia copia.",
        "explicacion": "<code>inject</code> entrega la misma instancia.",
        "correcta": false
      },
      {
        "texto": "Un error, porque dos componentes no pueden usar el mismo servicio a la vez.",
        "explicacion": "Compartirlo es justamente su propósito.",
        "correcta": false
      },
      {
        "texto": "El producto nuevo, pero recién después de recargar la página completa.",
        "explicacion": "La señal actualiza la pantalla sin recargar.",
        "correcta": false
      }
    ]
  }
];
