document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('autocontraste');
    var body = document.body;
    var header = document.getElementById('cabecalho'); // Obtém a referência do cabeçalho

    button.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            header.classList.remove('dark-mode'); // Remove a classe do cabeçalho
        } else {
            body.classList.add('dark-mode');
            header.classList.add('dark-mode'); // Adiciona a classe ao cabeçalho
        }
    });
});
