<?php
$name_user = "";
$first_name_user = "";
$login_user = "";
$mdp_user = "";
$result = "";
$elementDelete = "";



$bdd = new PDO(
    'mysql:host=localhost;dbname=task',
    "root",
    "",
    array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)
);



function verifyData($login_user, $bdd)
{

    try {
        $req = $bdd->prepare('SELECT login_user FROM users WHERE login_user = ?');
        $req->bindParam(1, $login_user, PDO::PARAM_STR);
        $req->execute();
        $data = $req->fetchAll();
        return $data;


    } catch (EXCEPTION $error) {
        die($error->getMessage());
    }
}
function uploadData($name_user, $first_name_user, $login_user, $mdp_user, $bdd)
{

    try {
        $req = $bdd->prepare("INSERT INTO task.users (name_user,first_name_user,login_user,mdp_user) VALUES (?,?,?,?)");
        $req->bindParam(1, $name_user, PDO::PARAM_STR);
        $req->bindParam(2, $first_name_user, PDO::PARAM_STR);
        $req->bindParam(3, $login_user, PDO::PARAM_STR);
        $req->bindParam(4, $mdp_user, PDO::PARAM_STR);
        $req->execute();
        $result = "les informations enregistré en bdd correctement";
        return $result;
    } catch (EXCEPTION $error) {
        die($error->getMessage());
    }
}

function initFetch($bdd)
{

    try {
        $req = $bdd->prepare('SELECT login_user FROM users');
        $req->execute();
        $data = $req->fetchAll(PDO::FETCH_ASSOC);

    } catch (EXCEPTION $error) {
        die($error->getMessage());
    }
    return $data;
}


function delete($elementDelete, $bdd)
{

    try {
        $req = $bdd->prepare("DELETE FROM users WHERE login_user = ?");
        $req->bindParam(1, $elementDelete, PDO::PARAM_STR);
        $req->execute();
        $result = "les information sont bien supprimer";
        return $result;
    } catch (EXCEPTION $error) {
        die($error->getMessage());
    }
}