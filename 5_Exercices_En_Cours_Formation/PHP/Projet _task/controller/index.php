<?php
include "../vue/form.php";
include "../model/task.php";
vue();
$data = initFetch($bdd);
?>

<?php

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

        if (empty(verifyData($login_user, $bdd))) {
            $result = uploadData($name_user, $first_name_user, $login_user, $mdp_user, $bdd);
            $data = initFetch($bdd);
        } else {
            $result = "Ce login est déja pris veuillez en choisir un autre";
        }
    } else {
        $result = "Veuillez remplir les champs";
    }
}


if (isset($_POST["delete"])) {
    if (isset($_POST["elementDelete"]) && !empty($_POST["elementDelete"])) {
        $elementDelete = htmlentities(strip_tags(stripcslashes(trim($_POST["elementDelete"]))));
        $result = delete($elementDelete, $bdd);
    } else {
        $result = "impossible de supprimer car l'utilisateur n'existe pas";
    }
    $data = initFetch($bdd);
}


?>
<p>
    <?php
    echo $result;
    ?>
</p>
<p>Voici les différent login utilisateur existant:</p>
<ul>
    <?php
    foreach ($data as $valeur) {
        $valeur = implode($valeur);
        echo "<li>$valeur</li>";
    }
    ?>
</ul>