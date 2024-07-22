<?php
function renderCardUser($name_users,$first_name_users,$login_users){
    ob_start();
?>

<article class="card">
        <p>Nom : <?php echo $name_users ?></p>
        <p>Prénom : <?php echo $first_name_users ?></p>
        <p>Login : <?php echo $login_users ?></p>
</article>

<?php
    return ob_get_clean();
}