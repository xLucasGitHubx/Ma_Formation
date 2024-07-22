<?php function vue()
{ ?>

    <!DOCTYPE html>
    <html lang="fr">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <form action="" method="post">
            <input type="text" name="name_user" id="" placeholder="prenom">
            <input type="text" name="first_name_user" id="" placeholder="nom de famille">
            <input type="text" name="login_user" id="" placeholder="login">
            <input type="password" name="mdp_user" id="" placeholder="password">
            <input type="submit" value="ajouter" name="submit">
        </form>

        <fieldset>
            <legend>supprimer</legend>
            <form action="" method="post">
                <input type="text" name="elementDelete" placeholder="login à delete">
                <input type="submit" value="supprimer" name="delete">
            </form>
        </fieldset>
    </body>

    </html>
<?php } ?>