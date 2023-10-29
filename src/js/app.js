document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
    

});


// function eventListeners(){
    
//     btnCalcular.addEventListener("click", calcularOperacion);
//     disponibilidadSolar.addEventListener("input", actualizarlblRange)

// }
// function actualizarlblRange(){
//     let x = parseFloat(inpDisponibilidadSolar.value);
    
//     let mensajeRange = "";
//     console.log(x)
//     switch(x){
//         case 0:
//             mensajeRange = "Estructuras / edificios cercanos tapan la luz de mi tejado todo el dia";
        
            
//             break;
//         case 0.5:
//             mensajeRange = "Estructuras / edificios cercanos tapan la luz de mi tejado 10 horas, dejando solo 2 de luz ";
//             break;    

//         case 1:
//             mensajeRange = "Estructuras / edificios cercanos tapan la luz de mi tejado 8 horas del día, dejando solo 4 de luz";
//             break;    
//         case 1.5:
//             mensajeRange = "Estructuras / edificios cercanos tapan la luz de mi tejado 6 horas del día, dejando 6 de luz";
        
            
//             break;
//         case 2:
//             mensajeRange = "Estructuras / edificios cercanos tapan la luz de mi tejado 4 horas del día, dejando 8 de luz";
//             break;    

//         case 2.5:
//             mensajeRange = "Estructuras / edificios cercanos tapan la luz de mi tejado 2 horas del día, dejando 10 de luz";
//             break; 
//         case 3:
//             mensajeRange = "No hay ninguna estructura cerca de mi casa que tape luz.";
//             break; 
//     }
//     textAsocRange.textContent = mensajeRange;

    
// }

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


