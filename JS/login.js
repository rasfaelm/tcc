function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential); // Corrigido para 'credential'
    console.log(data)
    fullName.textContent = data.name
    sub.textContent = data.sub
    given_name.textContent = data.given_name
    family_name.textContent = data.family_name
    email.textContent = data.email
    email_verified.textContent = data.email_verified
    picture.setAttribute("src", data.picture)
}
function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential);
    console.log(data);
  
    // Redirecionar para index.html após o login bem-sucedido
    window.location.href = "mainpage.html";
}
window.onload = function () {
    google.accounts.id.initialize({
    client_id: "556091384185-mpnrtfpil9290e2b6154mo34l2bgt3e4.apps.googleusercontent.com",
    callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    {
        theme: "outline",
        size: "large",
        type: "standard",
        shape: "rectangular",
        text: "signin_with",
        logo_alignment: "left"
    }
    );
    google.accounts.id.prompt();
}

function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    const userName = profile.getName();
    const userEmail = profile.getEmail();

    // Exiba o nome e e-mail do usuário na tela
    const userInfoElement = document.getElementById("user-info");
    userInfoElement.innerHTML = `Nome: ${userName}, E-mail: ${userEmail}`;
}
