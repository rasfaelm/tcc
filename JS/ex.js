function submitAnswer() {
    // Obtenha a opção selecionada
    var selectedOption = document.querySelector('input[name="select"]:checked');
    
    if (selectedOption) {
        mostrarResposta()
    } else {
        alert('Por favor, selecione uma opção antes de enviar.');
    }

    
}

function mostrarResposta() {
    var respostaDiv = document.getElementById("resposta-div");
    if (respostaDiv.style.display === "none") {
        respostaDiv.style.display = "block"; // Torna a div visível
    } else {
        respostaDiv.style.display = "none"; // Oculta a div
    }
}
