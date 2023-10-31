document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
    
    
});


 function eventListeners(){
    
    setInterval(reloj, 1000); //cada segundo llama a la funcion reloj
    tiempo();
    carrouselVideos();

 }


function reloj(){
    const tiempoActual = new Date();
    let horas = tiempoActual.getHours().toString().padStart(2, '0');
    // let subfijo = "am";
    if (horas >= 12){
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
function carrouselVideos(){
    let numeroVid = Math.floor(Math.random() * listaUrlVideo.length) ;
    console.log(numeroVid);
    let vidAReproducir = listaUrlVideo[numeroVid] + "&mute=1&autoplay=1";
    video.src = vidAReproducir;

    console.log(vidAReproducir);
}