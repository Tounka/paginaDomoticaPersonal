document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
    
    
});


 function eventListeners(){
    
    setInterval(reloj, 1000); //cada segundo llama a la funcion reloj
    tiempo();
    carrouselVideos();
    notas();
    carrouselImagenes();

 }


function reloj(){
    const tiempoActual = new Date();
    let horas = tiempoActual.getHours().toString().padStart(2, '0');
    // let subfijo = "am";
    if (horas >= 13){
        horas = horas -12;
        // subfijo = "pm";
    }
    const minutos = tiempoActual.getMinutes().toString().padStart(2, '0');
    const tiempo = horas + ":" + minutos;

    console.log(tiempo);

    document.querySelector(".contenedorClima__hora").textContent = tiempo;

    

    
}
function tiempo(){
    fetch(apiUrl)
  .then(response => {
    // Comprobar si la respuesta es exitosa (código de estado 200)
    if (response.status === 200) {
      return response.json(); // Parsear la respuesta como JSON
    } else {
      throw new Error("No se pudo obtener los datos del clima");
    }
  })
  .then(data => {
    // Aquí puedes acceder a los datos del clima
    //console.log(data);
    
    // Por ejemplo, para acceder a la temperatura actual
    //const temperatura = data.main.temp;
    let temperaturaMax = (parseFloat(data.main.temp_max) - 273.15) ;
    temperaturaMax = temperaturaMax.toFixed(1);
    
    let temperaturaMin = (parseFloat(data.main.temp_min) - 273.15) ;
    temperaturaMin = temperaturaMin.toFixed(1);

    document.querySelector(".temperaturaInferior").textContent = "°" + temperaturaMin;
    document.querySelector(".temperaturaSuperior").textContent = "°" + temperaturaMax;

    let iconoClima = data.weather[0].icon

    let contenedorClima = document.querySelector(".contenedorClima__clima");
    contenedorClima.textContent = "";
    let img = document.createElement('img');
    imgSrc =`https://openweathermap.org/img/wn/${iconoClima}@2x.png`;
    
    img.src = imgSrc ;
    contenedorClima.style.margin = '-1rem';
    contenedorClima.appendChild(img);
    // `https://openweathermap.org/img/wn/${iconoClima}@2x.png`



  })
  .catch(error => {
    console.error(error);
    setTimeout(tiempo,60000);
  });
}

function carrouselImagenes(){
  let listadoOrden = [];
  for (let i = 0; i < 10; i++) {
    
    let numeroAleatorio;
    let repetido = true;

    while (repetido) {
      numeroAleatorio = Math.floor(Math.random() * numeroTotalImagenesEnCarrousel);
      
      // Verifica si el número generado ya existe en listadoOrden
      if (listadoOrden.indexOf(numeroAleatorio) === -1) {
        repetido = false;
      }
    }
    let idImagen = "imagenCarrousel_" + i.toString();
    let idImagenWebp = "imagenCarrouselWebp_" + i.toString();
    let idImagenJpg = "imagenCarrouselJpg_" + i.toString();

    let idImagenActual = document.getElementById(idImagen);
    let idImagenActualWebp = document.getElementById(idImagenWebp);
    let idImagenActualJpg = document.getElementById(idImagenJpg);


    
    listadoOrden[i] = numeroAleatorio;
    idImagenActual.src = "build/img/carrouselImg" + numeroAleatorio +".jpg";
    idImagenActualWebp.srcset = "build/img/carrouselImg" + numeroAleatorio +".webp";
    idImagenActualJpg.srcset = "build/img/carrouselImg" + numeroAleatorio +".jpg";
  }

  
 console.log(listadoOrden);
}
function carrouselVideos(){
    let numeroVid = Math.floor(Math.random() * listaUrlVideo.length) ;
    console.log(numeroVid);
    let vidAReproducir = listaUrlVideo[numeroVid] + "&mute=1&autoplay=1";
    video.src = vidAReproducir;

    console.log(vidAReproducir);
}
function notas(){
    recetas.forEach(x => {
        let nuevoAcordeonItem = document.createElement("div");
        nuevoAcordeonItem.className = "accordion-item";

        let h2 = document.createElement("h2");
        h2.className = "accordion-header";
        let idNum = Math.floor(Math.random() * 10000) + 1;
        idNum = idNum.toString();
        h2.id = "headingfour";

        let button = document.createElement("button");
        button.className = "accordion-button collapsed";
        button.type = "button";
        button.setAttribute("data-bs-toggle", "collapse");
        button.setAttribute("data-bs-target", "#collapseThrees"+idNum);
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", "collapseThrees"+idNum);
        button.textContent = x.nota;

        h2.appendChild(button);
        nuevoAcordeonItem.appendChild(h2);

        let collapse = document.createElement("div");
        collapse.className = "accordion-collapse collapse";
        collapse.id = "collapseThrees"+idNum;
        collapse.setAttribute("aria-labelledby", "headingfour");
        collapse.setAttribute("data-bs-parent", "#acordeonRecetas");

        let body = document.createElement("div");
        body.className = "accordion-body";

        let contenedorReceta = document.createElement("div");
        contenedorReceta.className = "contenedorReceta";

        let contenedorIngredientes = document.createElement("div");
        contenedorIngredientes.className = "contenedor__ingredientes";
        contenedorIngredientes.textContent = x.ingredientes.join(", ");

        let listaPasos = document.createElement("ol");
        listaPasos.className = "contenedor__pasos";

        x.pasos.forEach(element => {
            let paso = document.createElement("li");
            paso.textContent = element;
            listaPasos.appendChild(paso);
        });

        contenedorReceta.appendChild(contenedorIngredientes);
        contenedorReceta.appendChild(listaPasos);

        body.appendChild(contenedorReceta);
        collapse.appendChild(body);
        nuevoAcordeonItem.appendChild(collapse);

        let acordeonRecetas = document.getElementById("acordeonRecetas");
        acordeonRecetas.appendChild(nuevoAcordeonItem);
    });
}
