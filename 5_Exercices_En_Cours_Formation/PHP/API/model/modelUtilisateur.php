<?php
//MODEL qui contient les requêtes SQL
function lireUtilisateurs($bdd)
{
    $req = $bdd->prepare('SELECT id, nom, prenom, pseudo, email, mdp, dob FROM utilisateurs');
    $req->execute();
    $data = $req->fetchAll(PDO::FETCH_OBJ);
    return $data;
}

function lireUtilisateursByPseudo($bdd, $pseudo)
{
    $req = $bdd->prepare('SELECT id, nom, prenom, pseudo, email, mdp, dob FROM utilisateurs WHERE pseudo = ?');
    $req->bindParam(1, $pseudo, PDO::PARAM_STR);
    $req->execute();
    $data = $req->fetchAll(PDO::FETCH_OBJ);
    return $data;
}

function lireUtilisateursByMail($bdd, $mail)
{
    $req = $bdd->prepare('SELECT id, nom, prenom, pseudo, email, mdp, dob FROM utilisateurs WHERE email = ?');
    $req->bindParam(1, $mail, PDO::PARAM_STR);
    $req->execute();
    $data = $req->fetchAll(PDO::FETCH_OBJ);
    return $data;
}


function enregistrerUtilisateur($bdd, $pseudo, $email, $mdp, $nom = NULL, $prenom = NULL, $dob = NULL)
{
    $req = $bdd->prepare('INSERT INTO utilisateurs (nom, prenom, dob, pseudo, email, mdp) VALUES (?,?,?,?,?,?)');

    //Si le nom est défini, on lui attribue le PARAM_STR, sinon on attribue PARAM_NULL
    isset($nom) ? $req->bindParam(1, $nom, PDO::PARAM_STR) : $req->bindParam(1, $nom, PDO::PARAM_NULL);

    //Si le prenom est défini, on lui attribue le PARAM_STR, sinon on attribue PARAM_NULL
    isset($prenom) ? $req->bindParam(2, $prenom, PDO::PARAM_STR) : $req->bindParam(2, $prenom, PDO::PARAM_NULL);

    //Si la date de naissance dob est défini, on lui attribue le PARAM_STR, sinon on attribue PARAM_NULL
    isset($dob) ? $req->bindParam(3, $dob, PDO::PARAM_STR) : $req->bindParam(3, $dob, PDO::PARAM_NULL);

    //On bind le reste des champs obligatoires
    $req->bindParam(4, $pseudo, PDO::PARAM_STR);
    $req->bindParam(5, $email, PDO::PARAM_STR);
    $req->bindParam(6, $mdp, PDO::PARAM_STR);

    //Execution de la requête, si tout se passe bien, on renvoie true. Sinon, on renvoie false
    if ($req->execute()) {
        return true;
    }
    return false;
}

//Liste informations des utilisateur avec leur id
function lireUtilisateursById($bdd, $id)
{
    $req = $bdd->prepare('SELECT id, nom, prenom, pseudo, email, mdp, dob FROM utilisateurs WHERE id = ?');
    $req->bindParam(1, $id, PDO::PARAM_STR);
    $req->execute();
    $data = $req->fetchAll(PDO::FETCH_OBJ);
    return $data;
}

function modifierUser($bdd, $oldEmail, $pseudo, $email, $mdp, $nom = NULL, $prenom = NULL, $dob = NULL)
{
    $req = $bdd->prepare("UPDATE utilisateurs SET nom= ?,prenom =?,dob= ?, pseudo =?, email=?,mdp=? WHERE email = ?");

    //Si le nom est défini, on lui attribue le PARAM_STR, sinon on attribue PARAM_NULL
    isset($nom) ? $req->bindParam(1, $nom, PDO::PARAM_STR) : $req->bindParam(1, $nom, PDO::PARAM_NULL);

    //Si le prenom est défini, on lui attribue le PARAM_STR, sinon on attribue PARAM_NULL
    isset($prenom) ? $req->bindParam(2, $prenom, PDO::PARAM_STR) : $req->bindParam(2, $prenom, PDO::PARAM_NULL);

    //Si la date de naissance dob est défini, on lui attribue le PARAM_STR, sinon on attribue PARAM_NULL
    isset($dob) ? $req->bindParam(3, $dob, PDO::PARAM_STR) : $req->bindParam(3, $dob, PDO::PARAM_NULL);

    //On bind le reste des champs obligatoires
    $req->bindParam(4, $pseudo, PDO::PARAM_STR);
    $req->bindParam(5, $email, PDO::PARAM_STR);
    $req->bindParam(6, $mdp, PDO::PARAM_STR);
    $req->bindParam(7, $oldEmail, PDO::PARAM_STR);

    //Execution de la requête, si tout se passe bien, on renvoie true. Sinon, on renvoie false
    if ($req->execute()) {
        return true;
    }
    return false;
}