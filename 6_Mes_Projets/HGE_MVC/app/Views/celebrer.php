<?php
function celebrerContent()
{
    ob_start();
    ?>
    <main class="celebrer">
        <h1>Célébrer</h1>
        <div>
            <div>
                <video autoplay loop muted src="./Assets/Video/celebrer/celebrer1.mp4" alt="enfant qui joue a la pinata" />
            </div>
            <div class="lesRond">
                <img src="./Assets/Icons/rond_plein.svg" alt="rond plein" />
                <img src="./Assets/Icons/rond_vide.svg" alt="rond plein" />
            </div>
        </div>
        <div class="surMesure">
            <img src="./Assets/Image/celebrer/pack_sur_mesure.png" alt="pack sur mesure" />
            <div>
                <h2>Pack Sur-Mesure</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti nulla commodi eos perferendis
                    praesentium quaerat non eius natus
                    fugiat distinctio minus in, iste ut quos saepe aliquam voluptates earum. Sed, a nulla debitis, veniam
                    iste accusantium sequi tempora optio
                    quis eum culpa voluptate obcaecati consequatur porro libero odio voluptatum ipsum labore. Ducimus, quae
                    provident maiores autem iste aut
                    perspiciatis?
                </p>
            </div>
        </div>
        <a href="./contact.html" class="nousContacter">Nous Contacter</a>
        <div class="questionnaire">
            <h2>Questionnaire</h2>
            <p>Passez ce petit test pour en savoir plus sur ce qui pourrait vous plaire!</p>
            <img src="./Assets/Image/celebrer/questionnaire.png" alt="homme qui s'intérroge" />
            <a href="" class="suivant">Suivant</a>
        </div>
    </main>
    <?php
    return ob_get_clean();
}