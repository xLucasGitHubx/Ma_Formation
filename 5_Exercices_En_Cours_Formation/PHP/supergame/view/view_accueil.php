<!-- VUE DE LA PAGE D'ACCUEIL -->
<?php
function renderView($result, $result2)
{
    ob_start();
    ?>
    <form action="" method="post">
        <input type="text" placeholder="pseudo" name="pseudo" id="pseudo">
        <input type="email" placeholder="email" name="email" id="email">
        <input type="number" placeholder="score" name="score" id="score">
        <input type="submit" value="submit" name="submit" id="submit">
    </form>
    <p><?php echo $result2 ?></p>
    <section>
        <p><?php echo $result ?></p>
    </section>

    <?php
    return ob_get_clean();
}