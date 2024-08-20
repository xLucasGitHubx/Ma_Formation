<?php
function contactContent()
{
    ob_start();
    ?>
    <main class="contact">
        <h1>Contact</h1>
        <p>
            Bienvenue sur notre page de contact ! Nous sommes ravis de vous accueillir. Afin de mieux répondre à vos
            besoins, nous vous invitons à
            préciser la date de votre événement ou la nature de votre requête. Notre équipe est impatiente d'en apprendre
            davantage sur votre projet et de
            vous accompagner dans sa réalisation. Cordialement, L'équipe Heart Green Event.
        </p>
        <form action="post" id="contact">
            <div>
                <label for="nom">Nom:</label>
                <input type="text" id="nom" name="nom" required />
                <label for="prenom">Prenom:</label>
                <input type="text" id="prenom" name="prenom" required />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <label for="message">Votre Message:</label>
                <textarea id="message" name="message" required> </textarea>
                <button type="submit" form="contact" class="envoyer">Envoyer</button>
            </div>
        </form>
    </main>
    <?php
    return ob_get_clean();
}