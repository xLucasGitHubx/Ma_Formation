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
            <button type="submit">envoyer</button>
        </form>

        <?php
        $total = $_POST['number1'] + $_POST['number1'];
        echo $total;
        ?>


    </main>
</body>

</html>