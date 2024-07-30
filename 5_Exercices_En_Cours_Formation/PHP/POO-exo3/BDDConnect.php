<?php
include ("./env.php");
class BddConnect
{

    private ?string $host = null;
    private ?string $dbname = null;
    private ?string $login = null;
    private ?string $password = null;

    public function __construct(string $host, ?string $dbname, ?string $login, ?string $password)
    {
        $this->host = $host;
        $this->dbname = $dbname;
        $this->login = $login;
        $this->password = $password;


    }
    public function connect()
    {
        return new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->login, $this->password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    }
    public function getHost()
    {
        return $this->host;
    }
    public function setHost($host): self
    {
        $this->host = $host;
        return $this;
    }
    public function getDbname()
    {
        return $this->dbname;
    }
    public function setDbname($dbname): self
    {
        $this->dbname = $dbname;
        return $this;
    }
    public function getLogin()
    {
        return $this->login;
    }
    public function setLogin($login): self
    {
        $this->login = $login;
        return $this;
    }
    public function getPassword()
    {
        return $this->password;
    }
    public function setPassword($password): self
    {
        $this->password = $password;
        return $this;
    }

}

$connexion = new BddConnect($_ENV['hostBDD'], $_ENV['dbnameBDD'], $_ENV['dbLogin'], $_ENV['dbPassword']);

// var_dump($connexion->connect());