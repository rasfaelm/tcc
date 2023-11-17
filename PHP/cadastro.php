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
        header("Location: /git/TCC/cadastro.html");
    } elseif (strpos($email, "@gmail.com") === false) {
        $aviso = "O email deve ser um endereço do Gmail.";
        header("Location: /git/TCC/cadastro.html");
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
            header("Location: /git/TCC/cadastro.html");
        } else {
            // Email não cadastrado, prossiga com a inserção
            $sql = "INSERT INTO usuarios (nome, email, senha) VALUES ('$nome', '$email', '$senha')";
            
            if ($conn->query($sql) === TRUE) {
                $aviso = "Cadastro realizado com sucesso!";
                header("Location: /git/TCC/Login.html");
            } else {
                $aviso = "Erro no cadastro: " . $conn->error;
                header("Location: /git/TCC/cadastro.html");
            }
        }

        $conn->close();
    }
}
?>
