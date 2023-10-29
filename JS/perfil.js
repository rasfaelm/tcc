
// Função para ativar a edição dos campos
function enableEdit() {
    const fileInput = document.getElementById('profile-file');
    fileInput.style.display = 'block';
    fileInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const profileImage = document.getElementById('profile-image');
                profileImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
     // Oculta o botão "Editar" e exibe o botão "Salvar"
    document.getElementById('edit-button').style.display = 'none';
    document.getElementById('save-button').style.display = 'block';

    document.getElementById('profile-file').style.display = 'block';
    document.getElementById('profile-image').style.pointerEvents = 'none';

    // Ativa a edição dos campos de texto
    document.getElementById('name').contentEditable = true;
    document.getElementById('message').contentEditable = true;

    // Ativa a edição dos campos de texto
    const nameField = document.getElementById('name');
    const messageField = document.getElementById('message');
}

// Função para salvar as alterações
function saveChanges() {
    // Oculta o botão "Salvar" e exibe o botão "Editar" novamente
    document.getElementById('edit-button').style.display = 'block';
    document.getElementById('save-button').style.display = 'none';

    // Desativa a edição dos campos de texto
    document.getElementById('name').contentEditable = false;
    document.getElementById('message').contentEditable = false;

    document.getElementById('profile-file').style.display = 'none';
    document.getElementById('profile-image').style.pointerEvents = 'auto';

    const newName = document.getElementById('name').textContent;
    const newMessage = document.getElementById('message').textContent;

    // Define os valores dos cookies
    setCookie('name', newName, 365);         // Armazena o nome por 1 ano
    setCookie('message', newMessage, 365);   // Armazena a mensagem por 1 ano

    alert('Alterações salvas com sucesso!');
}

// Função para definir um cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

// Função para obter o valor de um cookie por nome
function getCookie(name) {
    const cookieName = name + '=';
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return '';
}

// Quando a página carrega, preenche os campos com os valores dos cookies, se existirem
window.onload = function () {
    const savedName = getCookie('name');
    const savedMessage = getCookie('message');

    if (savedName) {
        document.getElementById('name').textContent = savedName;
    }

    if (savedMessage) {
        document.getElementById('message').textContent = savedMessage;
    }
};

// Função para limitar o tamanho do texto
function limitText(element, maxLength) {
    if (element.textContent.length > maxLength) {
        element.textContent = element.textContent.slice(0, maxLength);
    }
}

// Função de logout
function logout(){
    document.cookie = "name; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "message; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "Login.html";
}