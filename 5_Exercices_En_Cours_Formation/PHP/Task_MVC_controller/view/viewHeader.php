<?php
function renderHeader($linkCSS)
{
    ob_start();
    ?>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./css/style.css">
        <link rel="stylesheet" href=<?php echo "./css/$linkCSS" ?>>
    </head>

    <body>
        <header>
            <nav>
                <a href="/Task_MVC_controller/">Accueil</a>
                <a href="/Task_MVC_controller/seconnecter">Connexion</a>
                <a href="/Task_MVC_controller/moncompte">Mon Compte</a>
                <a href="/Task_MVC_controller/deconnexion">Se Déconnecter</a>
                <a href="/Task_MVC_controller/supprimercompte">Supprimer Mon compte</a>
            </nav>
        </header>

        <?php
        return ob_get_clean();
}
