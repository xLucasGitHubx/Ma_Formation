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
            <input type="number" step="0.01" name="prix" id="" placeholder="prix">
            <input type="number" name="quantite" id="" placeholder="quantite">
            <input type="number" name="tva" id="" placeholder="tva en %">
            <button type="submit" name="submit">envoyer</button>
        </form>

        <?php
        if (isset($_POST['submit'])) {
            if (
                isset($_POST['prix']) && !empty($_POST['prix'])
                && isset($_POST['quantite']) && !empty($_POST['quantite'])
                && isset($_POST['tva']) && !empty($_POST['tva'])
            ) {
                $prix = htmlentities(strip_tags(stripcslashes(trim($_POST['prix']))));
                $quantite = htmlentities(strip_tags(stripcslashes(trim($_POST['quantite']))));
                $tva = htmlentities(strip_tags(stripcslashes(trim($_POST['tva']))));
                $ttc = $prix * (($tva / 100) + 1) * $quantite;
                if (
                    filter_var($prix, FILTER_VALIDATE_FLOAT)
                    && filter_var($quantite, FILTER_VALIDATE_INT)
                    && filter_var($tva, FILTER_VALIDATE_FLOAT)
                ) {
                    ob_start();
                    ?>
                    <p>Le prix TTC est de: <?php echo $ttc; ?> €</p>

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