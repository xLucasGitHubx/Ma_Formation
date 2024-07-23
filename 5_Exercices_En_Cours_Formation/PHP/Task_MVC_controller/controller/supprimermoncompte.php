<?php
function suppresion()
{
    if (!isset($_SESSION['isConnected'])) {
        return "vous n'étes pas connecter à votre compte suppresion impossible";
    }

    $bdd = connectBDD($_ENV['hostBDD'], $_ENV['dbnameBDD'], $_ENV['dbLogin'], $_ENV['dbPassword']);
    delete($_SESSION['login'], $bdd);
    header('Location:./');
    exit;
}
$message = suppresion();