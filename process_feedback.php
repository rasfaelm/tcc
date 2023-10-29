<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifique se o comentário não está vazio
    if (!empty($_POST["feedback"])) {
        // Conecte-se ao banco de dados (substitua com suas configurações)
        $db_host = "localhost";
        $db_usuario = "root";
        $db_senha = "";
        $db_nome = "usuarios_studycefet";

        $con = mysqli_connect($db_host, $db_usuario, $db_senha, $db_nome);

        if (!$con) {
            die("Erro na conexão com o banco de dados: " . mysqli_connect_error());
        } else {
            echo "Conexão com o banco de dados estabelecida com sucesso.";
        }

        // Evite injeção de SQL escapando a entrada do usuário
        $feedback = mysqli_real_escape_string($con, $_POST["feedback"]);

        // Insira o feedback no banco de dados
        $sql = "INSERT INTO feedbacks (feedback) VALUES ('$feedback')";

        if (mysqli_query($con, $sql)) {
            echo "Comentário inserido com sucesso!";
        } else {
            echo "Erro ao inserir o comentário: " . mysqli_error($con);
        }

        // Feche a conexão com o banco de dados
        mysqli_close($con);
    }
}

// Redirecione de volta para a página de origem
//header("Location: pagina_original.php");
?>

