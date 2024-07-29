<?php
class Utilisateur
{
    private ?int $id;
    private ?string $nom;
    private ?string $prenom;
    private ?string $pseudo;
    private ?string $email;
    private ?string $mdp;
    private ?string $dob;

    private ?PDO $bdd;

    public function __construct(
        ?int $id = null,
        ?string $pseudo = null,
        ?string $email = null,
        ?object $bdd = new PDO(
            'mysql:host=localhost;dbname=utilisateur',
            "root",
            "",
            array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)
        )
    ) {
        $this->id = $id;
        $this->pseudo = $pseudo;
        $this->email = $email;
        $this->bdd = $bdd;
    }

    public function getId()
    {
        return $this->id;
    }
    public function setId(?string $newId): self
    {
        $this->id = $newId;
        return $this;
    }
    public function getBdd()
    {
        return $this->bdd;
    }
    public function setBdd(?string $newBdd): self
    {
        $this->bdd = $newBdd;
        return $this;
    }
    public function getNom()
    {
        return $this->nom;
    }
    public function setNom(?string $newNom): self
    {
        $this->nom = $newNom;
        return $this;
    }
    public function getPrenom()
    {
        return $this->prenom;
    }
    public function setPrenom(?string $newPrenom): self
    {
        $this->prenom = $newPrenom;
        return $this;
    }
    public function getPseudo()
    {
        return $this->pseudo;
    }
    public function setPseudo(string $newPseudo): self
    {
        $this->pseudo = $newPseudo;
        return $this;
    }
    public function getEmail()
    {
        return $this->email;
    }
    public function setEmail(string $newEmail): self
    {
        $this->email = $newEmail;
        return $this;
    }
    public function getDob()
    {
        return $this->dob;
    }
    public function setDob(?string $newDob): self
    {
        $this->dob = $newDob;
        return $this;
    }

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
        echo "<br>";
        echo "Voici le nom: " . $this->getNom();
        echo "<br>";
        echo "Voici le prenom: " . $this->getPrenom();
        echo "<br>";
        echo "Voici le pseudo: " . $this->getPseudo();
    }

}

$user = new Utilisateur(1);

$data = $user->getInfoById();
print_r($data);

$user->setNom("lucas");
$user->setPrenom("madjinda");
$user->setPseudo("lulu");

$user->displayInfo();