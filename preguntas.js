// Banco Angular Essentials - 80 preguntas (generado a partir de banco_angular_40.gift y banco_angular_ampliacion_40.gift)
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
  },
  {
    "id": 41,
    "tema": "Signals",
    "titulo": "Selección que depende de una lista",
    "dificultad": "facil",
    "enunciado": "La señal <code>talles</code> guarda los talles disponibles y otra señal guarda el talle elegido. Querés poder cambiar el elegido con <code>set</code>, pero que vuelva al primer talle cada vez que cambia la lista. ¿Qué conviene usar?",
    "opciones": [
      {
        "texto": "<code>linkedSignal(() =&gt; talles()[0])</code>",
        "explicacion": "Es una señal escribible que vuelve a calcular su valor cuando cambia la señal de la que depende.",
        "correcta": true
      },
      {
        "texto": "<code>computed(() =&gt; talles()[0])</code>",
        "explicacion": "Se recalcula cuando cambia la lista, pero una <code>computed</code> es de solo lectura y no admite <code>set</code>.",
        "correcta": false
      },
      {
        "texto": "<code>signal(talles()[0])</code>",
        "explicacion": "Toma el primer talle una sola vez, al crearse, y no se entera de los cambios posteriores de la lista.",
        "correcta": false
      },
      {
        "texto": "Un <code>effect</code> que lea <code>talles()</code> y haga <code>set</code> sobre una señal común cada vez que cambie la lista.",
        "explicacion": "Copiar estado entre señales con un effect es mala práctica; <code>linkedSignal</code> existe justamente para este caso.",
        "correcta": false
      }
    ]
  },
  {
    "id": 42,
    "tema": "Signals",
    "titulo": "Leer una señal sin depender de ella",
    "dificultad": "media",
    "enunciado": "Este effect registra en la consola cada cambio de página:<pre>effect(() =&gt; {\n  console.log(`Página ${pagina()} - usuario ${usuario()}`);\n});</pre> Querés que vuelva a ejecutarse solo cuando cambia <code>pagina</code>, aunque siga mostrando el usuario actual. ¿Qué cambiás?",
    "opciones": [
      {
        "texto": "Leer el usuario con <code>untracked(usuario)</code>.",
        "explicacion": "<code>untracked</code> devuelve el valor de la señal sin registrarla como dependencia del effect.",
        "correcta": true
      },
      {
        "texto": "Escribir <code>usuario</code> sin paréntesis dentro del mensaje.",
        "explicacion": "Sin paréntesis se usa la señal en sí y no su valor; no es la forma de mostrar el usuario sin depender de él.",
        "correcta": false
      },
      {
        "texto": "Reemplazar el <code>effect</code> por una <code>computed</code> con el mismo código.",
        "explicacion": "Una <code>computed</code> sirve para derivar valores, no para escribir en la consola, y además seguiría dependiendo de las dos señales.",
        "correcta": false
      },
      {
        "texto": "Leer <code>usuario()</code> antes que <code>pagina()</code>, porque el effect solo depende de la última señal que lee.",
        "explicacion": "El orden no importa: toda señal que se lee dentro del effect queda registrada como dependencia.",
        "correcta": false
      }
    ]
  },
  {
    "id": 43,
    "tema": "Signals",
    "titulo": "Asignar el mismo valor",
    "dificultad": "media",
    "enunciado": "La señal <code>filtro</code> vale <code>'todos'</code> y una <code>computed</code> depende de ella. Si ejecutás <code>filtro.set('todos')</code>,",
    "opciones": [
      {
        "texto": "la señal no avisa ningún cambio, porque el valor nuevo es igual al anterior.",
        "explicacion": "Por defecto las señales comparan el valor nuevo con el anterior usando <code>Object.is</code>; si son iguales, no notifican a quienes dependen de ellas.",
        "correcta": true
      },
      {
        "texto": "la <code>computed</code> se recalcula igual, porque cada <code>set</code> cuenta como un cambio.",
        "explicacion": "Un <code>set</code> con el mismo valor no se considera un cambio, así que no invalida a las señales que dependen de ella.",
        "correcta": false
      },
      {
        "texto": "Angular muestra un error, porque no se puede asignar el valor que la señal ya tiene.",
        "explicacion": "Asignar el mismo valor está permitido; simplemente no produce ningún aviso.",
        "correcta": false
      },
      {
        "texto": "la señal vuelve a su valor inicial y después toma <code>'todos'</code>, así que la <code>computed</code> se recalcula dos veces.",
        "explicacion": "La señal no pasa por ningún valor intermedio: compara el valor nuevo con el actual y, si son iguales, no hace nada.",
        "correcta": false
      }
    ]
  },
  {
    "id": 44,
    "tema": "Signals",
    "titulo": "Volver a pedir los datos de un resource",
    "dificultad": "facil",
    "enunciado": "Un <code>resource</code> llamado <code>pedidos</code> trae la lista de pedidos. Tenés un botón \"Actualizar\" que tiene que volver a pedirla al servidor aunque <code>params</code> no haya cambiado. ¿Qué llamás?",
    "opciones": [
      {
        "texto": "<code>pedidos.reload()</code>",
        "explicacion": "<code>reload</code> vuelve a ejecutar el loader con los mismos parámetros.",
        "correcta": true
      },
      {
        "texto": "<code>pedidos.value()</code>",
        "explicacion": "Lee el último valor recibido, pero no dispara una carga nueva.",
        "correcta": false
      },
      {
        "texto": "<code>pedidos.set(undefined)</code>",
        "explicacion": "Cambia a mano el valor guardado, pero no vuelve a ejecutar el loader.",
        "correcta": false
      },
      {
        "texto": "Nada, porque el recurso se vuelve a cargar solo cada vez que el usuario hace clic en algún botón de la página.",
        "explicacion": "El recurso vuelve a cargar cuando cambia <code>params</code> o cuando se llama a <code>reload</code>, no por los clics.",
        "correcta": false
      }
    ]
  },
  {
    "id": 45,
    "tema": "Signals",
    "titulo": "Convertir un Observable en señal",
    "dificultad": "facil",
    "enunciado": "Un servicio te da el Observable <code>precios$</code> y querés leer su último valor en la plantilla como si fuera una señal. ¿Qué función usás?",
    "opciones": [
      {
        "texto": "<code>toSignal(precios$)</code>, de <code>@angular/core/rxjs-interop</code>.",
        "explicacion": "Crea una señal que se actualiza con cada valor que emite el Observable.",
        "correcta": true
      },
      {
        "texto": "<code>signal(precios$)</code>, de <code>@angular/core</code>.",
        "explicacion": "Crearía una señal cuyo valor es el Observable mismo, no los valores que emite.",
        "correcta": false
      },
      {
        "texto": "<code>computed(() =&gt; precios$)</code>, de <code>@angular/core</code>.",
        "explicacion": "La <code>computed</code> devolvería el Observable sin suscribirse para leer sus valores.",
        "correcta": false
      },
      {
        "texto": "<code>toObservable(precios$)</code>, de <code>@angular/core/rxjs-interop</code>.",
        "explicacion": "Hace la conversión contraria: transforma una señal en un Observable.",
        "correcta": false
      }
    ]
  },
  {
    "id": 46,
    "tema": "Signals",
    "titulo": "Limpiar antes de volver a ejecutar un effect",
    "dificultad": "facil",
    "enunciado": "Un <code>effect</code> arranca un <code>setInterval</code> que usa el valor de la señal <code>velocidad</code>. Para que no se acumulen intervalos cada vez que el effect vuelve a correr, lo indicado es",
    "opciones": [
      {
        "texto": "cancelar el intervalo en un callback registrado con <code>onCleanup</code>.",
        "explicacion": "Ese callback corre antes de la siguiente ejecución del effect y también cuando el effect se destruye.",
        "correcta": true
      },
      {
        "texto": "leer <code>velocidad</code> con <code>untracked</code> para que el effect no vuelva a ejecutarse nunca.",
        "explicacion": "Así el effect dejaría de reaccionar a los cambios de <code>velocidad</code>, y justamente se necesita que reaccione a ellos.",
        "correcta": false
      },
      {
        "texto": "crear el intervalo dentro de una <code>computed</code>, que se limpia sola.",
        "explicacion": "Las <code>computed</code> son para derivar valores, no para arrancar tareas como un intervalo.",
        "correcta": false
      },
      {
        "texto": "llamar a <code>effect</code> otra vez dentro del mismo effect, para que el nuevo reemplace al anterior y cancele su intervalo.",
        "explicacion": "Crear un effect dentro de otro no cancela nada y sumaría todavía más intervalos.",
        "correcta": false
      }
    ]
  },
  {
    "id": 47,
    "tema": "Signals",
    "titulo": "Dependencias de una computed",
    "dificultad": "media",
    "enunciado": "Observá esta señal:<pre>const saludo = computed(() =&gt;\n  mostrarNombre() ? `Hola, ${nombre()}` : 'Hola'\n);</pre> Mientras <code>mostrarNombre()</code> sea <code>false</code>, si cambia <code>nombre</code>,",
    "opciones": [
      {
        "texto": "<code>saludo</code> no se recalcula, porque en su última ejecución no leyó <code>nombre</code>.",
        "explicacion": "Solo quedan registradas como dependencias las señales que se leyeron en la última ejecución.",
        "correcta": true
      },
      {
        "texto": "<code>saludo</code> se recalcula igual, porque <code>nombre</code> aparece escrito en la función.",
        "explicacion": "Lo que cuenta es qué señales se leyeron al ejecutar la función, no cuáles aparecen en el código.",
        "correcta": false
      },
      {
        "texto": "<code>saludo</code> pasa a valer <code>undefined</code> hasta que <code>mostrarNombre</code> vuelva a ser verdadero.",
        "explicacion": "El valor guardado sigue siendo <code>'Hola'</code>, porque ninguna de sus dependencias cambió.",
        "correcta": false
      },
      {
        "texto": "Angular muestra un error, porque una <code>computed</code> tiene que leer siempre las mismas señales en cada ejecución.",
        "explicacion": "Las dependencias pueden cambiar de una ejecución a otra; es un comportamiento normal.",
        "correcta": false
      }
    ]
  },
  {
    "id": 48,
    "tema": "Componentes",
    "titulo": "Mostrar el contenido que pasa el padre",
    "dificultad": "facil",
    "enunciado": "El componente <code>tienda-tarjeta</code> se usa así: <code>&lt;tienda-tarjeta&gt;&lt;p&gt;Oferta&lt;/p&gt;&lt;/tienda-tarjeta&gt;</code>. ¿Qué tiene que tener su plantilla para que ese párrafo se vea dentro de la tarjeta?",
    "opciones": [
      {
        "texto": "Un elemento <code>&lt;ng-content /&gt;</code> en el lugar donde va el contenido.",
        "explicacion": "Marca el lugar donde se proyecta el contenido que el padre escribe entre las etiquetas del componente.",
        "correcta": true
      },
      {
        "texto": "Un <code>input()</code> llamado <code>contenido</code> que reciba el párrafo.",
        "explicacion": "Los inputs reciben valores por medio de bindings, no el HTML escrito entre las etiquetas.",
        "correcta": false
      },
      {
        "texto": "Un <code>&lt;router-outlet /&gt;</code> dentro de la tarjeta.",
        "explicacion": "El outlet muestra el componente de la ruta actual, no el contenido que pasa el padre.",
        "correcta": false
      },
      {
        "texto": "Nada, porque Angular agrega solo, al final de la plantilla, todo lo que se escribe entre las etiquetas del componente.",
        "explicacion": "Sin <code>&lt;ng-content&gt;</code>, ese contenido no se muestra.",
        "correcta": false
      }
    ]
  },
  {
    "id": 49,
    "tema": "Componentes",
    "titulo": "Proyectar contenido en varios lugares",
    "dificultad": "facil",
    "enunciado": "Una tarjeta tiene que mostrar arriba el <code>&lt;h2&gt;</code> que le pasan y, abajo, el resto del contenido. ¿Cómo lo resolvés en su plantilla?",
    "opciones": [
      {
        "texto": "Con <code>&lt;ng-content select=\"h2\" /&gt;</code> arriba y un <code>&lt;ng-content /&gt;</code> sin <code>select</code> abajo.",
        "explicacion": "<code>select</code> elige qué contenido va en cada lugar, y el <code>&lt;ng-content&gt;</code> sin <code>select</code> recibe todo lo demás.",
        "correcta": true
      },
      {
        "texto": "Con dos <code>&lt;ng-content /&gt;</code> sin atributos: el primero recibe el título y el segundo, el resto.",
        "explicacion": "Sin <code>select</code> no hay forma de separar el contenido; no se reparte según el orden.",
        "correcta": false
      },
      {
        "texto": "Con <code>&lt;ng-content [index]=\"0\" /&gt;</code> arriba y <code>&lt;ng-content [index]=\"1\" /&gt;</code> abajo.",
        "explicacion": "No existe un input <code>index</code>; el contenido se reparte con el atributo <code>select</code>.",
        "correcta": false
      },
      {
        "texto": "Con un <code>@if</code> que revise si el contenido proyectado empieza con un <code>&lt;h2&gt;</code> y lo mueva arriba.",
        "explicacion": "<code>@if</code> evalúa expresiones del componente; no puede inspeccionar ni mover el contenido proyectado.",
        "correcta": false
      }
    ]
  },
  {
    "id": 50,
    "tema": "Componentes",
    "titulo": "Input booleano escrito como atributo",
    "dificultad": "media",
    "enunciado": "Querés poder escribir <code>&lt;tienda-boton deshabilitado&gt;</code>, con el atributo sin valor, y que el input reciba <code>true</code>. ¿Cómo declarás el input?",
    "opciones": [
      {
        "texto": "<code>deshabilitado = input(false, {transform: booleanAttribute});</code>",
        "explicacion": "La transformación convierte el atributo presente en <code>true</code> y su ausencia deja el valor por defecto, <code>false</code>.",
        "correcta": true
      },
      {
        "texto": "<code>deshabilitado = input&lt;boolean&gt;();</code>",
        "explicacion": "Sin transformación, el atributo escrito sin valor llega como una cadena vacía, que no es un booleano.",
        "correcta": false
      },
      {
        "texto": "<code>deshabilitado = input.required&lt;boolean&gt;();</code>",
        "explicacion": "Que el input sea obligatorio no cambia cómo se interpreta un atributo escrito sin valor.",
        "correcta": false
      },
      {
        "texto": "<code>deshabilitado = model(true);</code>",
        "explicacion": "<code>model</code> sirve para el enlace de dos vías; su valor inicial no tiene que ver con cómo se interpreta el atributo.",
        "correcta": false
      }
    ]
  },
  {
    "id": 51,
    "tema": "Componentes",
    "titulo": "Input con valor por defecto",
    "dificultad": "facil",
    "enunciado": "Un componente declara <code>cantidad = input(1)</code> y el padre lo usa sin pasarle <code>cantidad</code>. ¿Qué devuelve <code>cantidad()</code> en el hijo?",
    "opciones": [
      {
        "texto": "<code>1</code>",
        "explicacion": "El argumento de <code>input()</code> es el valor por defecto, que se usa cuando el padre no pasa nada.",
        "correcta": true
      },
      {
        "texto": "<code>undefined</code>",
        "explicacion": "Eso pasaría con <code>input()</code> sin valor por defecto.",
        "correcta": false
      },
      {
        "texto": "<code>0</code>",
        "explicacion": "Un input numérico no arranca en 0 por su cuenta: toma el valor por defecto indicado.",
        "correcta": false
      },
      {
        "texto": "Nada, porque Angular muestra un error al compilar por no haber pasado el input desde el padre.",
        "explicacion": "Ese error aparece solo con <code>input.required</code>; un input con valor por defecto es opcional.",
        "correcta": false
      }
    ]
  },
  {
    "id": 52,
    "tema": "Componentes",
    "titulo": "Acceder a un elemento desde la clase",
    "dificultad": "facil",
    "enunciado": "En la plantilla tenés <code>&lt;input #buscador /&gt;</code> y querés ponerle el foco desde la clase del componente. ¿Qué declarás en la clase?",
    "opciones": [
      {
        "texto": "<code>buscador = viewChild&lt;ElementRef&gt;('buscador');</code>",
        "explicacion": "Es una consulta que devuelve una señal con la referencia al elemento de la plantilla.",
        "correcta": true
      },
      {
        "texto": "<code>buscador = input&lt;ElementRef&gt;('buscador');</code>",
        "explicacion": "Un input recibe valores que pasa el componente padre, no elementos de la propia plantilla.",
        "correcta": false
      },
      {
        "texto": "<code>buscador = inject(ElementRef);</code>",
        "explicacion": "Así obtenés el elemento anfitrión del componente, no el <code>&lt;input&gt;</code> de su plantilla.",
        "correcta": false
      },
      {
        "texto": "<code>buscador = document.querySelector('#buscador');</code>",
        "explicacion": "<code>#buscador</code> es una variable de referencia de la plantilla y no un <code>id</code>, así que ese selector no encuentra el elemento.",
        "correcta": false
      }
    ]
  },
  {
    "id": 53,
    "tema": "Componentes",
    "titulo": "Clase en el elemento anfitrión",
    "dificultad": "facil",
    "enunciado": "Querés que el propio elemento <code>&lt;tienda-chip&gt;</code> tenga la clase <code>seleccionado</code> cuando la señal <code>activo</code> del componente sea verdadera. La forma recomendada es",
    "opciones": [
      {
        "texto": "usar la propiedad <code>host</code> del decorador con <code>'[class.seleccionado]': 'activo()'</code>.",
        "explicacion": "La propiedad <code>host</code> permite agregar bindings al elemento anfitrión del componente.",
        "correcta": true
      },
      {
        "texto": "envolver toda la plantilla en un <code>&lt;div [class.seleccionado]=\"activo()\"&gt;</code>.",
        "explicacion": "La clase quedaría en ese <code>div</code> interno y no en el elemento <code>&lt;tienda-chip&gt;</code>.",
        "correcta": false
      },
      {
        "texto": "escribir la regla <code>.seleccionado</code> en los estilos del componente, porque Angular la aplica sola.",
        "explicacion": "Definir la regla CSS no agrega la clase a ningún elemento.",
        "correcta": false
      },
      {
        "texto": "pedirle a cada componente padre que escriba <code>class=\"seleccionado\"</code> cuando use el chip.",
        "explicacion": "La clase quedaría fija, sin depender de <code>activo</code>, y cada padre tendría que repetir esa lógica.",
        "correcta": false
      }
    ]
  },
  {
    "id": 54,
    "tema": "Componentes",
    "titulo": "Alcance de los estilos de un componente",
    "dificultad": "facil",
    "enunciado": "En los estilos del componente <code>tienda-carrito</code> escribís <code>p { color: gray; }</code>. Con la configuración por defecto, esa regla se aplica",
    "opciones": [
      {
        "texto": "solo a los <code>&lt;p&gt;</code> de la plantilla de ese componente.",
        "explicacion": "Por defecto Angular encapsula los estilos de cada componente para que no afecten a los demás.",
        "correcta": true
      },
      {
        "texto": "a todos los <code>&lt;p&gt;</code> de la aplicación, porque es CSS común.",
        "explicacion": "La encapsulación por defecto evita que los estilos de un componente se apliquen en el resto de la aplicación.",
        "correcta": false
      },
      {
        "texto": "solo a los <code>&lt;p&gt;</code> de los componentes hijos de <code>tienda-carrito</code>.",
        "explicacion": "Tampoco llega a los hijos: se aplica a la plantilla del propio componente.",
        "correcta": false
      },
      {
        "texto": "a ningún elemento, hasta que la regla se copie en el archivo de estilos globales del proyecto.",
        "explicacion": "Los estilos del componente funcionan sin copiarlos a ningún archivo global.",
        "correcta": false
      }
    ]
  },
  {
    "id": 55,
    "tema": "Plantillas",
    "titulo": "Un bloque distinto para cada valor",
    "dificultad": "facil",
    "enunciado": "La señal <code>estado</code> puede valer <code>'pendiente'</code>, <code>'enviado'</code> o <code>'entregado'</code>, y querés mostrar un mensaje distinto para cada caso. ¿Qué bloque conviene usar?",
    "opciones": [
      {
        "texto": "<code>@switch (estado())</code>, con un <code>@case</code> para cada valor.",
        "explicacion": "Muestra el bloque del <code>@case</code> que coincide con el valor de la expresión.",
        "correcta": true
      },
      {
        "texto": "<code>@for (estado of estados(); track estado)</code>",
        "explicacion": "<code>@for</code> repite contenido por cada elemento de una lista; no elige un bloque según un valor.",
        "correcta": false
      },
      {
        "texto": "<code>@defer (on estado())</code>",
        "explicacion": "<code>@defer</code> sirve para cargar más tarde una parte de la plantilla, no para elegir entre casos.",
        "correcta": false
      },
      {
        "texto": "Tres bloques <code>@else</code> seguidos, uno por cada estado, sin ningún <code>@if</code> antes.",
        "explicacion": "Un <code>@else</code> siempre va después de un <code>@if</code>; por sí solo no evalúa ninguna condición.",
        "correcta": false
      }
    ]
  },
  {
    "id": 56,
    "tema": "Plantillas",
    "titulo": "Numerar los elementos de un @for",
    "dificultad": "facil",
    "enunciado": "Dentro de un <code>@for</code> querés mostrar el número de cada elemento, empezando desde 1. ¿Qué escribís?",
    "opciones": [
      {
        "texto": "<code>{{ $index + 1 }}</code>",
        "explicacion": "<code>$index</code> empieza en 0, así que hay que sumarle 1 para numerar desde 1.",
        "correcta": true
      },
      {
        "texto": "<code>{{ $index }}</code>",
        "explicacion": "La numeración empezaría en 0.",
        "correcta": false
      },
      {
        "texto": "<code>{{ $count }}</code>",
        "explicacion": "<code>$count</code> es la cantidad total de elementos, el mismo número en todas las vueltas.",
        "correcta": false
      },
      {
        "texto": "<code>{{ track + 1 }}</code>",
        "explicacion": "<code>track</code> no es una variable: es la expresión que identifica a cada elemento.",
        "correcta": false
      }
    ]
  },
  {
    "id": 57,
    "tema": "Plantillas",
    "titulo": "Variables locales con @let",
    "dificultad": "facil",
    "enunciado": "En una plantilla escribís <code>@let total = precio() * cantidad();</code>. ¿Qué conseguís?",
    "opciones": [
      {
        "texto": "Una variable que podés usar en la plantilla y que se actualiza cuando cambian las señales.",
        "explicacion": "<code>@let</code> declara una variable de plantilla cuyo valor se mantiene al día con sus dependencias.",
        "correcta": true
      },
      {
        "texto": "Una propiedad nueva llamada <code>total</code> en la clase del componente.",
        "explicacion": "La variable existe solo en la plantilla; no crea miembros en la clase.",
        "correcta": false
      },
      {
        "texto": "Una señal escribible que podés modificar con <code>total.set(...)</code> desde un evento.",
        "explicacion": "Las variables declaradas con <code>@let</code> son de solo lectura y no se pueden reasignar.",
        "correcta": false
      },
      {
        "texto": "Un valor que se calcula una sola vez, al mostrar la plantilla, y que queda fijo aunque después cambien las señales.",
        "explicacion": "Se vuelve a evaluar cuando cambian las señales que usa, como el resto de la plantilla.",
        "correcta": false
      }
    ]
  },
  {
    "id": 58,
    "tema": "Plantillas",
    "titulo": "Cargar una parte de la plantilla más tarde",
    "dificultad": "facil",
    "enunciado": "Al final de una página hay un mapa pesado que muchos usuarios nunca llegan a ver. ¿Qué bloque te permite cargarlo recién cuando el usuario baja hasta esa zona?",
    "opciones": [
      {
        "texto": "<code>@defer (on viewport)</code>, con un <code>@placeholder</code> que ocupe su lugar.",
        "explicacion": "El contenido diferido se carga cuando el placeholder entra en la parte visible de la pantalla.",
        "correcta": true
      },
      {
        "texto": "<code>@if (on viewport)</code> alrededor del mapa.",
        "explicacion": "<code>@if</code> evalúa una condición; no tiene disparadores como <code>on viewport</code>.",
        "correcta": false
      },
      {
        "texto": "<code>@for</code> con <code>track viewport</code>.",
        "explicacion": "<code>track</code> identifica los elementos de una lista; no controla cuándo se carga algo.",
        "correcta": false
      },
      {
        "texto": "<code>@switch (viewport)</code>, con un <code>@case</code> que muestre el mapa cuando el usuario llega hasta él.",
        "explicacion": "<code>@switch</code> elige un bloque según un valor; no demora la carga de nada.",
        "correcta": false
      }
    ]
  },
  {
    "id": 59,
    "tema": "Plantillas",
    "titulo": "Leer una propiedad de un valor nulo",
    "dificultad": "facil",
    "enunciado": "La señal <code>usuario</code> vale <code>null</code> hasta que llegan los datos. ¿Qué escribís en la plantilla para mostrar su nombre sin que falle mientras tanto?",
    "opciones": [
      {
        "texto": "<code>{{ usuario()?.nombre }}</code>",
        "explicacion": "El operador <code>?.</code> corta la expresión cuando el valor es nulo, en lugar de dar error.",
        "correcta": true
      },
      {
        "texto": "<code>{{ usuario().nombre }}</code>",
        "explicacion": "Leer una propiedad de <code>null</code> da error mientras no lleguen los datos.",
        "correcta": false
      },
      {
        "texto": "<code>{{ usuario?.nombre() }}</code>",
        "explicacion": "El que puede ser nulo es el valor de la señal, no la señal; además, <code>nombre</code> no es una función.",
        "correcta": false
      },
      {
        "texto": "<code>{{ usuario()!.nombre }}</code>",
        "explicacion": "El <code>!</code> solo le asegura a TypeScript que el valor no es nulo; si lo es, falla igual al ejecutar.",
        "correcta": false
      }
    ]
  },
  {
    "id": 60,
    "tema": "Plantillas",
    "titulo": "Estilo con unidad",
    "dificultad": "facil",
    "enunciado": "La señal <code>ancho</code> guarda un número y querés usarlo como ancho de una barra, en píxeles. ¿Qué binding escribís?",
    "opciones": [
      {
        "texto": "<code>[style.width.px]=\"ancho()\"</code>",
        "explicacion": "El sufijo que va después del nombre de la propiedad indica la unidad que se agrega al valor.",
        "correcta": true
      },
      {
        "texto": "<code>[style.width]=\"ancho()\"</code>",
        "explicacion": "Sin unidad, un número solo no es un ancho válido en CSS y no se aplica.",
        "correcta": false
      },
      {
        "texto": "<code>[class.width]=\"ancho() + 'px'\"</code>",
        "explicacion": "<code>[class.x]</code> agrega o quita una clase CSS; no asigna valores de estilo.",
        "correcta": false
      },
      {
        "texto": "<code>(style.width.px)=\"ancho()\"</code>",
        "explicacion": "Los paréntesis escuchan eventos; para asignar un estilo se usan corchetes.",
        "correcta": false
      }
    ]
  },
  {
    "id": 61,
    "tema": "Plantillas",
    "titulo": "Objetos globales en la plantilla",
    "dificultad": "media",
    "enunciado": "En una plantilla escribís <code>{{ Math.round(promedio()) }}</code> y Angular marca un error. ¿Por qué pasa?",
    "opciones": [
      {
        "texto": "Porque la plantilla no tiene acceso a objetos globales como <code>Math</code>; conviene hacer el redondeo en la clase.",
        "explicacion": "Las expresiones de la plantilla se evalúan con los miembros del componente y sus variables, no con los globales de JavaScript.",
        "correcta": true
      },
      {
        "texto": "Porque <code>Math</code> solo se puede usar dentro de un property binding con corchetes, y no en una interpolación.",
        "explicacion": "El problema no es la sintaxis: <code>Math</code> no está disponible en ninguna expresión de la plantilla.",
        "correcta": false
      },
      {
        "texto": "Porque falta agregar <code>Math</code> al arreglo <code>imports</code> del componente.",
        "explicacion": "<code>imports</code> es para componentes, directivas y pipes; no habilita objetos globales.",
        "correcta": false
      },
      {
        "texto": "Porque dentro de <code>Math.round</code> la señal se tiene que leer sin paréntesis, como <code>promedio</code>.",
        "explicacion": "Las señales siempre se leen con paréntesis; el error viene de usar <code>Math</code>.",
        "correcta": false
      }
    ]
  },
  {
    "id": 62,
    "tema": "Inyección",
    "titulo": "Servicio provisto en un componente",
    "dificultad": "media",
    "enunciado": "El componente <code>Formulario</code> declara <code>providers: [Borrador]</code> en su decorador y en la página hay dos <code>Formulario</code>. Si los dos hacen <code>inject(Borrador)</code>,",
    "opciones": [
      {
        "texto": "cada uno recibe su propia instancia de <code>Borrador</code>.",
        "explicacion": "Proveerlo en un componente crea una instancia por cada instancia de ese componente, que comparten sus hijos.",
        "correcta": true
      },
      {
        "texto": "los dos comparten la misma instancia, igual que con <code>providedIn: 'root'</code>.",
        "explicacion": "Eso pasa al proveerlo en la raíz; en <code>providers</code> del componente se crea una instancia por componente.",
        "correcta": false
      },
      {
        "texto": "Angular marca un error, porque el servicio quedó provisto dos veces.",
        "explicacion": "No hay conflicto: cada componente tiene su propio inyector con su propia instancia.",
        "correcta": false
      },
      {
        "texto": "solo el primero que aparece en la página recibe el servicio y el segundo obtiene <code>null</code>.",
        "explicacion": "Los dos lo reciben; la diferencia es que cada uno tiene su propia instancia.",
        "correcta": false
      }
    ]
  },
  {
    "id": 63,
    "tema": "Inyección",
    "titulo": "Inyectar un valor que no es una clase",
    "dificultad": "facil",
    "enunciado": "Querés que cualquier parte de la aplicación pueda inyectar la URL base de la API, que es un simple texto. ¿Qué usás para identificar ese valor?",
    "opciones": [
      {
        "texto": "Un <code>InjectionToken&lt;string&gt;</code>, provisto con <code>useValue</code>.",
        "explicacion": "Un token permite inyectar valores que no son clases, como textos u objetos de configuración.",
        "correcta": true
      },
      {
        "texto": "Una señal <code>signal&lt;string&gt;</code> declarada en el componente raíz.",
        "explicacion": "Una señal guarda estado, pero declararla no la registra en el sistema de inyección.",
        "correcta": false
      },
      {
        "texto": "El tipo <code>string</code> como token, con <code>inject(string)</code>.",
        "explicacion": "<code>string</code> es un tipo de TypeScript que no existe al ejecutar, así que no puede servir de token.",
        "correcta": false
      },
      {
        "texto": "Una variable global como <code>window.apiUrl</code>, que <code>inject</code> encuentra sola si tiene el mismo nombre.",
        "explicacion": "<code>inject</code> no busca en variables globales: solo entrega lo que fue provisto.",
        "correcta": false
      }
    ]
  },
  {
    "id": 64,
    "tema": "Inyección",
    "titulo": "Dónde se puede llamar a inject",
    "dificultad": "facil",
    "enunciado": "Un componente llama a <code>inject(Carrito)</code> dentro de un método que se ejecuta al hacer clic en un botón, y Angular da un error. ¿Por qué?",
    "opciones": [
      {
        "texto": "Porque <code>inject</code> solo funciona en un contexto de inyección, como el constructor o la inicialización de una propiedad.",
        "explicacion": "En un manejador de eventos ya no hay un contexto de inyección activo; el servicio se pide antes, al crear el componente.",
        "correcta": true
      },
      {
        "texto": "Porque <code>Carrito</code> tiene que estar en el arreglo <code>imports</code> del componente.",
        "explicacion": "<code>imports</code> es para componentes, directivas y pipes, no para servicios.",
        "correcta": false
      },
      {
        "texto": "Porque un servicio se puede inyectar una sola vez en toda la aplicación.",
        "explicacion": "Un mismo servicio se puede inyectar en muchos lugares.",
        "correcta": false
      },
      {
        "texto": "Porque dentro de los métodos hay que usar <code>new Carrito()</code>, ya que <code>inject</code> solo sirve en los servicios.",
        "explicacion": "<code>new</code> crearía una instancia propia que no se comparte, e <code>inject</code> también se usa en componentes.",
        "correcta": false
      }
    ]
  },
  {
    "id": 65,
    "tema": "Routing",
    "titulo": "Parámetros de ruta",
    "dificultad": "facil",
    "enunciado": "En la ruta <code>{ path: 'productos/:id', component: DetalleProducto }</code>, la parte <code>:id</code> indica que",
    "opciones": [
      {
        "texto": "ese segmento es un parámetro y puede tener cualquier valor, como en <code>/productos/42</code>.",
        "explicacion": "Los dos puntos marcan un parámetro de ruta, cuyo valor se toma de la URL.",
        "correcta": true
      },
      {
        "texto": "la URL tiene que contener literalmente el texto <code>:id</code>.",
        "explicacion": "Los dos puntos no forman parte de la URL: marcan un segmento variable.",
        "correcta": false
      },
      {
        "texto": "el router le asigna al componente un <code>id</code> generado al azar.",
        "explicacion": "El valor no lo inventa el router: sale de la URL que se visitó.",
        "correcta": false
      },
      {
        "texto": "el parámetro es opcional, así que la ruta también coincide con <code>/productos</code> sin ningún segmento más.",
        "explicacion": "El parámetro ocupa un segmento de la URL; <code>/productos</code> sola no coincide con esta ruta.",
        "correcta": false
      }
    ]
  },
  {
    "id": 66,
    "tema": "Routing",
    "titulo": "Enlace con un parámetro",
    "dificultad": "facil",
    "enunciado": "Dentro de un <code>@for</code> que recorre productos, querés que cada enlace lleve a <code>/productos/</code> seguido del <code>id</code> del producto <code>p</code>. ¿Qué escribís?",
    "opciones": [
      {
        "texto": "<code>&lt;a [routerLink]=\"['/productos', p.id]\"&gt;</code>",
        "explicacion": "Con corchetes, <code>routerLink</code> recibe un arreglo con las partes de la ruta, incluido el valor del parámetro.",
        "correcta": true
      },
      {
        "texto": "<code>&lt;a routerLink=\"['/productos', p.id]\"&gt;</code>",
        "explicacion": "Sin corchetes el valor se toma como texto literal y el arreglo no se evalúa.",
        "correcta": false
      },
      {
        "texto": "<code>&lt;a href=\"/productos/:id\"&gt;</code>",
        "explicacion": "Con <code>href</code> no se usa el router y <code>:id</code> quedaría escrito tal cual en la URL.",
        "correcta": false
      },
      {
        "texto": "<code>&lt;a (routerLink)=\"['/productos', p.id]\"&gt;</code>",
        "explicacion": "Los paréntesis escuchan eventos; <code>routerLink</code> es un input y se asigna con corchetes.",
        "correcta": false
      }
    ]
  },
  {
    "id": 67,
    "tema": "Routing",
    "titulo": "Recibir el parámetro como input",
    "dificultad": "facil",
    "enunciado": "La aplicación usa <code>provideRouter(routes, withComponentInputBinding())</code> y la ruta es <code>productos/:id</code>. ¿Cómo obtiene el <code>id</code> el componente <code>DetalleProducto</code>?",
    "opciones": [
      {
        "texto": "Declarando <code>id = input&lt;string&gt;()</code>, con el mismo nombre que el parámetro.",
        "explicacion": "Con esa opción, el router pasa los parámetros de la ruta a los inputs del componente que tienen el mismo nombre.",
        "correcta": true
      },
      {
        "texto": "Declarando <code>id = output&lt;string&gt;()</code>, para que el router emita el valor.",
        "explicacion": "Un output sirve para que el componente avise algo hacia afuera, no para recibir datos.",
        "correcta": false
      },
      {
        "texto": "Leyendo <code>window.location.pathname</code> en el constructor y cortando el texto de la URL a mano.",
        "explicacion": "Leería la URL una sola vez y no se enteraría de las navegaciones siguientes; esa opción ya entrega el valor como input.",
        "correcta": false
      },
      {
        "texto": "Declarando <code>parametro = input&lt;string&gt;()</code>, que es el nombre que usa el router para cualquier parámetro.",
        "explicacion": "El input tiene que llamarse igual que el parámetro de la ruta, en este caso <code>id</code>.",
        "correcta": false
      }
    ]
  },
  {
    "id": 68,
    "tema": "Routing",
    "titulo": "Orden de la ruta comodín",
    "dificultad": "media",
    "enunciado": "Observá estas rutas:<pre>export const routes: Routes = [\n  { path: '**', component: NoEncontrada },\n  { path: 'inicio', component: Inicio },\n  { path: 'carrito', component: Carrito },\n];</pre> ¿Qué se muestra al entrar a <code>/carrito</code>?",
    "opciones": [
      {
        "texto": "<code>NoEncontrada</code>, porque el router usa la primera ruta que coincide y <code>**</code> coincide con todo.",
        "explicacion": "Por eso la ruta comodín se pone siempre al final del arreglo.",
        "correcta": true
      },
      {
        "texto": "<code>Carrito</code>, porque el router elige la ruta más específica sin importar el orden en que están escritas.",
        "explicacion": "El router no busca la más específica: se queda con la primera que coincide.",
        "correcta": false
      },
      {
        "texto": "<code>Carrito</code> y <code>NoEncontrada</code>, uno debajo del otro.",
        "explicacion": "El router activa una sola ruta en cada outlet.",
        "correcta": false
      },
      {
        "texto": "Nada, porque <code>**</code> solo es válido dentro de <code>children</code>.",
        "explicacion": "La ruta comodín se puede usar en el nivel principal; el problema acá es el orden.",
        "correcta": false
      }
    ]
  },
  {
    "id": 69,
    "tema": "Routing",
    "titulo": "Redirigir la ruta vacía",
    "dificultad": "facil",
    "enunciado": "Querés que, al entrar a la raíz del sitio, el usuario vaya directo a <code>/inicio</code>, sin cambiar lo que pasa con las demás URLs. ¿Qué ruta agregás?",
    "opciones": [
      {
        "texto": "<code>{ path: '', redirectTo: 'inicio', pathMatch: 'full' }</code>",
        "explicacion": "<code>redirectTo</code> lleva a otra ruta y <code>pathMatch: 'full'</code> hace que solo coincida la URL vacía completa.",
        "correcta": true
      },
      {
        "texto": "<code>{ path: '', component: 'inicio' }</code>",
        "explicacion": "<code>component</code> recibe la clase de un componente, no un texto con una ruta.",
        "correcta": false
      },
      {
        "texto": "<code>{ path: 'inicio', redirectTo: '' }</code>",
        "explicacion": "Está al revés: llevaría de <code>/inicio</code> a la raíz.",
        "correcta": false
      },
      {
        "texto": "<code>{ path: '**', redirectTo: 'inicio' }</code>",
        "explicacion": "Mandaría a <code>/inicio</code> cualquier URL que no coincida con otra ruta, no solo la raíz.",
        "correcta": false
      }
    ]
  },
  {
    "id": 70,
    "tema": "Routing",
    "titulo": "Marcar el enlace activo",
    "dificultad": "facil",
    "enunciado": "En el menú querés que el enlace de la sección actual tenga la clase <code>activo</code>. ¿Qué agregás a cada <code>&lt;a routerLink=\"...\"&gt;</code>?",
    "opciones": [
      {
        "texto": "<code>routerLinkActive=\"activo\"</code>",
        "explicacion": "Agrega la clase indicada mientras la ruta del enlace está activa y la quita cuando se sale de ella.",
        "correcta": true
      },
      {
        "texto": "<code>[class.activo]=\"true\"</code>",
        "explicacion": "La clase quedaría puesta siempre, en todos los enlaces del menú.",
        "correcta": false
      },
      {
        "texto": "<code>routerLink=\"activo\"</code>",
        "explicacion": "Cambiaría el destino del enlace a la ruta <code>activo</code>.",
        "correcta": false
      },
      {
        "texto": "<code>(activate)=\"activo()\"</code>",
        "explicacion": "<code>activate</code> es un evento del <code>&lt;router-outlet&gt;</code>; los enlaces se marcan con <code>routerLinkActive</code>.",
        "correcta": false
      }
    ]
  },
  {
    "id": 71,
    "tema": "Routing",
    "titulo": "Dónde se muestran las rutas hijas",
    "dificultad": "facil",
    "enunciado": "La ruta <code>cuenta</code> tiene las rutas hijas <code>perfil</code> y <code>pedidos</code>, definidas en <code>children</code>. Para que se muestren, el componente de <code>cuenta</code> tiene que",
    "opciones": [
      {
        "texto": "tener su propio <code>&lt;router-outlet /&gt;</code> en la plantilla.",
        "explicacion": "Las rutas hijas se muestran en el outlet del componente padre, no en el del componente raíz.",
        "correcta": true
      },
      {
        "texto": "importar los componentes hijos en su arreglo <code>imports</code> y escribir sus etiquetas.",
        "explicacion": "A los componentes de las rutas hijas los inserta el router; no hace falta escribir sus etiquetas.",
        "correcta": false
      },
      {
        "texto": "repetir las rutas hijas en el arreglo principal, fuera de <code>children</code>.",
        "explicacion": "Así se crearían otras rutas distintas; las hijas ya quedan registradas dentro de <code>children</code>.",
        "correcta": false
      },
      {
        "texto": "no hacer nada, porque el <code>&lt;router-outlet&gt;</code> del componente raíz también muestra a las hijas, debajo del padre.",
        "explicacion": "Cada nivel de rutas necesita su propio outlet, ubicado en el componente padre.",
        "correcta": false
      }
    ]
  },
  {
    "id": 72,
    "tema": "HttpClient",
    "titulo": "Cuándo se envía la petición",
    "dificultad": "media",
    "enunciado": "En un servicio escribís <code>this.http.get&lt;Producto[]&gt;('/api/productos');</code>, pero nadie se suscribe al resultado. ¿Qué pasa?",
    "opciones": [
      {
        "texto": "No se envía ninguna petición, porque el Observable recién la hace cuando alguien se suscribe.",
        "explicacion": "Los Observables de <code>HttpClient</code> son fríos: la petición sale recién al suscribirse.",
        "correcta": true
      },
      {
        "texto": "La petición se envía igual y la respuesta queda guardada en el servicio.",
        "explicacion": "Sin suscripción no se hace la petición, y <code>HttpClient</code> tampoco guarda las respuestas por su cuenta.",
        "correcta": false
      },
      {
        "texto": "La petición se envía y, como nadie se suscribió, la respuesta se descarta al llegar.",
        "explicacion": "La petición ni siquiera sale hasta que haya una suscripción.",
        "correcta": false
      },
      {
        "texto": "Angular marca un error al compilar, porque falta llamar a <code>subscribe</code> después del <code>get</code>.",
        "explicacion": "No es un error de compilación; simplemente no pasa nada hasta que alguien se suscribe.",
        "correcta": false
      }
    ]
  },
  {
    "id": 73,
    "tema": "HttpClient",
    "titulo": "Enviar datos con POST",
    "dificultad": "facil",
    "enunciado": "Querés crear un pedido nuevo enviando el objeto <code>pedido</code> al servidor. ¿Qué llamada hacés?",
    "opciones": [
      {
        "texto": "<code>this.http.post('/api/pedidos', pedido)</code>",
        "explicacion": "El segundo argumento de <code>post</code> es el cuerpo que viaja en la petición.",
        "correcta": true
      },
      {
        "texto": "<code>this.http.get('/api/pedidos', pedido)</code>",
        "explicacion": "<code>get</code> sirve para pedir datos y no envía cuerpo; su segundo argumento son opciones.",
        "correcta": false
      },
      {
        "texto": "<code>this.http.post(pedido, '/api/pedidos')</code>",
        "explicacion": "El orden está invertido: primero va la URL y después el cuerpo.",
        "correcta": false
      },
      {
        "texto": "<code>this.http.delete('/api/pedidos', pedido)</code>",
        "explicacion": "<code>delete</code> se usa para borrar recursos, no para crearlos.",
        "correcta": false
      }
    ]
  },
  {
    "id": 74,
    "tema": "HttpClient",
    "titulo": "Tipar la respuesta",
    "dificultad": "facil",
    "enunciado": "En <code>this.http.get&lt;Producto[]&gt;('/api/productos')</code>, lo que va entre <code>&lt; &gt;</code>",
    "opciones": [
      {
        "texto": "le indica a TypeScript qué forma tiene la respuesta, pero no se verifica al ejecutar.",
        "explicacion": "Es una ayuda para el tipado: si el servidor manda otra cosa, Angular no lo detecta.",
        "correcta": true
      },
      {
        "texto": "hace que Angular revise la respuesta y descarte los datos que no coinciden con <code>Producto</code>.",
        "explicacion": "No hay ninguna validación al ejecutar; el tipo solo existe para TypeScript.",
        "correcta": false
      },
      {
        "texto": "convierte cada objeto de la respuesta en una instancia de la clase <code>Producto</code>, con sus métodos.",
        "explicacion": "Los datos llegan como objetos comunes del JSON; no se crean instancias de ninguna clase.",
        "correcta": false
      },
      {
        "texto": "es obligatorio, porque sin él la petición no se puede enviar.",
        "explicacion": "Es opcional: sin él, la respuesta queda con el tipo <code>Object</code>.",
        "correcta": false
      }
    ]
  },
  {
    "id": 75,
    "tema": "HttpClient",
    "titulo": "Petición que sigue a una señal",
    "dificultad": "facil",
    "enunciado": "Querés que los datos del cliente se vuelvan a pedir solos cada vez que cambia la señal <code>clienteId</code>. ¿Qué opción lo resuelve de forma directa?",
    "opciones": [
      {
        "texto": "<code>httpResource(() =&gt; `/api/clientes/${clienteId()}`)</code>",
        "explicacion": "Hace la petición con <code>HttpClient</code> y la repite cada vez que cambia alguna señal que lee la función.",
        "correcta": true
      },
      {
        "texto": "<code>this.http.get(`/api/clientes/${clienteId()}`)</code> en el constructor",
        "explicacion": "La URL se arma una sola vez, así que no se vuelve a pedir nada cuando cambia la señal.",
        "correcta": false
      },
      {
        "texto": "<code>computed(() =&gt; this.http.get(`/api/clientes/${clienteId()}`))</code>",
        "explicacion": "Crea un Observable nuevo en cada cambio, pero nadie se suscribe y la petición nunca sale.",
        "correcta": false
      },
      {
        "texto": "<code>signal(`/api/clientes/${clienteId()}`)</code>",
        "explicacion": "Solo guarda el texto de la URL; no hace ninguna petición.",
        "correcta": false
      }
    ]
  },
  {
    "id": 76,
    "tema": "Formularios",
    "titulo": "Mostrar el error en el momento justo",
    "dificultad": "facil",
    "enunciado": "No querés que el error del campo obligatorio <code>email</code> aparezca apenas se abre el formulario, sino después de que el usuario pasó por el campo. ¿Qué condición ponés en el <code>@if</code>?",
    "opciones": [
      {
        "texto": "<code>registroForm.email().touched() &amp;&amp; registroForm.email().invalid()</code>",
        "explicacion": "<code>touched()</code> recién es verdadero cuando el usuario enfocó el campo y después salió de él, así que el error no se ve antes.",
        "correcta": true
      },
      {
        "texto": "<code>registroForm.email().invalid()</code>",
        "explicacion": "El error se vería desde el principio, porque el campo vacío ya es inválido.",
        "correcta": false
      },
      {
        "texto": "<code>registroForm.email().touched() &amp;&amp; registroForm.email().valid()</code>",
        "explicacion": "El mensaje se mostraría justo cuando el campo es válido, es decir, al revés.",
        "correcta": false
      },
      {
        "texto": "<code>registroForm.email().dirty()</code>",
        "explicacion": "Solo indica que el valor cambió; no dice si hay algún error.",
        "correcta": false
      }
    ]
  },
  {
    "id": 77,
    "tema": "Formularios",
    "titulo": "Leer los errores de un campo",
    "dificultad": "facil",
    "enunciado": "Querés mostrar todos los mensajes de error del campo <code>clave</code> del formulario <code>cuentaForm</code>. ¿Qué recorrés con <code>@for</code>?",
    "opciones": [
      {
        "texto": "<code>cuentaForm.clave().errors()</code>, una lista de errores con <code>kind</code> y, si se configuró, <code>message</code>.",
        "explicacion": "Cada error indica qué regla falló y, si se configuró, el mensaje para mostrar.",
        "correcta": true
      },
      {
        "texto": "<code>cuentaForm.clave().invalid()</code>",
        "explicacion": "Devuelve solo verdadero o falso; no dice qué reglas fallaron.",
        "correcta": false
      },
      {
        "texto": "<code>cuentaModel().clave</code>",
        "explicacion": "Es el valor que escribió el usuario, no sus errores.",
        "correcta": false
      },
      {
        "texto": "La función de esquema, que guarda la lista de las reglas que no se cumplieron en el último cambio del campo.",
        "explicacion": "El esquema declara las reglas; los errores se leen del estado del campo.",
        "correcta": false
      }
    ]
  },
  {
    "id": 78,
    "tema": "Formularios",
    "titulo": "Varias reglas en un mismo campo",
    "dificultad": "facil",
    "enunciado": "El campo <code>email</code> tiene las reglas <code>email()</code> y <code>minLength()</code> con un mínimo de 5 caracteres. Si el usuario escribe <code>a@</code>,",
    "opciones": [
      {
        "texto": "aparecen los dos errores, porque se evalúan todas las reglas aunque alguna ya haya fallado.",
        "explicacion": "La validación no se corta en el primer error: cada regla corre por separado y puede sumar el suyo.",
        "correcta": true
      },
      {
        "texto": "aparece solo el error de <code>email</code>, porque es la primera regla declarada.",
        "explicacion": "El orden en que se declaran las reglas no frena a las siguientes.",
        "correcta": false
      },
      {
        "texto": "no aparece ningún error hasta que se envía el formulario.",
        "explicacion": "Las reglas se evalúan cada vez que cambia el valor, sin esperar al envío.",
        "correcta": false
      },
      {
        "texto": "aparece solo el error de <code>minLength</code>, porque los errores de longitud tienen prioridad sobre los de formato.",
        "explicacion": "No hay prioridades entre reglas; las dos producen su error.",
        "correcta": false
      }
    ]
  },
  {
    "id": 79,
    "tema": "Formularios",
    "titulo": "Mensaje de error propio",
    "dificultad": "facil",
    "enunciado": "Querés que, si falta el nombre, el error diga \"Ingresá tu nombre\". En la función de esquema, cuyo parámetro se llama <code>p</code>, ¿cómo declarás la regla?",
    "opciones": [
      {
        "texto": "<code>required(p.nombre, { message: 'Ingresá tu nombre' })</code>",
        "explicacion": "Las reglas incluidas aceptan la opción <code>message</code> con el texto del error.",
        "correcta": true
      },
      {
        "texto": "<code>required(p.nombre, 'Ingresá tu nombre')</code>",
        "explicacion": "El segundo argumento es un objeto de opciones, no el texto suelto.",
        "correcta": false
      },
      {
        "texto": "<code>required(p.nombre).message = 'Ingresá tu nombre'</code>",
        "explicacion": "<code>required</code> no devuelve un objeto al que se le pueda asignar el mensaje después.",
        "correcta": false
      },
      {
        "texto": "Escribiendo el texto en el atributo <code>placeholder</code> del input, para que Angular lo muestre cuando el campo quede vacío.",
        "explicacion": "El placeholder es solo una ayuda visual del input; no se usa como mensaje de error.",
        "correcta": false
      }
    ]
  },
  {
    "id": 80,
    "tema": "Formularios",
    "titulo": "Deshabilitar un campo según otro",
    "dificultad": "facil",
    "enunciado": "El campo <code>cupon</code> solo tiene que poder completarse cuando <code>total</code> vale 50 o más. ¿Qué regla agregás en el esquema?",
    "opciones": [
      {
        "texto": "<code>disabled(p.cupon, { when: ({valueOf}) =&gt; valueOf(p.total) &lt; 50 })</code>",
        "explicacion": "El campo queda deshabilitado mientras la función <code>when</code> devuelva verdadero.",
        "correcta": true
      },
      {
        "texto": "<code>required(p.cupon, { when: ({valueOf}) =&gt; valueOf(p.total) &lt; 50 })</code>",
        "explicacion": "Haría obligatorio el cupón cuando el total es bajo, en lugar de deshabilitarlo.",
        "correcta": false
      },
      {
        "texto": "<code>readonly(p.cupon)</code>",
        "explicacion": "Sin <code>when</code>, el cupón quedaría siempre de solo lectura, sin importar el total.",
        "correcta": false
      },
      {
        "texto": "<code>hidden(p.total, { when: ({valueOf}) =&gt; valueOf(p.total) &lt; 50 })</code>",
        "explicacion": "Marcaría como oculto al campo <code>total</code>, que no es el que había que bloquear.",
        "correcta": false
      }
    ]
  }
];
