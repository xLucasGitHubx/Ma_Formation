<?php

class Utilisateur
{
    //Attribut
    private ?int $id;
    private ?string $nom;
    private ?string $prenom;
    private ?string $pseudo;
    private ?string $email;
    private ?string $mdp;
    private ?string $dob;
    private ?PDO $bdd;

    //Constructeur
    public function __construct(?int $id = NULL, ?string $pseudo = NULL, ?string $email = NULL)
    {
        $this->id = $id;
        $this->pseudo = $pseudo;
        $this->email = $email;
    }

    //GETTER (juste ceux nécessaire)
    public function getId(): ?int
    {
        return $this->id;
    }
    public function getNom(): ?string
    {
        return $this->nom;
    }
    public function getPrenom(): ?string
    {
        return $this->prenom;
    }
    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }
    public function getBdd(): ?PDO
    {
        return $this->bdd;
    }

    //SETTER (juste ceux nécessaire)
    public function setId(?int $id): self
    {
        $this->id = $id;
        return $this;
    }
    public function setNom(?string $nom): self
    {
        $this->nom = $nom;
        return $this;
    }
    public function setPrenom(?string $prenom): self
    {
        $this->prenom = $prenom;
        return $this;
    }
    public function setPseudo(?string $pseudo): self
    {
        $this->pseudo = $pseudo;
        return $this;
    }
    public function setEmail(?string $email): self
    {
        $this->email = $email;
        return $this;
    }
    public function setMdp(?string $mdp): self
    {
        $this->mdp = $mdp;
        return $this;
    }
    public function setDob(?string $dob): self
    {
        $this->dob = $dob;
        return $this;
    }
    public function setBdd(?PDO $bdd): self
    {
        $this->bdd = $bdd;
        return $this;
    }

    public function displayUtilisateur()
    {
        echo $this->getNom() . ' ' . $this->getPrenom() . ' - ' . $this->getPseudo();
    }

}