<?php
//j'inclus mes ressources
include './env.php';
include './utils/functions.php';
include './model/modelUtilisateur.php';

function modifierUtilisateurs($host, $dbname, $login, $password)
{
    // Mise en place de l'autorisation d'accès aux systèmes externes : Headers requis
    // Accès depuis n'importe quel site ou appareil (*)
    header("Access-Control-Allow-Origin: *");
    // Format des données envoyées
    header("Content-Type: application/json; charset=UTF-8");
    // Méthode autorisée : PUT puisqu'on veut enregistrer des données
    header("Access-Control-Allow-Methods: PUT");
    // Durée de vie de la requête
    header("Access-Control-Max-Age: 3600");
    // Entêtes autorisées
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    // Vérification de la méthode : si ce n’est pas la bonne, on renvoie une erreur
    if ($_SERVER['REQUEST_METHOD'] != 'PUT') {
        http_response_code(405);
        echo json_encode(["message" => "La méthode n'est pas autorisée"]);
        return;
    }

    //lecture des données reçu en JSON (ici $data est un objet)
    $data = json_decode(file_get_contents("php://input"));

    //Vérification des champs obligatoires (pseudo, email, mdp) : s'il en manque au moins un, on envoie un message d'erreur
    if (
        !isset($data->pseudo) || empty($data->pseudo)
        || !isset($data->email) || empty($data->email)
        || !isset($data->mdp) || empty($data->mdp)
        || !isset($data->oldEmail) || empty($data->oldEmail)
    ) {
        http_response_code(400);
        echo json_encode(["message" => "Veuillez remplir tous les champs obligatoires"]);
        return;
    }

    //Vérification du format des données (email) : si le mail n'est pas au bon format, on envoie un message d'erreur
    if (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["message" => "Votre email n'est pas au bon format"]);
        return;
    }

    //Nettoyage des données avec la fonction sanitize() définie dans le fichier functions.php
    $pseudo = sanitize($data->pseudo);
    $email = sanitize($data->email);
    $mdp = sanitize($data->mdp);
    $oldEmail = sanitize($data->oldEmail);

    //Les champs suivant n'étant pas obligatoire, s'ils existent, on les nettoye, sinon on enregistre NULL
    $nom = isset($data->nom) ? sanitize($data->nom) : NULL;
    $prenom = isset($data->prenom) ? sanitize($data->prenom) : NULL;
    $dob = isset($data->dob) ? sanitize($data->dob) : NULL;

    //Hashage du mot de passe
    $mdp = password_hash($mdp, PASSWORD_BCRYPT);

    //Connexion à la BDD
    $bdd = connect($host, $dbname, $login, $password);

    //Vérification de l'existence du pseudo et de l'email
    $bon = lireUtilisateursByMail($bdd, $oldEmail);

    if (empty($bon)) {
        http_response_code(400);
        echo json_encode(["message" => "cet email est liée à aucun compte"]);
        return;
    }

    //Enregistrement de l'utilisateur
    $result = modifierUser($bdd, $oldEmail, $pseudo, $email, $mdp, $nom, $prenom, $dob);

    //Vérification du résultat de l'enregistrement
    if ($result == false) {
        http_response_code(500);
        echo json_encode(["message" => "Un problème est survenu lors de l'enregistrement"]);
        return;
    }

    //Envoie des datas
    http_response_code(200);
    echo json_encode(["message" => "Enregistrement effecuté avec succès"]);
    return;
}


modifierUtilisateurs($_ENV['dbhost'], $_ENV['dbname'], $_ENV['dblogin'], $_ENV['dbpassword']);



// {
//     "nom": "Madjinda",
//     "prenom": "Lucas",
//     "pseudo": "lulu",
//     "email": "lucasmadjinda@gmail.com",
//     "mdp": "a",
//     "dob": "2002-02-12",
//     "oldEmail": "yoyo@gmail.com"
// }