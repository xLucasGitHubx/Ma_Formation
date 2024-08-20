<?php
function connexionContent($error = null)
{
    ob_start();
    ?>
    <main class="connexion">
        <h1>Connexion</h1>
        <form action="/connexion" method="post" id="connexion">
            <label for="email">Votre adresse Email:</label>
            <input type="text" id="email" name="email" required />
            <label for="password">Mot de passe:</label>
            <input type="password" id="password" name="password" required />
            <p style="color:red; font-size:2vh; margin-top:1vh"><?php echo $error ?></p>
            <div class="seeMdp">.</div>
            <a href="#" class="mdpOublier">Mots de passe oublié ?</a>
            <button type="submit" class="seConnecter" form="connexion" name="submit" id="submit">Se Connecter</input>
        </form>
    </main>
    <?php
    return ob_get_clean();
}