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
    // Obter o nome de usuário antes do caractere "@"
    $username = strstr($email, '@', true);

    setcookie("username", $username, time() + (86400 * 30), "/");
    
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