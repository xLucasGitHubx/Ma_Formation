<?php

class CelebrerController
{
    public function index()
    {
        $title = "Celebrer";
        $scripts = ['celebrer_carou.js', 'celebrer_quest.js'];
        // Inclure la vue pour le head
        include '../app/Views/head.php';

        // Inclure la vue pour le header
        include '../app/Views/header.php';

        // Inclure le contenu principal de la page de réalisations
        include '../app/Views/celebrer.php';

        // Inclure la vue pour le footer
        include '../app/Views/footer.php';

        echo headContent($title, $scripts);
        echo headerContent();
        echo celebrerContent();
        echo footerContent();
    }
}