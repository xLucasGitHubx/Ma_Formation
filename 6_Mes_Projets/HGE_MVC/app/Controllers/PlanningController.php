<?php

class PlanningController
{

    public function index()
    {
        $title = "Planning";
        $scripts = ['calendar.js'];
        // Inclure la vue pour le head
        include '../app/Views/head.php';

        // Inclure la vue pour le header
        include '../app/Views/header.php';

        // Inclure le contenu principal de la page de réalisations
        include '../app/Views/planning.php';

        // Inclure la vue pour le footer
        include '../app/Views/footer.php';
        echo headContent($title, $scripts);
        echo headerContent();
        echo planningContent();
        echo footerContent();
    }
}