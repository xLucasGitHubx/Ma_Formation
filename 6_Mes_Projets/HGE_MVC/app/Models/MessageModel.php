<?php

class MessageModel
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    // Récupérer tous les messages entre deux utilisateurs
    public function getMessagesBetweenUsers($userId, $otherUserId)
    {
        $query = $this->db->prepare("
            SELECT * FROM Message 
            WHERE (Id_Expéditeur = :userId AND Id_Destinataire = :otherUserId)
            OR (Id_Expéditeur = :otherUserId AND Id_Destinataire = :userId)
            ORDER BY date_envoi ASC
        ");
        $query->execute([
            'userId' => $userId,
            'otherUserId' => $otherUserId
        ]);

        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    // Envoyer un message
    public function insertMessage($content, $expediteurId, $destinataireId)
    {
        // Vérifiez que les données sont valides
        if (empty($content) || !is_numeric($expediteurId) || !is_numeric($destinataireId)) {
            throw new InvalidArgumentException("Données invalides pour l'envoi du message.");
        }

        $query = $this->db->prepare("
            INSERT INTO Message (Contenu, date_envoi, Id_Expéditeur, Id_Destinataire) 
            VALUES (:content, NOW(), :expediteurId, :destinataireId)
        ");
        $query->execute([
            'content' => $content,
            'expediteurId' => $expediteurId,
            'destinataireId' => $destinataireId
        ]);
    }


}
