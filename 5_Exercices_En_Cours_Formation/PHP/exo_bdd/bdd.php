<?php
$name = "";
$content = "";


if (isset($_POST["submit"])) {

    if (isset($_POST["nom_article"]) && !empty($_POST["nom_article"]) && isset($_POST["contenu_article"]) && !empty($_POST["contenu_article"])) {

        $name = htmlentities(strip_tags(stripcslashes(trim($_POST["nom_article"]))));
        $content = htmlentities(strip_tags(stripcslashes(trim($_POST["contenu_article"]))));

        $bdd = new PDO(
            'mysql:host=localhost;dbname=articles',
            "root",
            "",
            array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)
        );

        try {
            $req = $bdd->prepare('INSERT INTO article (nom_article, contenu_article) VALUES (?,?)');

            $req->bindParam(1, $name, PDO::PARAM_STR);
            $req->bindParam(2, $content, PDO::PARAM_STR);

            $req->execute();
        } catch (EXCEPTION $error) {
            die($error->getMessage());
        }

        try {
            $req = $bdd->prepare('SELECT * FROM articles.article ORDER BY id_article DESC LIMIT 1');
            $req->execute();
            $data = $req->fetch(PDO::FETCH_ASSOC);
            echo "<p>" . "je suis l'article : $data[nom_article]" . "</p>";
            echo "<p>contenu de l'article : $data[contenu_article]</p>";
        } catch (EXCEPTION $error) {
            die($error->getMessage());
        }


    } else {
        echo "<p>les données sont vides</p>";

    }
}