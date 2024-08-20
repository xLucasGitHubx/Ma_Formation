<?php

class DeconnexionController
{
    public function index()
    {
        session_start();
        session_unset();  // Efface toutes les variables de session
        session_destroy();  // Détruit la session

        // Redirection vers la page de connexion
        header("Location: /connexion");
        exit();
    }
}
