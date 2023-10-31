// let inpTarifa = document.getElementById("tarifa");
// let inpTotalLuz = document.getElementById("totalLuz");
// let inpDisponibilidadSolar = document.getElementById("disponibilidadSolar");
// let inpTotalLuzEfectivo = document.getElementById("totalLuzEfectivo");
// let respuesta = document.getElementById("respuesta");
// let textAsocRange = document.getElementById("textAsocRange");


// let btnCalcular = document.getElementById("btnCalcular");
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=3996322&appid=c99bc3bc309fa3636cd3234157f67e64"; //porfavor no me la roben :(
const video = document.getElementById("videoYoutube");

const numeroTotalImagenesEnCarrousel = 10;


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
    "https://www.youtube.com/embed/nzWVx1Vxq3g?si=NsWJcqDieMsrIYGR"
  ];


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
