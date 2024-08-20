<?php
function planningContent()
{
    ob_start();
    ?>
    <main class="planning">
        <h1>Mes disponibilités</h1>
        <article class="calendar-outside">
            <section class="en-tete-calendar">
                <p class="date-actuel"></p>
                <div class="arrow">
                    <div id="precedant">&#x3008;</div>
                    <div id="suivant">&#x3009;</div>
                </div>
            </section>
            <section class="calendar">
                <div class="calendar">
                    <ul class="weeks">
                        <li>Lun</li>
                        <li>Mar</li>
                        <li>Mer</li>
                        <li>Jeu</li>
                        <li>Ven</li>
                        <li>Sam</li>
                        <li>Dim</li>
                    </ul>
                    <ul class="days"></ul>
                </div>
            </section>
        </article>
        <a href="./contact.html" class="nousContacter">Nous Contacter</a>
    </main>
    <?php
    return ob_get_clean();
}