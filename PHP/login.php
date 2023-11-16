<?php
// Obtendo os valores enviados pelo formulário
$username = $_POST["email_login"];
$password = $_POST["senha_login"];

// Configurações do banco de dados
$servername = "localhost";
$db_username = "root";
$db_password = "";
$database = "db_cefetmat";

// Estabeleça a conexão com o banco de dados
$conn = mysqli_connect($servername, $db_username, $db_password, $database);

// Verifique a conexão
if (!$conn) {
    die("Conexão falhou: " . mysqli_connect_error());
}

// Consulta SQL para verificar o login
$sql = "SELECT * FROM usuarios WHERE email = '$username' AND senha = '$password'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) == 1) {
    // Login bem-sucedido, redirecione para a página desejada
    header("Location: /git/tcc/mainpage.html");
    exit();
} else {
    // Nome de usuário ou senha inválidos
    $aviso = "Nome de usuário ou senha inválidos.";
    header("Location: /git/tcc/Login.html");
}

// Feche a conexão com o banco de dados
mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <title>Login</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="imagex/png" href="../images/icone.ico">
    <link rel="stylesheet" href="../Css/form.css">
    <script src="https://accounts.google.com/gsi/client" async></script>
    <script src="https://unpkg.com/jwt-decode/build/jwt-decode.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jwt-decode@3.1.2/dist/jwt-decode.min.js"></script>
</head>
<body>

    <!--FORMULÁRIO DE LOGIN-->
    <div class="container" >
    <div><img src="../images/login.gif"></div>
    
    <div id="login">
    <form method="POST">
        <h1>Login</h1> <br>
        <label for="email_login">E-mail</label><br>
        <input id="email_login" name="email_login" required="required" type="text" placeholder="user@gmail.com"/><br>
        
        <label for="senha_login">Senha</label><br>
        <input id="senha_login" name="senha_login" required="required" type="password" placeholder="12345678"/>

        <div style="text-align: center">
            <input type="submit" value="Logar"/><a href="index.html"></a>
            <br><br><h5 style="text-align: center">ou </h5><br>
            <div id="buttonDiv"></div> <br>
            <h4 style="text-align: right;">Ainda não tem conta? <a href="Cadastro.html">Cadastre-se</a></h4>
        </div>
        <script src="./js/login.js"></script>
    </form>
    </div>
    
</div>
<script>
    function exibirPopup(aviso) {
        alert(aviso);
    }
</script>
</body>

</html>
    <!--
        PARA APRESENTAR INFORMAÇÕES do login com Google
        <p id="fullName"></p>
        <p id="sub"></p>
        <p id="given_name"></p>
        <p id="family_name"></p>
        <p id="email"></p>
        <p id="email_verified"></p>
        <img id="picture"/>-->