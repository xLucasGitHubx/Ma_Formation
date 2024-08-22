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
        $scripts = ['goBottomMp.js', 'ajax.js'];

        include '../app/Views/head.php';
        include '../app/Views/header.php';
        include '../app/Views/discussion.php';
        include '../app/Views/footer.php';

        echo headContent($title, $scripts);
        echo headerContent();
        echo discussionContent($messages, $destinataireId, $prenom);
        echo footerContent();
    }

    public function sendMessage()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            session_start();
            if (!isset($_SESSION['user_id'])) {
                http_response_code(403); // Forbidden
                echo json_encode(['error' => 'Utilisateur non connecté']);
                exit();
            }

            $userId = $_SESSION['user_id'];
            $otherUserId = $_POST['destinataire_id'];
            $messageContent = htmlentities(strip_tags(stripcslashes(trim($_POST['message']))), ENT_QUOTES, 'UTF-8');

            if (empty($messageContent) || !is_numeric($otherUserId)) {
                http_response_code(400); // Bad Request
                echo json_encode(['error' => 'Données invalides pour l\'envoi du message.']);
                exit();
            }

            try {
                $this->messageModel->insertMessage($messageContent, $userId, $otherUserId);
                echo json_encode([
                    'success' => true,
                    'message' => $messageContent,
                    'expediteur_id' => $userId,
                ]);
            } catch (InvalidArgumentException $e) {
                http_response_code(500); // Internal Server Error
                echo json_encode(['error' => $e->getMessage()]);
            }
            exit();
        }
    }


    public function getNewMessages()
    {
        session_start();
        if (!isset($_SESSION['user_id'])) {
            header("HTTP/1.1 403 Forbidden");
            echo json_encode(['success' => false, 'message' => 'Non autorisé']);
            exit();
        }

        $userId = $_SESSION['user_id'];
        $otherUserId = $_GET['destinataire_id'];

        // Débogage: Affichez la valeur de destinataire_id
        error_log("ID du destinataire : " . $otherUserId);

        if (!is_numeric($otherUserId)) {
            http_response_code(400); // Bad Request
            echo json_encode(['success' => false, 'message' => 'ID de destinataire invalide']);
            exit();
        }

        $messages = $this->messageModel->getMessagesBetweenUsers($userId, "2");
        echo json_encode(['success' => true, 'messages' => $messages]);
        exit();
    }




}
