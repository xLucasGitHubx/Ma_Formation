<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- <p>
    Exercice 8 :
-Créer une page de formulaire dans laquelle on aura 2 champs de formulaire de type nombre.
-Afficher dans cette même page la somme des 2 champs avec un affichage du style :
La somme est égale à : valeur.
    </p> -->
    <main>
        <form action="" method="post">
            <input type="number" name="number1" id="" placeholder="nombre 1">
            <input type="number" name="number2" id="" placeholder="nombre 2">
            <button type="submit" name="submit">envoyer</button>
        </form>

        <?php
        if (isset($_POST['submit'])) {
            if (
                isset($_POST['number1']) && !empty($_POST['number1'])
                && isset($_POST['number2']) && !empty($_POST['number2'])
            ) {
                $number1 = htmlentities(strip_tags(stripcslashes(trim($_POST['number1']))));
                $number2 = htmlentities(strip_tags(stripcslashes(trim($_POST['number2']))));
                $total = $number1 + $number2;

                if (filter_var($total, FILTER_VALIDATE_INT)) {
                    ob_start();
                    ?>
                    <p>Le prix total est de : <?php echo $total; ?></p>

                    <?php
                    echo ob_get_clean();
                } else {
                    ?>
                    <p><?php echo "Les champs ne sont pas bien rempli"; ?></p>
                    <?php
                }
            }
        }
        ?>



    </main>
</body>

</html>