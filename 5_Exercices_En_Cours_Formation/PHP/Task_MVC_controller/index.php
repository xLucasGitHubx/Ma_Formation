<?php

session_start();
include './env.php';
include './utils/functions.php';
include './model/modelUsers.php';
include './view/viewHeader.php';
include './view/viewFooter.php';


//Analyse de l'URL avec parse_url() et retourne ses composants
$url = parse_url($_SERVER['REQUEST_URI']);
//test soit l'url a une route sinon on renvoi à la racine
$path = isset($url['path']) ? $url['path'] : '/';
/*--------------------------ROUTER -----------------------------*/
//test de la valeur $path dans l'URL et import de la ressource

switch ($path) {
    case $path === "/Task_MVC_controller/":

        include './view/viewAccueil.php';
        include './components/viewCardUser.php';
        include './controller/accueil.php';

        break;

    case $path === "/Task_MVC_controller/seconnecter":
        include './view/viewConnexion.php';
        include './controller/seconnecter.php';

        break;

    case $path === "/Task_MVC_controller/moncompte":
        include './view/viewMonCompte.php';
        include './controller/moncompte.php';

        break;

    case $path === "/Task_MVC_controller/deconnexion":

        include './controller/deconnexion.php';
        break;

    case $path === "/Task_MVC_controller/supprimercompte":
        include './controller/supprimermoncompte.php';
        break;
    //route par default
    default:
        include './controller/404.php';
        break;
}
