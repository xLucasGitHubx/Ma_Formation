<?php

class DiscussionController
{
    private $messageModel;
    private $utilisateurModel;

    public function __construct($messageModel, $utilisateurModel)
    {
        $this->messageModel = $messageModel;
        $this->utilisateurModel = $utilisateurModel;
    }

    public function index()
    {
        session_start();
        if (!isset($_SESSION['user_id'])) {
            // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
            header("Location: /connexion");
            exit();
        }

        $title = "Discussion";
        $scripts = ['goBottomMp.js'];

        // Inclure les vues
        include '../app/Views/head.php';
        include '../app/Views/header.php';
        include '../app/Views/discussion.php';
        include '../app/Views/footer.php';

        // Afficher une vue générique ou une vue de discussion par défaut
        echo headContent($title, $scripts);
        echo headerContent();
        echo discussionContent([]);  // Passez les messages si disponibles
        echo footerContent();
    }

    public function discussionWith($prenom)
    {
        session_start();
        if (!isset($_SESSION['user_id'])) {
            // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
            header("Location: /connexion");
            exit();
        }

        $userId = $_SESSION['user_id'];
        $destinataire = $this->utilisateurModel->getUserByPrenom($prenom);

        if (!$destinataire) {
            echo "Utilisateur non trouvé.";
            return;
        }

        $destinataireId = $destinataire['Id_Utilisateur'];
        $messages = $this->messageModel->getMessagesBetweenUsers($userId, $destinataireId);

        $title = "Discussion avec $prenom";
        $scripts = ['goBottomMp.js'];

        include '../app/Views/head.php';
        include '../app/Views/header.php';
        include '../app/Views/discussion.php';
        include '../app/Views/footer.php';

        echo headContent($title, $scripts);
        echo headerContent();
        echo discussionContent($messages, $destinataireId);
        echo footerContent();
    }

    public function sendMessage()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            session_start();
            if (!isset($_SESSION['user_id'])) {
                header("Location: /connexion");
                exit();
            }

            $userId = $_SESSION['user_id'];
            $otherUserId = $_POST['destinataire_id'];
            $messageContent = $_POST['message'];

            // Debugging pour vérifier les valeurs
            error_log("User ID: $userId");
            error_log("Other User ID: $otherUserId");
            error_log("Message Content: $messageContent");

            // Validation des données
            if (empty($messageContent) || !is_numeric($otherUserId)) {
                echo "Données invalides pour l'envoi du message.";
                return;
            }

            try {
                $this->messageModel->insertMessage($messageContent, $userId, $otherUserId);
                header("Location: /discussion/" . $this->utilisateurModel->getPrenomById($otherUserId));
                exit();
            } catch (InvalidArgumentException $e) {
                echo $e->getMessage();
                return;
            }
        }
    }

}
