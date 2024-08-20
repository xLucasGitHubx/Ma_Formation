<?php
function realisationContent()
{
    ob_start();
    ?>
    <main class="realisation">
        <h1>Nos Réalisations</h1>
        <div>
            <video autoplay loop muted preload="auto" playsinline
                poster="./Assets/Video/realisation/realisation_teddy_ballon.mp4"
                src="./Assets/Video/realisation/realisation_teddy_ballon.mp4" alt="decoration peluche et ballon" />
        </div>
        <div class="star">
            <img src="./Assets/Icons/star_fill.svg" alt="étoile pleine" />
            <img src="./Assets/Icons/star_fill.svg" alt="étoile pleine" />
            <img src="./Assets/Icons/star_fill.svg" alt="étoile pleine" />
            <img src="./Assets/Icons/star_fill.svg" alt="étoile pleine" />
            <img src="./Assets/Icons/star_fill.svg" alt="étoile pleine" />
        </div>
        <p>
            Marie - HGE est une plateforme exceptionnelle pour organiser des événements uniques et personnalisés. J'ai été
            impressionnée par la facilité
            de navigation et la diversité des services proposés. Un outil incontournable pour toute organisation
            d'événements!
        </p>
        <div>
            <video autoplay loop muted preload="auto" playsinline
                poster="./Assets/Video/realisation/realisation_pinata_enfant.mp4"
                src="./Assets/Video/realisation/realisation_pinata_enfant.mp4" alt="enfant qui joue a la pinata" />
        </div>
        <div class="star">
            <img src="./Assets/Icons/star_fill.svg" alt="étoile pleine" />
            <img src="./Assets/Icons/star_fill.svg" alt="étoile pleine" />
            <img src="./Assets/Icons/star_fill.svg" alt="étoile pleine" />
            <img src="./Assets/Icons/star_fill.svg" alt="étoile pleine" />
            <img src="./Assets/Icons/star_fill.svg" alt="étoile pleine" />
        </div>
        <p>
            Gérard - HGE est une plateforme remarquable pour créer des événements sur mesure. La variété des services
            offerts et la convivialité du site
            en font un choix de premier ordre. Je lui donne un 5/5 sans hésitation!
        </p>
        <div>
            <video autoplay loop muted preload="auto" playsinline
                poster="./Assets/Video/realisation/realisation_groupe_amie.mp4"
                src="./Assets/Video/realisation/realisation_groupe_amie.mp4"
                alt="groupe d'amie qui ce serre dans les bras et célébre" />
        </div>
        <div class="star">
            <img src="./Assets/Icons/star_fill.svg" alt="étoile pleine" />
            <img src="./Assets/Icons/star_fill.svg" alt="étoile pleine" />
            <img src="./Assets/Icons/star_fill.svg" alt="étoile pleine" />
            <img src="./Assets/Icons/star_fill.svg" alt="étoile pleine" />
            <img src="./Assets/Icons/star_no_fill.svg" alt="étoile vide" />
        </div>
        <p>
            HGE propose une expérience utilisateur agréable et des options de personnalisation intéressantes pour les
            événements. Cependant, quelques
            améliorations pourraient être apportées pour une navigation plus fluide. Dans l'ensemble, une excellente
            plateforme, je lui attribue une note
            de 4/5.
        </p>
        <a href="/contact" class="nousContacter">Nous Contacter</a>
    </main>
    <?php
    return ob_get_clean();
}