<?php
    session_start();

    // Verifique se o botão "toggle-contrast" foi pressionado
    if (isset($_POST['toggle-contrast'])) {
        // Inverta o estado de alto contraste
        if (isset($_SESSION['dark_mode']) && $_SESSION['dark_mode']) {
            $_SESSION['dark_mode'] = false;
        } else {
            $_SESSION['dark_mode'] = true;
        }
    }

    // Verifique o estado do modo de alto contraste
    $darkMode = (isset($_SESSION['dark_mode']) && $_SESSION['dark_mode']) ? 'dark-mode' : '';

    // Adicione a classe CSS apropriada ao corpo
    echo '<script>document.body.className = "' . $darkMode . '";</script>';
    ?>
