<?php
//MODEL POUR LA TABLE JOUEURS

class ModelJoueurs
{
    private ?int $id;
    private ?string $pseudo;
    private ?string $email;
    private ?int $score;
    private ?PDO $bdd;

    public function __construct(?string $pseudo, ?string $email, ?int $score, ?PDO $bdd)
    {
        $this->pseudo = $pseudo;
        $this->email = $email;
        $this->score = $score;
        $this->bdd = $bdd;

    }

    public function addJoueur()
    {
        try {
            $req = $this->bdd->prepare('INSERT INTO joueurs (pseudo,email,score) VALUES (?,?,?)');

            //Binding de Param
            $req->bindParam(1, $this->pseudo, PDO::PARAM_STR);
            $req->bindParam(2, $this->email, PDO::PARAM_STR);
            $req->bindParam(3, $this->score, PDO::PARAM_INT);

            if ($req->execute()) {
                return true;
            }
        } catch (EXCEPTION $error) {
            return $error->getMessage();
        }
    }

    public function getJoueurs()
    {
        try {
            $req = $this->bdd->prepare('SELECT pseudo,email,score FROM joueurs');

            $req->execute();

            return $req->fetchAll(PDO::FETCH_ASSOC);
        } catch (EXCEPTION $error) {
            return $error->getMessage();
        }
    }

    public function getJoueurByPseudo()
    {
        try {
            //7) Vérifier que le login est dispo
            $req = $this->bdd->prepare('SELECT pseudo,email,score FROM joueurs WHERE pseudo = ?');

            $req->bindParam(1, $this->pseudo, PDO::PARAM_STR);

            $req->execute();

            return $req->fetchAll(PDO::FETCH_ASSOC);

        } catch (EXCEPTION $error) {
            return $error->getMessage();
        }
    }





    /**
     * Get the value of id
     *
     * @return ?int
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @param ?int $id
     *
     * @return self
     */
    public function setId(?int $id): self
    {
        $this->id = $id;
        return $this;
    }

    /**
     * Get the value of pseudo
     *
     * @return ?string
     */
    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }

    /**
     * Set the value of pseudo
     *
     * @param ?string $pseudo
     *
     * @return self
     */
    public function setPseudo(?string $pseudo): self
    {
        $this->pseudo = $pseudo;
        return $this;
    }

    /**
     * Get the value of email
     *
     * @return ?string
     */
    public function getEmail(): ?string
    {
        return $this->email;
    }

    /**
     * Set the value of email
     *
     * @param ?string $email
     *
     * @return self
     */
    public function setEmail(?string $email): self
    {
        $this->email = $email;
        return $this;
    }

    /**
     * Get the value of score
     *
     * @return ?int
     */
    public function getScore(): ?int
    {
        return $this->score;
    }

    /**
     * Set the value of score
     *
     * @param ?int $score
     *
     * @return self
     */
    public function setScore(?int $score): self
    {
        $this->score = $score;
        return $this;
    }

    /**
     * Get the value of bdd
     *
     * @return ?PDO
     */
    public function getBdd(): ?PDO
    {
        return $this->bdd;
    }

    /**
     * Set the value of bdd
     *
     * @param ?PDO $bdd
     *
     * @return self
     */
    public function setBdd(?PDO $bdd): self
    {
        $this->bdd = $bdd;
        return $this;
    }
}