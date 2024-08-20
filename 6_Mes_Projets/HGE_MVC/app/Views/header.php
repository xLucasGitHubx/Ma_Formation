<?php
function headerContent()
{
    ob_start();
    ?>

    <body>
        <header>
            <video preload="auto" autoplay muted loop playsinline poster="./Assets/Video/video_fleur.mp4" id="myVideo">
                <source src="./Assets/Video/video_fleur.mp4" type="video/mp4" />
            </video>
            <a href="/"><img class="logo" src="./Assets/Icons/Logos_var3/logo-transparent-svg.svg"
                    alt="heart green event icon" /></a>
        </header>
        <nav>
            <img class="hamburgerIcon" src="./Assets/Icons/hamburger.svg" alt="menu hamburger" />
            <div class="navLiens">
                <img class="crossButton" src="./Assets/Icons/exit_cross.svg" alt="bouton retour" />
                <a href="/">Accueil</a>
                <a href="/realisation">Nos réalisations</a>
                <a href="/celebrer">Célébrer</a>
                <a href="/planning">Planning</a>
                <a href="/contact">Contact</a>
                <a href="/connexion"><img id="iconUtilisateur" src="./Assets/Icons/user_icon_brown.svg"
                        alt="icone utilisateur" /></a>
            </div>
        </nav>
        <?php
        return ob_get_clean();
}