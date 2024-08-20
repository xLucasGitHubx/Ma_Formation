<?php
function headContent($title, $scripts = null)
{
    ob_start();
    ?>
    <!DOCTYPE html>
    <html lang="fr">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="./Icons/Logos_var2/logo-transparent-svg.svg" type="image/svg" />
        <link rel="stylesheet" href="./Assets/Style/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Ms+Madi&display=swap"
            rel="stylesheet" />
        <script src="./Assets/Script/hamburger.js" async></script>
        <script src="./Assets/Script/scroll.js" async></script>
        <title><?php echo $title ?></title>

        <?php if (isset($scripts)) {
            foreach ($scripts as $script) { ?>
                <script src="./Assets/Script/<?php echo $script ?>" async></script>
                <?php

            }
        } ?>

    </head>
    <?php
    return ob_get_clean();
}