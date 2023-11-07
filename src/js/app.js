document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
    
    
});


 function eventListeners(){
    
    setInterval(reloj, 1000); //cada segundo llama a la funcion reloj
    tiempo();
    carrouselVideos();
    notas();
    carrouselImagenes();
    modalImagenes();

    modalRecetaAleatoria();
    modalRecetaRapida();
    guardarRecetasPrincipa();


 }

 function modalRecetaRapida(){
  // tomar todos los datos y convertirlos en str
  btnGuardarRecetaSencilla.addEventListener("click", function(){
    conseguirRecetaChatGpt("pay de oreo");
  });


  
 }
function modalRecetaAleatoria(){
  btnSorprendeme.addEventListener("click", async function(){
    try{
      let chatGptOutput = await conseguirRecetaAleatoriaChatGpt()
      console.log(chatGptOutput) 
      let recetaPorChatGpt = chatGptOutput;
        recetaPorChatGpt = recetaPorChatGpt.split("?");
        let nombreReceta = recetaPorChatGpt[0];
        let ingredientesReceta = recetaPorChatGpt[1];
        let stepsReceta = recetaPorChatGpt[2];
        // separar cadenas
        ingredientesReceta = ingredientesReceta.split("&");
        stepsReceta = stepsReceta.split("&");
    
        
        recetas.push(new receta(nombreReceta, ingredientesReceta, stepsReceta));
        let recetaActual = recetas[recetas.length - 1];
    
      const acordeonRecetasAleatorio = document.getElementById("acordeonRecetasAleatorio");
      acordeonRecetasAleatorio.innerHTML = "";
        
            let x = recetaActual;  //Cambiar por el input
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
            collapse.setAttribute("data-bs-parent", "#acordeonRecetasAleatorio");
    
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
             
             acordeonRecetasAleatorio.appendChild(nuevoAcordeonItem);

          btnGuardarRecetaRapida.addEventListener("click", function(){
            recetasJSON = JSON.stringify(recetas);
            localStorage.setItem("recetasGuardadasJSON", recetasJSON);
            notas();
          })
    }
    catch(error) {
      console.error('Error:', error);
    
      
   }
  });
  
}

 function guardarRecetasPrincipa(){

  btnGuardarRecetaPrincipal.addEventListener("click", async function(){
    try{
      
      
      const contenenedorBarraDeCarga = document.createElement("div");
      contenenedorBarraDeCarga.className = "d-flex align-items-center contenenedorBarraDeCarga";
      contenenedorBarraDeCarga.innerHTML = `
      <strong role="status">Estamos creando la receta, el proceso puede tardar un poco...</strong>
      <div class="spinner-border ms-auto" aria-hidden="true"></div>
      `;

    // Agregar el contenido de la barra de carga antes de borrar el contenido original
    acordeonRecetas.appendChild(contenenedorBarraDeCarga);





      let input =inputTextoRecetaASolicitar.value;
      let recetaPorChatGpt = await conseguirRecetaChatGpt(input);
      console.log(recetaPorChatGpt);

      recetaPorChatGpt = recetaPorChatGpt.split("?");
      let nombreReceta = recetaPorChatGpt[0];
      let ingredientesReceta = recetaPorChatGpt[1];
      let stepsReceta = recetaPorChatGpt[2];
      // separar cadenas
      ingredientesReceta = ingredientesReceta.split("&");
      stepsReceta = stepsReceta.split("&");

      
      recetas.push(new receta(nombreReceta, ingredientesReceta, stepsReceta));

      inputTextoRecetaASolicitar.value= "";
      
      recetasJSON = JSON.stringify(recetas);
      localStorage.setItem("recetasGuardadasJSON", recetasJSON);
      recetasRecuperadoJSON = localStorage.getItem("recetasGuardadasJSON");
      objetoRecuperado = JSON.parse(recetasRecuperadoJSON);

      recetas = objetoRecuperado;

      notas();
  }
  catch(error) {
    console.error('Error:', error);
  
    
 }
  });
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

  
 
}
function modalImagenes(){

  btnModalImg.addEventListener("click", function(){
    let elementoActivo = document.querySelector(".active");
    let elementoActivoSrc = elementoActivo.querySelector('img');
    elementoActivoSrc = elementoActivoSrc.src;
    elementoActivoSrcWebp = elementoActivoSrc.replace(".jpg", ".webp");
    elementoActivoSrcJpeg = elementoActivoSrc.replace(".jpg", ".jpeg");
    
    imgSeleccionadaWebp.srcset = elementoActivoSrcWebp;
    imgSeleccionadaJpeg.srcset = elementoActivoSrcJpeg;
    imgSeleccionada.src = elementoActivoSrc;

    
  })
}

function carrouselVideos(){
    let numeroVid = Math.floor(Math.random() * listaUrlVideo.length) ;
    
    let vidAReproducir = listaUrlVideo[numeroVid] + "&mute=1&autoplay=1";
    video.src = vidAReproducir;

    
}
function notas(){
  let recetasRecuperadoJSON = localStorage.getItem("recetasGuardadasJSON");
  let objetoRecuperado = JSON.parse(recetasRecuperadoJSON);
  recetas = objetoRecuperado;

  
  acordeonRecetas.innerHTML = "";
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

        acordeonRecetas.appendChild(nuevoAcordeonItem);

        if(x === recetas[(recetas.length) - 1]){
          collapse.className = "accordion-collapse collapse show";
        }
    });
}
