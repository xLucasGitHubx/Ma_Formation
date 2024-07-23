<?php
function suppresion()
{
    if (!isset($_SESSION['isConnected'])) {
        return "vous n'étes pas connecter à votre compte suppresion impossible";
    }

    $bdd = connectBDD($_ENV['hostBDD'], $_ENV['dbnameBDD'], $_ENV['dbLogin'], $_ENV['dbPassword']);
    delete($_SESSION['login'], $bdd); //Fonctionne très bien malgré le warning
    header('Location:./');
    return "compte supprimer";

}
echo suppresion();