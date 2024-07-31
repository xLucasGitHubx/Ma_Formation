<?php
//CONTROLER DE LA PAGE D'ACCUEIL
include ("./utils/utils.php");
include ("./model/model_joueurs.php");
include ("./view/view_accueil.php");


function ShowJoueursAll()
{
    $joueurTest = new ModelJoueurs("yo", "je@gmail.com", 200, connectBDD('localhost', 'supergame', 'root', ''));
    //2)appel de la fonction (depuis le model) permettant de récupérer les utilisateur
    $data = $joueurTest->getJoueurs();

    //3) Afficher la liste des utilisateur : ob_start, foreach, ob_get_clean
    ob_start();
    foreach ($data as $joueur) {
        echo "Pseudo: " . $joueur['pseudo'] . " /email:  " . $joueur['email'] . " /score: " . $joueur['score'] . "<br>";
    }
    return ob_get_clean();
}

function registerUser()
{
    //1)Vérifier l'envoie du formulaire
    if (!isset($_POST["submit"])) {
        return;
    }

    //2) Vérifier les champs vides
    if (
        !isset($_POST['pseudo']) || empty($_POST['pseudo']) ||
        !isset($_POST['email']) || empty($_POST['email']) ||
        !isset($_POST['score']) || empty($_POST['score'])
    ) {

        return "Veulliez remplir tous les champs";
    }

    //3) Vérifier le format des données
    if (!filter_var($_POST['score'], FILTER_VALIDATE_INT)) {
        return "le format des données est incorrecte . Veuillez le remplir avec le bon formats";
    }

    //4) Nettoyer les données
    $pseudo = sanitize($_POST['pseudo']);
    $email = sanitize($_POST['email']);
    $score = sanitize($_POST['score']);

    $newJoueurs = new ModelJoueurs($_POST['pseudo'], $_POST['email'], $_POST['score'], connectBDD('localhost', 'supergame', 'root', ''));

    //Vérification de la disponibilité du Login
    $data = $newJoueurs->getJoueurByPseudo();

    if (!empty($data)) {
        return "L'email ou le pseudo existe déjà en BDD";
    }

    $data = $newJoueurs->addJoueur();

    //Vérifie si l'enregistrement s'est bien déroulé
    if ($data != true) {
        return "Erreur d'enregistrement";
    }

    return "Pseudo : $pseudo - Email : $email - Score : $score";
}
echo renderView(ShowJoueursAll(), registerUser());