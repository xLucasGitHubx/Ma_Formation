<?php

class RealisationController
{
    public function index()
    {
        $title = "Realisation";
        // Inclure la vue pour le head
        include '../app/Views/head.php';

        // Inclure la vue pour le header
        include '../app/Views/header.php';

        // Inclure le contenu principal de la page de réalisations
        include '../app/Views/realisation.php';

        // Inclure la vue pour le footer
        include '../app/Views/footer.php';

        echo headContent($title);
        echo headerContent();
        echo realisationContent();
        echo footerContent();
    }
}