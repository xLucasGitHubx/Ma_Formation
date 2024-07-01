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
id_articles INT PRIMARY KEY AUTO_INCREMENT,
titre VARCHAR(255),
contenu TEXT,
description_ TEXT,
image VARCHAR(255),
is_Premium BOOL,
id_utilisateurs INT,
FOREIGN KEY(id_utilisateurs) REFERENCES utilisateurs (id_utilisateurs)
);

CREATE TABLE commentaires(
id_commentaires INT PRIMARY KEY AUTO_INCREMENT,
commentaire TEXT,
note INT,
id_articles int,
FOREIGN KEY(id_articles) REFERENCES articles (id_articles),
id_utilisateurs int,
FOREIGN KEY(id_utilisateurs) REFERENCES utilisateurs (id_utilisateurs)
);

CREATE TABLE categories(
id_categories INT PRIMARY KEY AUTO_INCREMENT,
categorie VARCHAR(50)
);

CREATE TABLE categoriser(
id_articles int,
FOREIGN KEY(id_articles) REFERENCES articles (id_articles),
id_categories int,
FOREIGN KEY(id_categories) REFERENCES categories (id_categories)
);

INSERT INTO utilisateurs (email,mdp,nom,prenom,avatar)
	VALUES ("jo.mail@a.com","mdp1234", "john","joe","avatar1"),
		("jo.mail@da.com","mdp14234", "johny","joe","avatar2"),
		("jo.msdfail@a.com","mdp12fff34", "johna","joey","avatar3");

INSERT INTO articles (titre,contenu,description_,image,is_Premium,id_utilisateurs)
	VALUES ("titre1","lorem", "des","im", TRUE,3),
		("titre2","loremsgsg", "desc","ima", TRUE,2),
		("titre3","loremerre", "descr","image", FALSE,1);

INSERT INTO commentaires (commentaire,note,id_articles,id_utilisateurs)
	VALUES ("commentaire1",4,1,2),
		("commentaire1",6,2,3),
		("commentaire1",10,3,1);
        
INSERT INTO categories (categorie)
	VALUES ("Loisir"),
		("Manuel"),
		("Reflexion");
        
INSERT INTO categoriser (id_categories,id_articles)
	VALUES (1,3),
		(2,2),
		(3,1);
        
SELECT utilisateurs.nom,utilisateurs.prenom,utilisateurs.email, articles.titre, articles.contenu, articles.description_ FROM utilisateurs
	INNER JOIN articles ON utilisateurs.id_utilisateurs = articles.id_utilisateurs;

SELECT utilisateurs.nom,utilisateurs.prenom,utilisateurs.email,categories.categorie
FROM utilisateurs
	 INNER JOIN articles ON utilisateurs.id_utilisateurs = articles.id_utilisateurs
     INNER JOIN categoriser ON articles.id_articles = categoriser.id_articles
	 INNER JOIN categories ON categoriser.id_categories = categories.id_categories ;