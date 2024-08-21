<?php
function discussionContent($messages, $destinataireId = null)
{
    ob_start();
    ?>
    <main class="messagerie">
        <div class="chat-container">
            <ul class="chat" id="message-list">
                <?php foreach ($messages as $message): ?>
                    <li
                        class="message <?= htmlspecialchars($message['Id_Expéditeur']) == $_SESSION['user_id'] ? 'right' : 'left' ?>">
                        <img class="logo"
                            src="https://randomuser.me/api/portraits/<?= htmlspecialchars($message['Id_Expéditeur']) == $_SESSION['user_id'] ? 'men' : 'women' ?>/67.jpg"
                            alt="" />
                        <p><?= htmlspecialchars($message['Contenu']) ?></p>
                    </li>
                <?php endforeach; ?>
            </ul>
            <form id="message-form" action="/discussion/sendMessage" method="post">
                <input type="text" name="message" class="text_input" placeholder="Message..." required />
                <input type="hidden" name="destinataire_id" value="<?= htmlspecialchars($destinataireId) ?>" />
                <button type="submit" id="submit" name="submit">
                    <img src="../Assets/Icons/send_button.svg" alt="bouton envoyer" />
                </button>
            </form>
        </div>
    </main>
    <!-- <script>
        // document.querySelector("#message-form").addEventListener("submit", function (event) {
        //     console.log("Form submitted"); // Vérification
        //     event.preventDefault(); // Empêche la soumission normale du formulaire

        //     let formData = new FormData(this);

        //     fetch("/discussion/sendMessage", {
        //         method: "POST",
        //         body: formData,
        //     })
        //         .then((response) => response.text())
        //         .then((data) => {
        //             console.log(data); // Vérification de la réponse
        //             // Traitez la réponse ici, par exemple, rechargez la liste des messages
        //             if (data.trim() === "Données invalides pour l'envoi du message.") {
        //                 alert("Erreur lors de l'envoi du message");
        //             } else {
        //                 // Recharger la liste des messages
        //                 document.getElementById("message-list").innerHTML = data;
        //             }
        //         })
        //         .catch((error) => console.error("Erreur:", error));
        // });

    </script> -->
    <?php
    return ob_get_clean();
}
