<?php

class UtilisateurController
{
    public function index()
    {
        session_start();
        if (!isset($_SESSION['user_id'])) {
            // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
            header("Location: /connexion");
            exit();
        }

        $title = $_SESSION['user_name'];
        $scripts = ['utilisateur.js'];

        // Inclure les vues
        include '../app/Views/head.php';
        include '../app/Views/header.php';
        include '../app/Views/utilisateur.php';
        include '../app/Views/footer.php';

        echo headContent($title, $scripts);
        echo headerContent();
        echo utilisateurContent($_SESSION['user_name']);
        echo footerContent();
    }
}
