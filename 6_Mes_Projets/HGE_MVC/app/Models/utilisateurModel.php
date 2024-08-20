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
}
