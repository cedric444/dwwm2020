<?php

// Ce fichier sera inclus à chaque fois qu'on aura besoin d'accéder à la base de données.
// Il permet d'ouvrir la connection à la base de données.

class DbConnect {
    private static $db;

    public static function getDb() {
        return DbConnect::$db;
    }

    public static function init() {
        try{
            //On se connecte à MySQL
            self::$db=new PDO ('mysql:host=localhost;dbname=baseproduits; charset=utf8', 'produitsApp', 'prosuitsApp');
        } catch (exception $e) {
            // En cas d'erreur, on affiche un message et on arrête tout
            die ('Erreur : ' .$e->getMessage());
        }
    }
}