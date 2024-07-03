CREATE DATABASE arene;
USE arene;

CREATE TABLE item(
id_item INT PRIMARY KEY AUTO_INCREMENT,
nom_item VARCHAR(50) NOT NULL UNIQUE,
bonus_point_de_vie INT NOT NULL,
bonus_defense INT NOT NULL,
bonus_attaque INT NOT NULL
);

CREATE TABLE type_personnage(
id_type_personnage INT PRIMARY KEY AUTO_INCREMENT,
type_personnage VARCHAR(50) NOT NULL UNIQUE,
attaque INT NOT NULL,
point_de_vie INT NOT NULL,
defense INT NOT NULL
);

CREATE TABLE arene(
id_arene INT PRIMARY KEY AUTO_INCREMENT,
nom_arene VARCHAR(50) NOT NULL
);

CREATE TABLE carnet_amis(
id_carnet_amis INT PRIMARY KEY AUTO_INCREMENT,
nom_carnet VARCHAR(50) NOT NULL
);

CREATE TABLE costume(
id_costume INT PRIMARY KEY AUTO_INCREMENT,
nom_costume VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE joueurs(
id_joueurs INT PRIMARY KEY AUTO_INCREMENT,
pseudo_joueur VARCHAR(50) NOT NULL UNIQUE,
mdp_joueur VARCHAR(150) NOT NULL,
mail_joueur VARCHAR(100) NOT NULL UNIQUE,
id_carnet_amis INT UNIQUE,
FOREIGN KEY (id_carnet_amis) REFERENCES carnet_amis(id_carnet_amis)
);

CREATE TABLE messages(
id_messages INT PRIMARY KEY AUTO_INCREMENT,
date_message DATETIME NOT NULL,
sujet VARCHAR(255) NOT NULL,
message TEXT NOT NULL,
id_auteur INT NOT NULL,
id_destinataire INT NOT NULL,
FOREIGN KEY (id_auteur) REFERENCES joueurs(id_joueurs),
FOREIGN KEY (id_destinataire) REFERENCES joueurs(id_joueurs)
);

CREATE TABLE contenir(
id_joueurs INT,
id_carnet_amis INT,
FOREIGN KEY (id_carnet_amis) REFERENCES carnet_amis(id_carnet_amis),
FOREIGN KEY (id_joueurs) REFERENCES joueurs(id_joueurs),
PRIMARY KEY (id_joueurs,id_carnet_amis)
);

CREATE TABLE personnage(
id_personnage INT PRIMARY KEY AUTO_INCREMENT,
nom_personnage VARCHAR(50) NOT NULL UNIQUE,
id_type_personnage INT NOT NULL,
id_joueurs INT NOT NULL,
FOREIGN KEY (id_joueurs) REFERENCES joueurs(id_joueurs),
FOREIGN KEY (id_type_personnage) REFERENCES type_personnage(id_type_personnage)
);

CREATE TABLE combats(
id_combat INT PRIMARY KEY AUTO_INCREMENT,
date_combat DATETIME NOT NULL,
id_arene INT NOT NULL,
id_vaincu INT NOT NULL,
id_vainqueur INT NOT NULL,
FOREIGN KEY (id_arene) REFERENCES arene(id_arene),
FOREIGN KEY (id_vaincu) REFERENCES personnage(id_personnage),
FOREIGN KEY (id_vainqueur) REFERENCES personnage(id_personnage)
);

CREATE TABLE achat(
id_achat INT PRIMARY KEY AUTO_INCREMENT,
date_achat DATETIME NOT NULL,
id_personnage INT,
id_costume INT,
id_joueurs INT,
FOREIGN KEY (id_personnage) REFERENCES personnage(id_personnage),
FOREIGN KEY (id_costume) REFERENCES costume(id_costume),
FOREIGN KEY (id_joueurs) REFERENCES joueurs(id_joueurs)
);

CREATE TABLE obtenir(
id_personnage INT,
id_item INT,
FOREIGN KEY (id_personnage) REFERENCES personnage(id_personnage),
FOREIGN KEY (id_item) REFERENCES item(id_item),
PRIMARY KEY (id_personnage,id_item),
equipe BOOL
);

INSERT INTO item (nom_item, bonus_point_de_vie, bonus_defense, bonus_attaque)
VALUES ("Arme de base", 0, 0, 0),
("Bouclier de la Méduse", 25, 15, 10),
 ("Marteau de Thor", 25, 5, 20),
 ("Excalibur", 20, 10, 20),
 ("Egide", 20, 30, 0),
 ("Sainte Lance", 10, 10, 30);

INSERT INTO type_personnage (type_personnage, point_de_vie, defense, attaque)
VALUES ("Barbare", 125, 5, 15),
 ("Guerrier", 100, 10, 10),
 ("Chevalier", 75, 15, 5);

INSERT INTO arene (nom_arene)
VALUES ("Colisée"),
 ("Muraille"),
 ("Armurerie");

INSERT INTO carnet_amis (nom_carnet)
VALUES ("Ma Liste"),
 ("Mes Amis"),
("Super Friends"),
("The Crew"),
("Famille de Coeur");

INSERT INTO costume (nom_costume)
VALUES ("La Faucheuse"),
 ("Le Lapin de Pâque"),
("La Banshee"),
("Jeanne d'Arc"),
 ("Phénix");

INSERT INTO joueurs (pseudo_joueur, mdp_joueur, mail_joueur, id_carnet_amis)
VALUES ("Dark Schneider","12345","dark.s@gmail.com",1),
 ("Perceval","Kaamelott31","alexast@sfr.fr",2),
 ("Guts","berserker#666","ceska@orange.fr",3),
 ("Broly","cacarot974","guillaume@gmail.com",4),
 ("Suskiki666","NarutoIsTheBest","hinatainlove@sfr.fr",5);

INSERT INTO messages (id_auteur, id_destinataire, date_message , sujet, message)
VALUES (1,3, "2022-06-21","Hey","Salut bro ! Comment tu vas ?"),
 (3,1, "2022-06-21", "Re:Hey","Salut poto ! Ca va super. C'est l'éclate ce jeu. :D"),
 (1,3, "2022-06-22", "ReRe:Hey","Ha ha, t'as vu, je te l'avais dis. Heureusement que je t'ai
bassiné avec pendant des plombes. ;)"),
 (3,1, "2022-06-22", "ReReRe:Hey","J'avoue XD Au passage, je viens de me payer la tenue de
Jeane D'Arc. Tu sais, la version Fate Apocryphe"),
 (1,2, "2022-06-23", "Salut","Coucou toi. Je savais que t'étais sur le jeu. Comment tu vas"),
 (2,3, "2022-06-23", "Dis, t'aurais pas gaffé","Hé toi, par hasard, t'aurai pas dit à ton pote que
j'étais sur le jeu. Non parce que ce relou vient de m'envoyer un message.");

INSERT INTO contenir (id_carnet_amis, id_joueurs)
VALUES (3,1),
(1,3),
 (3,2),
(2,3),
(1,4),
(4,1),
 (4,5),
(5,4),
 (5,2),
(2,5),
(5,3),
(3,5);

INSERT INTO personnage (nom_personnage, id_joueurs, id_type_personnage)
VALUES ("Power Killer",1,1),
 ("Mordred",2,3),
 ("Griffith",3,3),
 ("Vegeta",4,2),
 ("Kakashi",5,2),
 ("Bohort",2,1),
 ("Lars",1,3);

INSERT INTO combats (date_combat, id_arene, id_vainqueur, id_vaincu)
VALUES ("2022-06-23",1,1,2),
 ("2022-06-23",2,3,2),
 ("2022-07-01",3,6,5),
 ("2022-07-13",1,5,7),
 ("2022-07-15",1,4,1),
("2022-07-17",1,4,1);

INSERT INTO obtenir (id_item, id_personnage, equipe)
VALUES (6,1,false),
 (6,2,false),
 (6,3,false),
 (6,4,false),
 (6,5,false),
 (6,6,true),
 (6,7,true),
 (1,1,true),
 (2,1,false),
 (3,2,true),
 (4,3,true),
 (5,4,true),
 (1,5,true),
 (3,3,false),
 (4,1,false);

ALTER TABLE costume ADD COLUMN prix DECIMAL(5,2);
UPDATE costume SET prix = 20 WHERE id_costume = 1;
UPDATE costume SET prix = 35 WHERE id_costume = 2;
UPDATE costume SET prix = 15.5 WHERE id_costume = 3;
UPDATE costume SET prix = 29.5 WHERE id_costume = 4;

INSERT INTO achat (date_achat, id_joueurs, id_costume, id_personnage)
VALUES ("2022-05-10",1,1,1),
 ("2022-06-01",1,2,7),
 ("2022-06-21",3,4,3),
("2022-06-21",1,3,1),
 ("2022-06-23",3,5,3),
 ("2022-07-03",5,1,5);

SELECT pseudo_joueur FROM joueurs;

SELECT pseudo_joueur,mail_joueur FROM joueurs WHERE id_joueurs=3;

SELECT joueurs.pseudo_joueur,personnage.nom_personnage FROM joueurs 
JOIN personnage ON joueurs.id_joueurs = personnage.id_joueurs WHERE joueurs.id_joueurs=1;

SELECT joueurs.pseudo_joueur,costume.nom_costume,personnage.nom_personnage FROM joueurs 
JOIN personnage ON joueurs.id_joueurs = personnage.id_joueurs 
JOIN achat ON personnage.id_personnage = achat.id_personnage
JOIN costume ON achat.id_costume = costume.id_costume
WHERE joueurs.id_joueurs=1;

SELECT joueurs.pseudo_joueur,SUM(costume.prix) AS total_depenser FROM joueurs 
JOIN personnage ON joueurs.id_joueurs = personnage.id_joueurs 
JOIN achat ON personnage.id_personnage = achat.id_personnage
JOIN costume ON achat.id_costume = costume.id_costume
GROUP BY joueurs.pseudo_joueur;

SELECT joueurs.pseudo_joueur, carnet_amis.nom_carnet FROM joueurs
JOIN contenir ON joueurs.id_joueurs = contenir.id_joueurs
JOIN carnet_amis ON contenir.id_carnet_amis = carnet_amis.id_carnet_amis
WHERE joueurs.id_joueurs = 3;

SELECT joueurs.pseudo_joueur, messages.message AS message_envoyer FROM messages
JOIN joueurs ON messages.id_auteur = joueurs.id_joueurs
WHERE messages.id_auteur = 3;

SELECT joueurs.pseudo_joueur, messages.message AS message_recu FROM messages
JOIN joueurs ON messages.id_destinataire = joueurs.id_joueurs
WHERE messages.id_destinataire = 3;



/*SELECT joueurs.pseudo_joueur, combats.date_combat, arene.nom_arene,

(SELECT joueurs.pseudo_joueur FROM joueurs
	JOIN personnage ON joueurs.id_joueurs = personnage.id_joueurs
    JOIN combats ON personnage.id_joueurs = combats.id_vaincu
	WHERE combats.id_vaincu =1 or combats.id_vainqueur=1 ),
    
(SELECT joueurs.pseudo_joueur FROM joueurs
	JOIN personnage ON joueurs.id_joueurs = personnage.id_joueurs
    JOIN combats ON personnage.id_joueurs = combats.id_vainqueur
	WHERE combats.id_vaincu =1 or combats.id_vainqueur=1)

FROM arene
JOIN combats ON arene.id_arene = combats.id_combat
JOIN personnage ON combats.id_vaincu OR combats.id_vainqueur = personnage.id_joueurs
JOIN joueurs ON personnage.id_joueurs = joueurs.id_joueurs
WHERE joueurs.id_joueurs= 1;

SELECT joueurs.pseudo_joueur, combats.id_vainqueur,combats.id_vaincu FROM joueurs
	JOIN personnage ON joueurs.id_joueurs = personnage.id_joueurs
    JOIN combats ON personnage.id_joueurs = combats.id_vaincu
	WHERE combats.id_vaincu =1 or combats.id_vainqueur=1 ;
*/

-- suppression
SET FOREIGN_KEY_CHECKS=0;
DELETE FROM personnage WHERE id_personnage= 1;
DELETE FROM joueurs WHERE id_joueurs = 2;

-- evolution bdd

CREATE TABLE guilde(
id_guilde INT PRIMARY KEY AUTO_INCREMENT,
nom_guilde VARCHAR(50) NOT NULL UNIQUE,
date_creation_guilde DATETIME
);

ALTER TABLE personnage ADD COLUMN id_guilde INT;
ALTER TABLE personnage ADD FOREIGN KEY (id_guilde) REFERENCES guilde(id_guilde);

CREATE TABLE technique(
id_technique INT PRIMARY KEY AUTO_INCREMENT,
nom_technique VARCHAR(50) NOT NULL,
description_technique TEXT NOT NULL,
cout DECIMAL(5,2),
id_type_personnage INT,
FOREIGN KEY (id_type_personnage) REFERENCES type_personnage(id_type_personnage)
);

INSERT INTO technique (nom_technique, description_technique, cout, id_type_personnage)
VALUES ("Charge Brutale","Le personnage charge un adversaire à moins de 10m et lui assine
un coût dévastateur.",20,1),
("Riposte","Le personnage retourne la technique utilisée par un adversaire contre ce
dernier.",30,2),
("Grande Parade","Le personnage se met en position défensive. Il ne peut attaquer,
mais ne reçoit aucun dégât.",15,3);


INSERT INTO joueurs (pseudo_joueur,mdp_joueur,mail_joueur)
VALUES ("lulu","testaefzef","efef@mei.fr");

INSERT INTO personnage (nom_personnage,id_type_personnage,id_joueurs)
VALUES ("bob",1,6);

INSERT INTO obtenir (id_personnage,id_item,equipe)
VALUES (8,1,1);

INSERT INTO carnet_amis ( nom_carnet)
VALUES ("mooon_carnet_amis");

UPDATE joueurs SET id_carnet_amis = 6 WHERE pseudo_joueur="lulu";

INSERT INTO messages (date_message,sujet,message,id_auteur,id_destinataire)
VALUES ("2022-06-21 00:00:00","yo","je te souhaite bienvenue",1,6);

INSERT INTO messages (date_message,sujet,message,id_auteur,id_destinataire)
VALUES ("2022-06-21 00:04:00","yooooo","merci brooo",6,1);

INSERT INTO guilde (nom_guilde,date_creation_guilde)
VALUES ("Metalicanna","2022-07-29 00:00:00");

UPDATE personnage SET id_guilde = 1 WHERE nom_personnage="Guts" OR nom_personnage="bob";

SELECT guilde.nom_guilde, guilde.date_creation_guilde, personnage.nom_personnage FROM guilde
JOIN personnage ON guilde.id_guilde = personnage.id_guilde;

INSERT INTO combats (date_combat,id_arene,id_vaincu,id_vainqueur)
VALUES ("2022-07-29 00:00:00",1,5,8);

INSERT INTO obtenir (id_personnage,id_item,equipe)
VALUES (8,3,1);

INSERT INTO combats (date_combat,id_arene,id_vaincu,id_vainqueur)
VALUES ("2022-08-01 00:00:00",1,5,8),
("2022-08-01 00:02:00",1,5,7),
("2022-08-01 00:05:00",1,4,7),
("2022-08-01 00:08:00",1,4,3),
("2022-08-01 00:10:00",1,3,5),
("2022-08-01 00:12:00",1,5,8),
("2022-08-01 00:15:00",1,8,4),
("2022-08-01 00:17:00",1,4,8);

SELECT guilde.nom_guilde,
 (SELECT count(id_vainqueur) FROM combats WHERE id_vainqueur=8) AS nombre_victoire
 ,
 (SELECT count(id_vaincu) FROM combats WHERE id_vaincu=8) AS nombre_defaite
FROM guilde WHERE id_guilde =1;






