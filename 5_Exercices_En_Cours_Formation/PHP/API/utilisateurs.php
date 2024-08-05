<?php
//j'inclus mes ressources
include './env.php';
include './utils/functions.php';
include './model/modelUtilisateur.php';

//Function qui récupère et renvoie au Client la liste des utilisateurs
function listeUtilisateurs($host, $dbname, $login, $password)
{
    // Mise en place de l'autorisation d'accès aux systèmes externes : Headers requis
    // Accès depuis n'importe quel site ou appareil (*)
    header("Access-Control-Allow-Origin: *");
    // Format des données envoyées
    header("Content-Type: application/json; charset=UTF-8");
    // Méthode autorisée : GET puisqu'on veut lire des données
    header("Access-Control-Allow-Methods: GET");
    // Durée de vie de la requête
    header("Access-Control-Max-Age: 3600");
    // Entêtes autorisées
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    // Vérification de la méthode : si ce n’est pas la bonne, on renvoie une erreur
    if ($_SERVER['REQUEST_METHOD'] != 'GET') {
        http_response_code(405);
        echo json_encode(["message" => "La méthode n'est pas autorisée"]);
        return;
    }

    //Connexion à la BDD
    $bdd = connect($host, $dbname, $login, $password);

    $url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $id = 0;
    if ($url != "http://localhost/API/utilisateurs.php") {
        while ($url != "http://localhost/API/utilisateurs.php/$id") {
            $id++;
            if ($url == "http://localhost/API/utilisateurs.php/$id") {
                $data = lireUtilisateursById($bdd, $id);
                http_response_code(200);
                echo json_encode($data);
                return;
            }
        }
    }


    //Récupération de la liste des utilisateurs
    $data = lireUtilisateurs($bdd);

    //Envoie des datas
    http_response_code(200);
    echo json_encode($data);
    return;
}

$url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

if ($url == "http://localhost/API/modificationUser.php") {
    include "./modificationUser.php";
} else {
    listeUtilisateurs($_ENV['dbhost'], $_ENV['dbname'], $_ENV['dblogin'], $_ENV['dbpassword']);
}