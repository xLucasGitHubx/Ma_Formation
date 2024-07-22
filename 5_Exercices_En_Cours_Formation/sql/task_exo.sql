CREATE DATABASE task;
USE task;
CREATE TABLE users(
-- Création de la clés primaire
id_users INT PRIMARY KEY AUTO_INCREMENT,
name_users VARCHAR(50) NOT NULL,
first_name_users VARCHAR(50) NOT NULL,
login_users VARCHAR(50) 	NOT NULL UNIQUE,
mdp_users VARCHAR(200) NOT NULL
);

CREATE TABLE category(
-- Création de la clés primaire
id_cat INT PRIMARY KEY AUTO_INCREMENT,
name_cat VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE task(
-- Création de la clés primaire
id_task INT PRIMARY KEY AUTO_INCREMENT,
nom_task VARCHAR(50) NOT NULL,
content_task TEXT NOT NULL,
date_task DATE	NOT NULL,
id_users INT,
id_cat INT,
FOREIGN KEY (id_users) REFERENCES users(id_users),
FOREIGN KEY (id_cat) REFERENCES category(id_cat)
);

