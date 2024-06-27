CREATE DATABASE blog;
USE blog;


CREATE TABLE utilisateurs(
id_utilisateurs INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(255) UNIQUE,
mdp VARCHAR(150),
nom VARCHAR(50),
prenom  VARCHAR(50),
avatar  VARCHAR(50)
);




CREATE TABLE articles(
id_article INT PRIMARY KEY AUTO_INCREMENT,
titre VARCHAR(255),
contenu TEXT,
description_ TEXT,
image VARCHAR(255),
is_Premium BOOL,
id
FOREIGN KEY(id_utilisateurs) REFERENCES (id_utilisateurs)
);
