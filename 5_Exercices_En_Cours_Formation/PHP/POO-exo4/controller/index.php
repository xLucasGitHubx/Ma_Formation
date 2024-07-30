<?php
include '../env.php';
include '../model/BDDConnect.php';
include '../model/utilisateur.php';
include '../model/managerUtilisateur.php';
include '../view/viewAccueil.php';

$user = new ManagerUtilisateur(1);
$user->setBdd(new BDDConnect($_ENV['host'], $_ENV['dbname'], $_ENV['login'], $_ENV['password']));
$data = $user->readUtilisateurById();
$user->setNom($data[0]["nom"])->setPrenom($data[0]["prenom"])->setPseudo($data[0]["pseudo"]);


$controllerA = new ControllerAccueil($user, null);
$accueil = new ViewAccueil($controllerA->displayUtilisateur());
$controllerA->setViewAccueil($accueil);
$controllerA->renderView();

class ControllerAccueil
{
    private ?Utilisateur $utilisateur;
    private ?ViewAccueil $viewAccueil;

    public function __construct(?Utilisateur $utilisateur, ?ViewAccueil $viewAccueil)
    {
        $this->utilisateur = $utilisateur;
        $this->viewAccueil = $viewAccueil;
    }

    public function getUtilisateur()
    {
        return $this->utilisateur;
    }
    public function setUtilisateur($utilisateur): self
    {
        $this->utilisateur = $utilisateur;
        return $this;
    }
    public function getViewAccueil()
    {
        return $this->viewAccueil;
    }
    public function setViewAccueil($viewAccueil): self
    {
        $this->viewAccueil = $viewAccueil;
        return $this;
    }

    public function renderView()
    {
        echo $this->viewAccueil->renderAccueil();
    }
    public function displayUtilisateur()
    {
        return $this->utilisateur->getNom() . ' ' . $this->utilisateur->getPrenom() . ' - ' . $this->utilisateur->getPseudo() . "<br>" . "Yeepikaye ! Mother F**r !";
    }

}



