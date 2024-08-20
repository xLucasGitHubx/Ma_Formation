<?php

class AccueilController
{

    public function index()
    {
        $title = "Accueil";
        // Inclure la vue pour le head
        include '../app/Views/head.php';

        // Inclure la vue pour le header
        include '../app/Views/header.php';

        // Inclure le contenu principal de la page d'accueil
        include '../app/Views/accueil.php';

        // Inclure la vue pour le footer
        include '../app/Views/footer.php';

        echo headContent($title);
        echo headerContent();
        echo accueilContent();
        echo footerContent();

    }
}