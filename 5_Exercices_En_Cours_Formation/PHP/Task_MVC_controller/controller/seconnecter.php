<?php

//LE CONTROLLER DE LA PAGE DE CONNEXION
function seConnecter()
{
    //1) Vérifier la reception du formulaire
    if (!isset($_POST['submit'])) {
        return;
    }

    //2) Vérifie les champs vides
    if (!isset($_POST['login']) || empty($_POST['login']) || !isset($_POST['password']) || empty($_POST['password'])) {
        return 'Veuillez remplir tous les champs';
    }

    //3) Vérifier le format de données (pas applicable ici car on reçoit des String sans format particulier)
    //4) Nettoyage des données
    $login = sanitize($_POST['login']);
    $password = sanitize($_POST['password']);

    //5) Se connecter à la BDD
    $bdd = connectBDD($_ENV['hostBDD'], $_ENV['dbnameBDD'], $_ENV['dbLogin'], $_ENV['dbPassword']);


    //6) Je récupère les infos de l'utilisateur grâce au Login
    $data = readUserByLogin($bdd, $login);

    //7) Je vérifie la réponse de la BDD (si l'utilisateur existe ou pas)
    if (empty($data)) {
        return 'Login et/ou Password incorrect';
    }

    //8) Je vérifie la correspondance du mot de passe avec le hash enregistré en BDD
    if (!password_verify($password, $data[0]['mdp_users'])) {
        return 'Login et/ou Password incorrect';
    }

    //9) S'enregistre les infos en $_SESSION
    $_SESSION['login'] = $data[0]['login_users'];
    $_SESSION['nom'] = $data[0]['name_users'];
    $_SESSION['prenom'] = $data[0]['first_name_users'];
    $_SESSION['id'] = $data[0]['id_users'];
    $_SESSION['isConnected'] = true;

    return "Vous êtes bien connecté";

}

echo renderHeader("");
echo renderConnexion(seConnecter());
echo renderFooter("");