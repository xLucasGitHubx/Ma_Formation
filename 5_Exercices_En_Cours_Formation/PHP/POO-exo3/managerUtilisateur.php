<?php
/*Exercice POO 2 : Manager 
Sur la base de l'exercice précédent
1) Dans un fichier différent, créer une class ManagerUtilisateur qui hérite de la class Utilisateur (n'oubliez pas de faire un include du fichier contenant la class Utilisateur)
2) Dans cette class Manager, y déplacer la méthode qui permettait de récupérer les infos d'un utilisateur selon son Id. (elle ne sera plus dans la classe Utilisateur)
3) Redéfinissez la méthode d'affichage displayUtilisateur au sein du Manager. Elle affichera en plus "Yeepikaye ! Mother F**r !"
4) Créez un utilisateur à partir du Manager
5) Récupérer les infos d'un utilisateur en BDD
6) utilisez la méthode redéfinie displayUtilisateur()*/
include ("./BDDConnect.php");
include './index.php';

class ManagerUtilisateur extends Utilisateur
{
    //METHODE de model
    public function readUtilisateurById()
    {
        try {
            //Requête préparée
            $req = $this->getBdd()->prepare('SELECT id, nom, prenom, pseudo, email, mdp, dob FROM utilisateurs WHERE id = ?');

            //Récupération de l'id
            $id = $this->getId();

            //Binding de Param
            $req->bindParam(1, $id, PDO::PARAM_INT);

            //Execution de la requête
            $req->execute();

            //Récupérer les données et les renvoyer
            $data = $req->fetchAll(PDO::FETCH_ASSOC);

            return $data;

        } catch (EXCEPTION $error) {
            return $error->getMessage();
        }
    }

    public function displayUtilisateur()
    {
        echo $this->getNom() . ' ' . $this->getPrenom() . ' - ' . $this->getPseudo();
        echo "<br>Yeepikaye ! Mother F**r !";
    }
}

//Création de l'objet utilisateur
$user = new ManagerUtilisateur(1);

//Récupération de l'utilisateur selon l'id (1) en BDD
// $data = $user->setBdd(new PDO('mysql:host=localhost;dbname=utilisateur','root','root',array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION)))->readUtilisateurById();

$user->setBdd($connexion->connect());
$data = $user->readUtilisateurById();

//Remplissage des propriété nom, prenom et pseudo, et affichage
$user->setNom($data[0]["nom"])->setPrenom($data[0]["prenom"])->setPseudo($data[0]["pseudo"])->displayUtilisateur();
