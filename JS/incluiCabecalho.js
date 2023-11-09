fetch('cabecalho.html') // Usa JavaScript para carregar o cabeçalho 
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const cabecalhoDoc = parser.parseFromString(data, 'text/html');
        const cabecalho = cabecalhoDoc.querySelector('header'); // Substitua 'header' pelo seletor correto do cabeçalho
        document.body.insertBefore(cabecalho, document.body.firstChild);
        
        
        // Agora que o cabeçalho foi inserido, podemos adicionar o código do autocontraste 
        //var button = document.getElementById('autocontraste');
       // var body = document.body;
        //var header = document.getElementById('cabecalho'); // Obtém a referência do cabeçalho

       // button.addEventListener('click', function() {
           // if (body.classList.contains('dark-mode')) {
           //     body.classList.remove('dark-mode');
           //     header.classList.remove('dark-mode'); // Remove a classe do cabeçalho
           // } else {
           //     body.classList.add('dark-mode');
           //     header.classList.add('dark-mode'); // Adiciona a classe ao cabeçalho
           // }
        //});
      });
      function menuShow() {
    
            let menuMobile = document.querySelector('.mobile-menu');
            if (menuMobile.classList.contains('open')) {
                menuMobile.classList.remove('open');
                document.querySelector('.icon').src = "./images/cabecalho/menu.png";
            } else {
                menuMobile.classList.add('open');
                document.querySelector('.icon').src = "./images/cabecalho/fechar.svg";
            }
        }