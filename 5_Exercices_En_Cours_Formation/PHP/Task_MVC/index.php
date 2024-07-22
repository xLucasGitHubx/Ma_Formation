<?php
//J'inclus mon fichier d'environnement
include './env.php';
//J'inclus mes fonctions utilitaires
include './utils/functions.php';
//J'inclus le model 
include './model/modelUsers.php';
//J'inclus les fichiers des View
include './view/viewHeader.php';
include './view/viewAccueil.php';
include './view/viewFooter.php';
include './components/viewCardUser.php';

//AFFICHER LISTE UTILSATEURS EN ENTRANT SUR LA PAGE
function showUsersAll()
{
    //1)Connexion à la BDD
    $bdd = connectBDD($_ENV['hostBDD'], $_ENV['dbnameBDD'], $_ENV['dbLogin'], $_ENV['dbPassword']);

    //2)appel de la fonction (depuis le model) permettant de récupérer les utilisateur
    $data = readUsersAll($bdd);

    //3) Afficher la liste des utilisateur : ob_start, foreach, ob_get_clean
    ob_start();
    foreach ($data as $user) {
        // $user = implode($user);
        echo renderCardUser($user['name_users'], $user['first_name_users'], $user['login_users']);
    }
    return ob_get_clean();
}

//ENVOIE DU FORMULAIRE D'INSCRIPTION
function registerUser()
{
    //1)Vérifier l'envoie du formulaire
    if (!isset($_POST["submit"])) {
        return;
    }

    //2) Vérifier les champs vides
    if (
        !isset($_POST['name_user']) || empty($_POST['name_user']) ||
        !isset($_POST['firstname_user']) || empty($_POST['firstname_user']) ||
        !isset($_POST['login_user']) || empty($_POST['login_user']) ||
        !isset($_POST['password_user']) || empty($_POST['password_user'])
    ) {

        return "Veulliez remplir tous les champs";
    }

    //3) Vérifier le format des données
    //Pas nécessaire

    //4) Nettoyer les données
    $name = sanitize($_POST['name_user']);
    $firstname = sanitize($_POST['firstname_user']);
    $login = sanitize($_POST['login_user']);
    $password = sanitize($_POST['password_user']);

    //5) Hasher un mot de passe
    $password = password_hash($password, PASSWORD_BCRYPT);

    //Connexion à la BDD
    $bdd = connectBDD($_ENV['hostBDD'], $_ENV['dbnameBDD'], $_ENV['dbLogin'], $_ENV['dbPassword']);

    //Vérification de la disponibilité du Login
    $data = readUserByLogin($bdd, $login);

    if (!empty($data)) {
        return "Le Login existe déjà en BDD";
    }

    $data = addUser($bdd, $name, $firstname, $login, $password);

    //Vérifie si l'enregistrement s'est bien déroulé
    if ($data != true) {
        return "Erreur d'enregistrement";
    }

    return "Nom : $name - Prenom : $firstname - PASSWORD : $password";
}


//J'affiche le rendu du HTML, en passant les données nécessaire ($message, $listUsers)
echo renderHeader('styleAccueil.css');
echo renderAccueil(registerUser(), showUsersAll());
echo renderFooter('accueil.js');
