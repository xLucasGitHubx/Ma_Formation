<?php
function renderConnexion($message){
    ob_start();
?>

    <main>
        <h1>Page de Connexion</h1>
        <form action="" method="post">
            <input type="text" name="login" placeholder="Login">
            <input type="password" name="password" placeholder="Password">
            <input type="submit" name="submit">
        </form>
        <p><?php echo $message ?></p>
    </main>

<?php
    return ob_get_clean();
}
?>
