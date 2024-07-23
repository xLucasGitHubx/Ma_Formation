<?php
function deco()
{
    //1)Activer la session
    session_start();

    //2) Détruise la session
    session_destroy();

    //3) Redirige vers l'Accueil
    header('Location:./');
    exit;
}

deco();