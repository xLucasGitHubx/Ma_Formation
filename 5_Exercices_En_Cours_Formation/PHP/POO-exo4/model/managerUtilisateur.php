<?php
class ManagerUtilisateur extends Utilisateur
{
    //METHODE de model
    public function readUtilisateurById()
    {
        try {
            //Récupère l'objet BDDConnect (parce que je dois l'utiliser pour générer l'objet PDO)
            $bddConnect = $this->getBdd();
            //On instancie l'objet de connexion PDO
            $bdd = $bddConnect->connect();

            //Requête préparée
            $req = $bdd->prepare('SELECT id, nom, prenom, pseudo, email, mdp, dob FROM utilisateurs WHERE id = ?');

            //Récupération de l'id
            $id = $this->getId();

            //Binding de Param
            $req->bindParam(1, $id, PDO::PARAM_INT);

            //Execution de la requête
            $req->execute();

            //Récupérer les données et les renvoyer
            $data = $req->fetchAll(PDO::FETCH_ASSOC);

            return $data;

        } catch (EXCEPTION $error) {
            return $error->getMessage();
        }
    }
}
