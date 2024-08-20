<?php

class ConnexionController
{
    private $utilisateurModel;

    public function __construct($utilisateurModel)
    {
        $this->utilisateurModel = $utilisateurModel;
    }

    public function index()
    {
        session_start();

        // Vérifier si l'utilisateur est déjà connecté
        if (isset($_SESSION['user_id'])) {
            // Rediriger vers la page utilisateur si l'utilisateur est déjà connecté
            header("Location: /utilisateur");
            exit();
        }

        // Vérifier si le formulaire a été soumis
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $email = $_POST['email'];
            $password = $_POST['password'];

            // Chercher l'utilisateur par email
            $user = $this->utilisateurModel->findUserByEmail($email);

            // Vérifier si l'utilisateur existe et si le mot de passe est correct
            if ($user && $this->utilisateurModel->verifyPassword($password, $user['mdp'])) {
                // Connexion réussie, démarrer une session
                $_SESSION['user_id'] = $user['Id_Utilisateur'];
                $_SESSION['user_name'] = $user['Nom'];
                $_SESSION['user_prenom'] = $user['Prénom'];

                // Redirection vers la page utilisateur
                header("Location: /utilisateur");
                exit();
            } else {
                $error = "Email ou mot de passe incorrect.";
            }
        }

        // Inclure les vues
        include '../app/Views/head.php';
        include '../app/Views/header.php';
        include '../app/Views/connexion.php';
        include '../app/Views/footer.php';

        echo headContent("Connexion", ['see_mdp.js']);
        echo headerContent();
        if (isset($error)) {
            echo connexionContent($error);
        } else {
            echo connexionContent();
        }
        echo footerContent();
    }
}
