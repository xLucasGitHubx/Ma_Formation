<?php
include "./data.php"
    ?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <header>
        <h1><?php echo $titre ?></h1>
    </header>
    <main>

        <?php ob_start();
        foreach ($ingredient as $ingredients) {
            ?>
            <li>
                <?php echo $ingredients ?>
            </li>
            <?php
        }
        $liste = ob_get_clean();
        ?>


        <ul>
            <?php echo $liste ?>
        </ul>


    </main>

</body>

</html>