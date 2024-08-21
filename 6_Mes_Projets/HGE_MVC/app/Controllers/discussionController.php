<?php

class DiscussionController
{

    public function index()
    {
        $title = "Discussion";
        $scripts = ['goBottomMp.js'];
        // Inclure la vue pour le head
        include '../app/Views/head.php';

        // Inclure la vue pour le header
        include '../app/Views/header.php';

        // Inclure le contenu principal de la page d'accueil
        include '../app/Views/discussion.php';

        // Inclure la vue pour le footer
        include '../app/Views/footer.php';

        echo headContent($title, $scripts);
        echo headerContent();
        echo discussionContent();
        echo footerContent();

    }
}