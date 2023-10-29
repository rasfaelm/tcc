<?php
    // Obtendo os valores enviados pelo formulário
    $username = $_POST['email_login'];
    $password = $_POST['senha_login'];
?>


<!DOCTYPE html>

<html>
  <head>
    <style>
      body {
        background-color: #456eb9;
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      form {
        width: 100%;
        max-width: 400px;
        margin: 0;
        background-color: #ffffff;
        border: 2px solid #ddd;
        padding: 20px;
        border-radius: 5px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      h1 {
        text-align: center;
      }
      
      input[type="text"], input[type="password"], input[type="email"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
      }
      input[type="submit"] {
        background-color: #4285f4;
        border: none;
        color: #fff;
        padding: 5px 30px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
      }

      input[type="submit"]:hover {
        background-color: #357ae8;
      }

    </style>

    </head>
  <body>
  

      <!--FORMULÁRIO DE LOGIN-->
    <div id="login">
      <form method="post" action="">
        <h1>Login</h1>
          <p>
            <label for="email_login">E-mail</label><br>
            <input id="email_login" name="email_login" required="required" type="text" placeholder="contato@htmlecsspro.com"/>
          </p>
          <p>
            <label for="senha_login">Senha</label><br>
            <input id="senha_login" name="senha_login" required="required" type="password" placeholder="1234" /> 

          </p>
          <p>
                    <input type="submit" value="Cadastrar" /><a href="Rafael.html"></a>
            Ainda não tem conta?
            <a href="Cadastro.html">Cadastre-se</a>
          </p>
          </p>
        </form><br><a href="index.html"><img src="seta.png"  style="float: right; width: 30px;"></a>
        <?php
      if(isset($username) && isset($password)){
            //Verificando os dados do login
    if ($username === 'teste@gmail.com' && $password === 'teste') {
        echo "Login bem-sucedido!"; // ou redirecionar para uma página após o login
        header("location: Estudo.html ");
        exit;
  }else {
        echo "Nome de usuário ou senha inválidos.";
    }
    }
      
      ?>
    </div>
  
  </body>
</html>
