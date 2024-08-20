<?php
// db.php

function getDatabaseConnection()
{
    try {
        $db = new PDO("mysql:host=" . $_ENV['host'] . ";dbname=" . $_ENV['dbname'], $_ENV['login'], $_ENV['password']);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $db;
    } catch (PDOException $e) {
        die('Connexion échouée : ' . $e->getMessage());
    }
}
