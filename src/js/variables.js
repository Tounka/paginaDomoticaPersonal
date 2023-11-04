// let inpTarifa = document.getElementById("tarifa");
// let inpTotalLuz = document.getElementById("totalLuz");
// let inpDisponibilidadSolar = document.getElementById("disponibilidadSolar");
// let inpTotalLuzEfectivo = document.getElementById("totalLuzEfectivo");
// let respuesta = document.getElementById("respuesta");
// let textAsocRange = document.getElementById("textAsocRange");


// let btnCalcular = document.getElementById("btnCalcular");
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=3996322&appid=c99bc3bc309fa3636cd3234157f67e64"; //porfavor no me la roben :(
const video = document.getElementById("videoYoutube");

const inputTextoRecetaASolicitar = document.getElementById("inputTextoRecetaASolicitar");
const btnGuardarRecetaPrincipal = document.getElementById("btnGuardarRecetaPrincipal");
const btnGuardarRecetaSencilla = document.getElementById("btnGuardarRecetaSencilla");
  const chatRapidoTipoProteina = document.getElementById("chatRapidoTipoProteina");
  const chatRapidoTipoComida = document.getElementById("chatRapidoTipoComida");
  const chatRapidoCantidadPersonas = document.getElementById("chatRapidoCantidadPersonas");
  const chatRapidoPicor_Dulsura = document.getElementById("chatRapidoPicor_Dulsura");

const textoChatRapidoPicor_Dulsura = document.getElementById("textoChatRapidoPicor_Dulsura");


const imgSeleccionada = document.getElementById("imgSeleccionada");
const imgSeleccionadaWebp = document.getElementById("imgSeleccionadaWebp");
const imgSeleccionadaJpeg = document.getElementById("imgSeleccionadaJpeg");

const btnModalImg = document.getElementById("btnModalImg");

const numeroTotalImagenesEnCarrousel = 137;


/* LISTAS */

const listaUrlVideo = [
    "https://www.youtube.com/embed/CZmDVL_q91s?si=Cxe0g3qIcyaO1TaS",
    "https://www.youtube.com/embed/3u7xkBZgzIw?si=QIyGRGDxyjaM_0Fh",
    "https://www.youtube.com/embed/RCiM8O3a6Q4?si=Q57PnxSgh73RAUzr",
    "https://www.youtube.com/embed/p9cUy1TPiO4?si=EytdlFNbZMSS2blx",
    "https://www.youtube.com/embed/hqHKyotIVLQ?si=WJBOPFoSp0v28m7D",
    "https://www.youtube.com/embed/Z8WjizbnNsM?si=IfM9GvVt-Qg7QG_z",
    "https://www.youtube.com/embed/2HyFrxkSiXM?si=QfTTGCusOgG62W1g",
    "https://www.youtube.com/embed/HR11sbrIC6s?si=GcZ3lCVgG2WAm-Rt",
    "https://www.youtube.com/embed/aEdeE5v27Nw?si=0t6fGBHeWhR080YX",
    "https://www.youtube.com/embed/ch8qtGvTrSY?si=ceRnRJyzOaHL3EyJ",
    "https://www.youtube.com/embed/nzWVx1Vxq3g?si=NsWJcqDieMsrIYGR",
    "https://www.youtube.com/embed/EzBMnYlNsNE?si=qqaYUuJ-Xcj1zrHE",
    "https://www.youtube.com/embed/j8RveuAGDsI?si=QkvWYgE2p30GW8mA",
    "https://www.youtube.com/embed/Fjdyw8Cvxbs?si=RE3wvjIsVHRwqwzJ",
    "https://www.youtube.com/embed/HR11sbrIC6s?si=n-tgqH1vHZM4c-Ve",
    "https://www.youtube.com/embed/topg-59NCNA?si=M6MJb2X8HiKsPL5v"
  ];


  const inputChatGpt = {
    inputPrincipal: "Aquí tienes un conjunto de instrucciones que debes seguir para generar una receta. Comienza con el nombre de la receta, seguido de un signo de interrogación. Ejemplo: 'Nombre de la receta?' Luego, agrega los ingredientes de la receta separados por el signo '&'. Ejemplo: 'Ingrediente1&Ingrediente2&Ingrediente3'. Después, coloca un signo de interrogación y continúa con los pasos de preparación de la receta, separados por el signo '&'. Ejemplo: 'Paso1&Paso2&Paso3'. Finaliza cada paso con un punto y coma ('&') para separar las instrucciones de preparación. Ejemplo: 'Cortar el ingrediente en trozos pequeños. & Saltear los ingredientes en una sartén caliente. & Agregar el ingrediente a la mezcla.' Para agregar una descripción del alimento, simplemente agrega una sección después de los ingredientes y antes de los pasos. Puedes utilizar un signo de interrogación para separarla. Ejemplo: 'Descripción del alimento? Esto es una breve descripción del alimento que se está utilizando en la receta.' Para finalizar la receta, asegúrate de agregar un punto y coma después del último paso de preparación. Hamburguesa de pollo?Pechuga de pollo&Pan de hamburguesa&Lechuga&Tomate&Queso&Mayonesa&Mostaza&Ketchup&Pimienta?Una jugosa hamburguesa de pollo, perfecta para satisfacer tus antojos. &Comienza por sazonar la pechuga de pollo con pimienta y cocínala a la parrilla. &Mientras tanto, tuesta ligeramente el pan de hamburguesa. &Lava y corta la lechuga y el tomate en rodajas. &Una vez que el pollo esté cocido, coloca una loncha de queso sobre él para que se derrita. &Ensambla la hamburguesa colocando la pechuga de pollo con queso en el pan tostado, seguido de la lechuga y el tomate. &Añade mayonesa, mostaza y ketchup al gusto. &Cierra la hamburguesa y disfruta de este delicioso sándwich de pollo. Siguiendo estas instrucciones, crea la receta del alimento o descripción que dire a continuación: pay de limón.",
    inputAleatorio: "Aquí tienes un conjunto de instrucciones que debes seguir para generar una receta. Comienza con el nombre de la receta, seguido de un signo de interrogación. Ejemplo: 'Nombre de la receta?' Luego, agrega los ingredientes de la receta separados por el signo '&'. Ejemplo: 'Ingrediente1&Ingrediente2&Ingrediente3'. Después, coloca un signo de interrogación y continúa con los pasos de preparación de la receta, separados por el signo '&'. Ejemplo: 'Paso1&Paso2&Paso3'. Finaliza cada paso con un punto y coma ('&') para separar las instrucciones de preparación. Ejemplo: 'Cortar el ingrediente en trozos pequeños. & Saltear los ingredientes en una sartén caliente. & Agregar el ingrediente a la mezcla.' Para agregar una descripción del alimento, simplemente agrega una sección después de los ingredientes y antes de los pasos. Puedes utilizar un signo de interrogación para separarla. Ejemplo: 'Descripción del alimento? Esto es una breve descripción del alimento que se está utilizando en la receta.' Para finalizar la receta, asegúrate de agregar un punto y coma después del último paso de preparación. Hamburguesa de pollo?Pechuga de pollo&Pan de hamburguesa&Lechuga&Tomate&Queso&Mayonesa&Mostaza&Ketchup&Pimienta?Una jugosa hamburguesa de pollo, perfecta para satisfacer tus antojos. &Comienza por sazonar la pechuga de pollo con pimienta y cocínala a la parrilla. &Mientras tanto, tuesta ligeramente el pan de hamburguesa. &Lava y corta la lechuga y el tomate en rodajas. &Una vez que el pollo esté cocido, coloca una loncha de queso sobre él para que se derrita. &Ensambla la hamburguesa colocando la pechuga de pollo con queso en el pan tostado, seguido de la lechuga y el tomate. &Añade mayonesa, mostaza y ketchup al gusto. &Cierra la hamburguesa y disfruta de este delicioso sándwich de pollo. Siguiendo estas instrucciones, crea una receta aleatoria",
    ciudad: "Ejemploville"
    };

  const listachatRapidoPicor_Dulsura=[
    "Picante",
    "Acido",
    "Salado",
    "Neutro (ni muy picante ni muy dulce)",
    "Agridulce",
    "Dulce",
    "Postre"
    
  ]

/* OBJETOS */

class receta {
    constructor(nota, ingredientes,pasos) {
      this.nota = nota;
      this.ingredientes = ingredientes;
      this.pasos = pasos;
    }
  }
  const recetas = [
    new receta('Tacos de cabra', ['valor2', 'sal', 'carne'], ['hacer de comer', 'paso dos', 'paso 3']),
    new receta('Pizza', ['queso', 'tomate', 'masa'], ['preparar masa', 'agregar ingredientes', 'hornear']),
    new receta('Ensalada', ['lechuga', 'tomate', 'aceite'], ['cortar lechuga', 'cortar tomate', 'añadir aceite'])
  ];
 // console.log(recetas[1]);


