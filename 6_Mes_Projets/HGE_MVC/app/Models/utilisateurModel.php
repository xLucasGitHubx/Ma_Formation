<?php

class UtilisateurModel
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function findUserByEmail($email)
    {
        $req = $this->db->prepare("SELECT * FROM Utilisateur WHERE Email = :email");
        $req->bindParam(':email', $email);
        $req->execute();
        return $req->fetch(PDO::FETCH_ASSOC);
    }

    public function verifyPassword($enteredPassword, $storedPassword)
    {
        return password_verify($enteredPassword, $storedPassword);
    }

    public function getSpecificPrenoms($prenoms)
    {
        // Préparer la requête SQL avec les bons placeholders directement
        $sql = "SELECT Prénom FROM Utilisateur WHERE Prénom IN (" . implode(',', array_fill(0, count($prenoms), '?')) . ")";
        $req = $this->db->prepare($sql);

        // Exécuter la requête avec les prénoms comme paramètres
        $req->execute($prenoms);

        // Retourner les résultats
        return $req->fetchAll(PDO::FETCH_COLUMN);
    }


}
