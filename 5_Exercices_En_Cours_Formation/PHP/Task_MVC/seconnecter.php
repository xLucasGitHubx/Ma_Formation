<?php
include './utils/functions.php';
include './model/modelUsers.php';
include './view/viewConnexion.php';
include './env.php';

session_start();

function seConnecter()
{
    if (!isset($_POST["connexion"])) {
        return;
    }
    if (
        !isset($_POST['identifiant']) || empty($_POST['identifiant']) ||
        !isset($_POST['password']) || empty($_POST['password'])
    ) {
        return "Veulliez remplir tous les champs";
    }
    $login = sanitize($_POST['identifiant']);
    $password = sanitize($_POST['password']);


    $bdd = connectBDD($_ENV['hostBDD'], $_ENV['dbnameBDD'], $_ENV['dbLogin'], $_ENV['dbPassword']);
    $data = readUserByLogin($bdd, $login);
    if (empty($data)) {
        return "Nom d'utilisateur incorrect";
    }
    // var_dump($data[0]);
    if (password_verify($password, $data[0]["mdp_users"]) == false) {
        return "mots de pass incorrect";
    }
    $_SESSION['login'] = $login;
    $_SESSION['name_users'] = $data[0]['name_users'];
    $_SESSION['first_name_users'] = $data[0]['first_name_users'];
    return "vous êtes connecter  ";
}

echo connexion();
$data = seConnecter();
echo $data;
echo $_SESSION['login'];
echo $_SESSION['name_users'];
echo $_SESSION['first_name_users'];
