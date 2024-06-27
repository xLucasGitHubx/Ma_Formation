-- Création bdd
CREATE DATABASE test2401;

-- Dire qu'on veut utiliser la bdd
USE test2401;

-- création d'une table
CREATE TABLE users(
-- Création de la clés primaire
iduser INT PRIMARY KEY AUTO_INCREMENT,
name_user VARCHAR(50) NOT NULL, -- not null : pour dire que ce champ est obligatoire
firstname_user VARCHAR(50) DEFAULT 'Lucas', -- default : si la valeur n'est pas renseigner, enregistre une valeur par défaut
weight DECIMAL(6,2), -- decimal: ici ça vaut 6 chiffres dont 2 après la virgule
day_of_born DATE, -- date: une date sous le format AAAA-MM-JJ (exemple : '2024-01-29') exicte le DATETIME c'est date et heure sous le format AAAA-MM-JJ hh:mm:ss
email VARCHAR(100) NOT NULL UNIQUE, -- unique : dire qu'une valeur est unique parmis les champs enregistrer.
password_user  VARCHAR(150) NOT NULL -- pour un mot de passe, utiliser une taille assez longue. 150 c'est pas mal
)ENGINE=InnoDB;
-- Création d'une table avec clé étrangére
CREATE TABLE characters(
idcharacter INT PRIMARY KEY AUTO_INCREMENT,
name_character VARCHAR(50),
-- 1er etape création de la clé étrangère : créer le champ qui va servir de clé étrangère
iduser INT, 
-- 2nd étape : transforme la champ précédent en clé étrangère
FOREIGN KEY (iduser) REFERENCES users(iduser)
)ENGINE=innoDB;

/* Créons une table role avec des erreurs : pas de clé primaire,
et un mauvais typage sur le nom, et des propriété manquantes*/
CREATE TABLE roles(
id_role INT,
nom_role INT(10)
);

-- Corrigeons le tout en altérant la structure de la table

-- Ajouter la clé primaire :
ALTER TABLE roles ADD PRIMARY KEY (id_role);

-- Modfidier un champ
ALTER TABLE roles MODIFY id_role INT AUTO_INCREMENT;

ALTER TABLE roles MODIFY nom_role VARCHAR(50) UNIQUE NOT NULL;

-- Ajoutons à la tables users un champ id_role pour en faire une clé étrangère :
ALTER TABLE users ADD COLUMN id_role INT;
-- Transformons la en clé étrangère :
ALTER TABLE users ADD CONSTRAINT `fk-role-user` FOREIGN KEY (id_role) REFERENCES roles(id_role);

-- Modifier le nom d'un champ
ALTER TABLE roles CHANGE nom_role nom VARCHAR(50) NOT NULL UNIQUE;

-- Supprimer un champ :
ALTER TABLE roles DROP COLUMN nom;

ALTER TABLE roles ADD COLUMN nom VARCHAR(50) NOT NULL UNIQUE;

-- Supprimer une table :
DROP TABLE characters;

-- Supprimer une base de donnée
DROP DATABASE test2401;


-- Insertion de données : 1er syntaxe (la moins bonne T_T )
INSERT INTO users VALUES(1,"Depriester","Yoann",null, null, "yoann.dep@gmail.com","12345");


-- Insertion de données : 2nd syntaxe (la meilleur \o/ )
INSERT INTO users (name_user,firstname_user,email,password_user)
	VALUES ("Uzumaki","Naruto","kyubi@konoha.com","jetaimeSasuke"),
		("Uchiwa","Sadara","susano@konoha.com","12345");
