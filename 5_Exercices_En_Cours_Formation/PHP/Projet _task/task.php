<?php
$name_user = "";
$first_name_user = "";
$login_user = "";
$mdp_user = "";

if (isset($_POST["submit"])) {

    if (
        isset($_POST["name_user"]) && !empty($_POST["name_user"]) &&
        isset($_POST["first_name_user"]) && !empty($_POST["first_name_user"]) &&
        isset($_POST["login_user"]) && !empty($_POST["login_user"]) &&
        isset($_POST["mdp_user"]) && !empty($_POST["mdp_user"])
    ) {
        $name_user = htmlentities(strip_tags(stripcslashes(trim($_POST["name_user"]))));
        $first_name_user = htmlentities(strip_tags(stripcslashes(trim($_POST["first_name_user"]))));
        $login_user = htmlentities(strip_tags(stripcslashes(trim($_POST["login_user"]))));
        // $mdp_user = htmlentities(strip_tags(stripcslashes(trim($_POST["mdp_user"]))));
        $mdp_user = password_hash($_POST["mdp_user"], PASSWORD_BCRYPT);




















    }
}