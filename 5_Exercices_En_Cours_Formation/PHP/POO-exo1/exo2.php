<?php
include './index.php';

class ManagerUtilisateur extends Utilisateur
{
    public function getInfoById()
    {
        try {
            $req = $this->getBdd()->prepare('SELECT nom, prenom, pseudo, email,dob FROM utilisateurs WHERE id = ?');
            $n = $this->getId();
            $req->bindParam(1, $n, PDO::PARAM_INT);

            $req->execute();

            return $req->fetchAll(PDO::FETCH_ASSOC);

        } catch (EXCEPTION $error) {
            return $error->getMessage();
        }

    }
    public function displayInfo()
    {
        echo "Yeepikaye ! Mother F**r !";
    }
}

$manager = new ManagerUtilisateur(2, "Guts", "griffith@gmail.com");
$manager->setNom("Miura");
$manager->setPrenom("Kentaro");
$manager->getInfoById();
$manager->displayInfo();
