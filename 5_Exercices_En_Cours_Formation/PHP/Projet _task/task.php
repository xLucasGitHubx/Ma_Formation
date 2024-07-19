<?php
$name_user = "";
$first_name_user = "";
$login_user = "";
$mdp_user = "";
$result = "";

if (isset($_POST["submit"])) {

    if (
        isset($_POST["name_user"]) && !empty($_POST["name_user"]) &&
        isset($_POST["first_name_user"]) && !empty($_POST["first_name_user"]) &&
        isset($_POST["login_user"]) && !empty($_POST["login_user"]) &&
        isset($_POST["mdp_user"]) && !empty($_POST["mdp_user"])
    ) {
        $name_user = htmlentities(strip_tags(stripcslashes(trim($_POST["name_user"]))));
        $first_name_user = htmlentities(strip_tags(stripcslashes(trim($_POST["first_name_user"]))));
        $login_user = htmlentities(strip_tags(stripcslashes(trim($_POST["login_user"]))));
        $mdp_user = password_hash($_POST["mdp_user"], PASSWORD_BCRYPT);

        $bdd = new PDO(
            'mysql:host=localhost;dbname=task',
            "root",
            "",
            array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)
        );

        try {
            $req = $bdd->prepare('SELECT login_user FROM users WHERE login_user = ?');
            $req->bindParam(1, $login_user, PDO::PARAM_STR);
            $req->execute();
            $data = $req->fetchAll(PDO::FETCH_ASSOC);

            if (empty($data)) {
                $req = $bdd->prepare("INSERT INTO task.users (name_user,first_name_user,login_user,mdp_user) VALUES (?,?,?,?)");

                $req->bindParam(1, $name_user, PDO::PARAM_STR);
                $req->bindParam(2, $first_name_user, PDO::PARAM_STR);
                $req->bindParam(3, $login_user, PDO::PARAM_STR);
                $req->bindParam(4, $mdp_user, PDO::PARAM_STR);
                $req->execute();
                $result = "les informations enregistré en bdd correctement";

            } else {
                $result = "Ce login est déja pris veuillez en choisir un autre";
            }

        } catch (EXCEPTION $error) {
            die($error->getMessage());
        }

    } else {
        $result = "Veuillez remplir les champs";
    }
}

$bdd = new PDO(
    'mysql:host=localhost;dbname=task',
    "root",
    "",
    array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)
);

try {
    $req = $bdd->prepare('SELECT login_user FROM users');
    $req->execute();
    $data = $req->fetchAll(PDO::FETCH_ASSOC);

} catch (EXCEPTION $error) {
    die($error->getMessage());
}