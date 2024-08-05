<?php
class BDDConnect
{
    //Attributs
    private ?string $host;
    private ?string $dbName;
    private ?string $login;
    private ?string $password;

    //Constructeur
    public function __construct(?string $host, ?string $dbName, ?string $login, ?string $password)
    {
        $this->host = $host;
        $this->dbName = $dbName;
        $this->login = $login;
        $this->password = $password;
    }

    //Getter et Setter
    public function getHost(): ?string
    {
        return $this->host;
    }
    public function setHost(?string $host): self
    {
        $this->host = $host;
        return $this;
    }

    public function getDbName(): ?string
    {
        return $this->dbName;
    }
    public function setDbName(?string $dbName): self
    {
        $this->dbName = $dbName;
        return $this;
    }

    public function getLogin(): ?string
    {
        return $this->login;
    }
    public function setLogin(?string $login): self
    {
        $this->login = $login;
        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }
    public function setPassword(?string $password): self
    {
        $this->password = $password;
        return $this;
    }

    //Méthode de connexion à la BDD
    public function connect(): ?PDO
    {
        $host = $this->getHost();
        $dbName = $this->getDbName();
        $login = $this->getLogin();
        $password = $this->getPassword();

        return new PDO("mysql:host=$host;dbname=$dbName", $login, $password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    }
}