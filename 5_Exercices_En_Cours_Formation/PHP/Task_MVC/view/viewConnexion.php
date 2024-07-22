<?php
// session_start();
function connexion()
{
    ob_start();
    ?>
    <form action="" method="post">
        <fieldset>
            <legend>connexion</legend>
            <input type="text" name="identifiant" id="" placeholder="login">
            <input type="password" name="password" id="" placeholder="mots de passe">
            <input type="submit" value="se connexter" name="connexion">
        </fieldset>

    </form>
    <?php
    return ob_get_clean();
}