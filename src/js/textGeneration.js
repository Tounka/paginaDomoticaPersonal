const API_KEY = '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';



async function conseguirRecetaChatGpt(receta) {
    let consultaGpt = inputChatGpt.inputAleatorio;
    consultaGpt = consultaGpt + receta;
    
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + API_KEY // Corregí la concatenación
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: 'system', content: 'You are a helpful assistant that generates recipes.' }, { role: 'user', content: consultaGpt }],
            })
        });

        const data = await response.json();
        const respuesta = data;
        console.log(respuesta);
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
    }
}

