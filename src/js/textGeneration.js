const API_KEY = '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';



async function conseguirRecetaChatGpt(receta) {
    let consultaGpt = inputChatGpt.inputPrincipal;
    consultaGpt = consultaGpt + receta;
    console.log("tratando");
    
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + API_KEY 
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: 'system', content: 'Eres un util asistente que genera recetas' }, { role: 'user', content: consultaGpt }],
            })
        });

        const data = await response.json();
        const respuesta = data.choices[0].message.content;
        console.log(respuesta);
        return respuesta;
        
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
    }
}
async function conseguirRecetaAleatoriaChatGpt() {
    let consultaGpt = inputChatGpt.inputAleatorio;
    console.log("haciendo receta aleatoria");
    
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + API_KEY 
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: 'system', content: 'Eres un util asistente que genera recetas' }, { role: 'user', content: consultaGpt }],
            })
        });

        const data = await response.json();
        const respuesta = data.choices[0].message.content;
        console.log(respuesta);
        return respuesta;
        
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
    }
}
