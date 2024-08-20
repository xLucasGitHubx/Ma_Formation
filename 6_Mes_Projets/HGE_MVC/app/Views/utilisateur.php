<?php
function utilisateurContent($user)
{
    ob_start();
    ?>
    <main class="utilisateur">
        <h1>Bienvenue <?php echo $user ?>!</h1>
        <section class="evenement">
            <article>
                <h3>Événement</h3>
                <h3 class="noSelectH3">Discussion</h3>
            </article>

            <img src="./Assets/Image/evenement/pignata_madame.jpeg" alt="fille avec pignata_madame" />
            <p>Fin de la construction de la pignata</p>
            <img src="./Assets/Image/evenement/viseuse.jpeg" alt="Homme qui vise le sol" />
            <p>Début de la contstruction de la cabane en bois pour les photo</p>
        </section>
        <section class="discussion">
            <article>
                <h3 class="noSelectH3">Événement</h3>
                <h3>Discussion</h3>
            </article>
            <!-- continuer la structure de la discussion ici -->
            <ul>
                <li>JEAN</li>
                <li>DAVID</li>
                <li>MATHILDE</li>
                <li>CAMILLE</li>
            </ul>
        </section>
    </main>
    <?php
    return ob_get_clean();
}