<?php
$aviso = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "db_cefetmat";

    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    // Valide os dados
    if (empty($nome) || empty($email) || empty($senha)) {
        $aviso = "Por favor, preencha todos os campos.";
    } elseif (strpos($email, "@gmail.com") === false) {
        $aviso = "O email deve ser um endereço do Gmail.";
    }

    if (empty($aviso)) {
        // Conecte-se ao banco de dados
        $conn = new mysqli($servername, $username, $password, $database);

        if ($conn->connect_error) {
            die("Erro na conexão com o banco de dados: " . $conn->connect_error);
        }

        // Verifique se o email já está cadastrado
        $checkEmailSql = "SELECT email FROM usuarios WHERE email = '$email'";
        $result = $conn->query($checkEmailSql);

        if ($result->num_rows > 0) {
            $aviso = "Este email já está cadastrado.";
        } else {
            // Email não cadastrado, prossiga com a inserção
            $sql = "INSERT INTO usuarios (nome, email, senha) VALUES ('$nome', '$email', '$senha')";
            
            if ($conn->query($sql) === TRUE) {
                $aviso = "Cadastro realizado com sucesso!";
                header("Location: /git/TCC/Login.html");
            } else {
                $aviso = "Erro no cadastro: " . $conn->error;
            }
        }

        $conn->close();
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Cadastro</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="imagex/png" href="../images/icone.ico">
    <link rel="stylesheet" href="../Css/form.css">
</head>
<body>
<div class="container">

    <div> <img src="../images/cadastro.png"></div>
    <!--FORMULÁRIO DE CADASTRO-->
    <div id="login">
    <form method="post">
        <h1 style="text-align: center">Cadastrar</h1> <br>

        <label for="nome">Nome:</label>
        <input id="nome" name="nome" required="required" type="text" placeholder="Nome Sobrenome"/><br>

        <label for="email">E-mail:</label>
        <input id="email" name="email" required="required" type="text" placeholder="contato@gmail.com"/>

        <label for="senha">Senha:</label>
        <input id="senha" name="senha" required="required" type="password" placeholder="123456"/>
<br><br><br>
        <div style="text-align: center">
            <input type="submit" value="Cadastrar" class="button"/><a href="index.html"></a>
            <br><br><br>
            <h4 style="text-align: right;">Já tem uma conta? <a href="Login.html">Logar</a></h4>
        </div>
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
