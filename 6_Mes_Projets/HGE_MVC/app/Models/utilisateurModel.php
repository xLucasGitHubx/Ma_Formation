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

    public function getUserByPrenom($prenom)
    {
        $req = $this->db->prepare("SELECT * FROM Utilisateur WHERE Prénom = :prenom");
        $req->bindParam(':prenom', $prenom);
        $req->execute();
        return $req->fetch(PDO::FETCH_ASSOC);
    }

    public function getUserById($id)
    {
        $query = $this->db->prepare("SELECT * FROM Utilisateur WHERE Id_Utilisateur = :id");
        $query->execute(['id' => $id]);
        return $query->fetch(PDO::FETCH_ASSOC);
    }

    function getPrenomById($userId)
    {
        // Préparer la requête SQL pour récupérer le prénom en utilisant l'ID de l'utilisateur
        $query = $this->db->prepare("SELECT prénom FROM Utilisateur WHERE Id_Utilisateur = :userId");

        // Exécuter la requête avec l'ID de l'utilisateur comme paramètre
        $query->execute(['userId' => $userId]);

        // Récupérer le résultat sous forme de tableau associatif
        $result = $query->fetch(PDO::FETCH_ASSOC);

        // Vérifier si un prénom a été trouvé, sinon retourner null
        if ($result) {
            return $result['prénom'];
        } else {
            return null; // Utilisateur non trouvé
        }
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
