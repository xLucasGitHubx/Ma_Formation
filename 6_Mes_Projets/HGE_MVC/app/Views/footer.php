<?php
function footerContent()
{
    ob_start();
    ?>
    <footer>
        <img class="logo" src="/Assets/Icons/Logos_var2/logo-transparent-svg.svg" alt="Heart green logo" />
        <div class="icon">
            <a href="https://www.facebook.com" target="_blank">
                <img src="/Assets/Icons/facebook.svg" alt="icon de facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
                <img src="/Assets/Icons/instagram.svg" alt="icon de Instagram" />
            </a>
            <a href="https://www.pinterest.com" target="_blank">
                <img src="/Assets/Icons/pinterest.svg" alt="icon de pinterest" />
            </a>
        </div>
        <div class="liens">
            <a href="/legal/copyright">Copyright</a>
            <a href="/legal/mentions">Mentions légales</a>
        </div>
    </footer>
    </body>

    </html>
    <?php
    return ob_get_clean();
}