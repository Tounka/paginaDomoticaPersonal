document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
    

});


 function eventListeners(){
    setInterval(reloj, 1000); //cada segundo llama a la funcion reloj
    tiempo();
    

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
    console.log(data);
    
    // Por ejemplo, para acceder a la temperatura actual
    const temperatura = data.main.temp;
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

// function calcularOperacion(){
//     let variableTarifa = inpTarifa.value;

//     let variableKwAnual = parseFloat(inpTotalLuz.value);
//     let variableDisponibilidad = parseFloat(inpDisponibilidadSolar.value);
//     let variableCostoAnual = parseFloat(inpTotalLuzEfectivo.value);
    
//     let mensaje = "";

//     if (variableKwAnual > 0 && variableCostoAnual > 0){
//         if (variableCostoAnual >= 12000 && variableCostoAnual < 20000){
//             mensaje = "Debido a que tu gasto mensual de luz es de al menos $1000, va resultando interesante la idea de adquirir paneles solares como una inversion a medio plazo, "
//             if (variableDisponibilidad >= 1.5){
               
//                 mensaje = mensaje + mensajePt2();
                
//             } else{
//                 mensaje = mensaje + "ademas, ten en cuenta que los indices de luz que recibe tu propiedad no son suficientes como para que sea viable la instalación de los paneles."
//             }
    
           
    
//         }else if(variableCostoAnual >= 20000){
//             mensaje = "Adquirir paneles solares es una gran idea a corto/mediano plazo y al cabo de poco tiempo representara grandes ahorros en tus finanzas personales, "
//             if (variableDisponibilidad >= 1.5){
               
//                 mensaje = mensaje + mensajePt2();
                
//             } else{
//                 mensaje = mensaje + "ademas, ten en cuenta que los indices de luz que recibe tu propiedad no son suficientes como para que sea viable la instalación de los paneles."
//             }
//         }
//         else{
//             mensaje = "Al ser tu gasto mensual de luz es menor a 1000 mensuales se ve muy difícil que consigas un retorno de inversion en los próximos 5 años, recuerda que los paneles se van degradando y tienen una vida util de alrededor 15 años"
            
//         }
//     }else{
//         mensaje = "Recuerda llenar todos los campos"
//     }
   
//     respuesta.textContent = mensaje;
//     console.log(mensaje);

//     function mensajePt2(){
//         if(variableTarifa == "Desconozco"){
//             var porcentajekWhAcubrir = .3 ;
//         }else if (variableTarifa == 1){
//             var porcentajekWhAcubrir = .45 ;
            
//         }else if (variableTarifa == 2){
//             var porcentajekWhAcubrir = .65 ;
//         }else{
//             var porcentajekWhAcubrir = .9 ;
//         }
//         let kWhAcubrir = ((variableKwAnual/12) - 700) * porcentajekWhAcubrir;
//         let panelesNecesarios = kWhAcubrir/ 66 //promedio de kw que da el panel de 550w un dia 
//         panelesNecesarios = Math.round(panelesNecesarios);
//         if(panelesNecesarios<=0){
//             panelesNecesarios ==1;
//         }
//         let mensaje = "según tu caso, se recomienda la instalación de entre " + (panelesNecesarios) + " - " + (panelesNecesarios + 2) + " paneles de 550w.";

//         return (mensaje);
//     }
//     //console.log(mensaje)
//     //console.log(variableTarifa, variableKwAnual, variableDisponibilidad, variableCostoAnual)
    
// }


