<?php
    session_start();
    $db_username = 'root';
    $db_password = '';
    $conn = new PDO( 'mysql:host=localhost;dbname=cefetmat', $db_username, $db_password );
    if(!$conn){
      die("Falha na conexão!! Tente novamente");
    }
?>