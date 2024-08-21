<?php
function discussionContent($messages, $destinataireId = null, $personne = null)
{
    ob_start();
    ?>
    <main class="messagerie">
        <h1>Discussion avec : <?php echo $personne ?></h1>
        <div class="chat-container">
            <ul class="chat" id="message-list">
                <?php foreach ($messages as $message): ?>
                    <?php
                    // Déterminer l'image en fonction de l'expéditeur
                    $isCurrentUser = htmlspecialchars($message['Id_Expéditeur']) == $_SESSION['user_id'];
                    $userIcon = $isCurrentUser ? 'yellow_user_icon.svg' : 'green_user_icon.svg';
                    ?>
                    <li class="message <?= $isCurrentUser ? 'right' : 'left' ?>">
                        <img class="logo" src="/Assets/Icons/<?= $userIcon ?>" alt="User Icon" />
                        <p><?= htmlspecialchars($message['Contenu']) ?></p>
                    </li>
                <?php endforeach; ?>
            </ul>

            <form id="message-form" class="mp" action="/discussion/sendMessage" method="post">
                <input type="text" name="message" class="text_input" placeholder="Message..." required />
                <input type="hidden" name="destinataire_id" value="<?= htmlspecialchars($destinataireId) ?>" />
                <button type="submit" id="submit" name="submit">
                    <img src="/Assets/Icons/send_button.svg" alt="bouton envoyer" />
                </button>
            </form>
        </div>
    </main>
    <?php
    return ob_get_clean();
}
