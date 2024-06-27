CREATE DATABASE ticket;
USE ticket;
CREATE TABLE vendeurs(
id_vendeurs INT PRIMARY KEY AUTO_INCREMENT,
nom VARCHAR(50) NOT NULL,
prenom VARCHAR(50) NOT NULL, 
age	INTEGER NOT NULL
);

CREATE TABLE tickets(
id_vendeurs INT,
id_tickets INT PRIMARY KEY AUTO_INCREMENT,
date_ticket DATE NOT NULL,
FOREIGN KEY (id_vendeurs) REFERENCES vendeurs(id_vendeurs)
);

CREATE TABLE articles(
id_articles INT PRIMARY KEY AUTO_INCREMENT,
nom VARCHAR(50) UNIQUE NOT NULL,
prix DECIMAL(4,2) NOT NULL
);

CREATE TABLE contenir(
id_tickets INT,
id_articles INT,
FOREIGN KEY (id_tickets) REFERENCES tickets(id_tickets),
FOREIGN KEY (id_articles) REFERENCES articles(id_articles)
);

CREATE TABLE clients(
id_clients INT PRIMARY KEY AUTO_INCREMENT,
numero_client INT UNIQUE,
login VARCHAR(50) UNIQUE,
nom varchar(50),
prenom varchar(50)
);

ALTER TABLE tickets ADD COLUMN id_clients INT;
ALTER TABLE tickets ADD CONSTRAINT `id_clients` FOREIGN KEY (id_clients) REFERENCES clients(id_clients);

ALTER TABLE contenir ADD COLUMN quantite INT;
ALTER TABLE contenir ADD COLUMN id_contenir INT;
ALTER TABLE contenir ADD PRIMARY KEY (id_contenir);
ALTER TABLE clients CHANGE login email  VARCHAR(150) NOT NULL;
ALTER TABLE clients ADD COLUMN mdp VARCHAR(150) NOT NULL;
ALTER TABLE contenir DROP COLUMN id_contenir;
ALTER TABLE contenir ADD PRIMARY KEY (id_tickets, id_articles);


INSERT INTO vendeurs (nom,prenom,age)
	VALUES ("BLONDELLE","Léa", 19),
		("KOBY","Audrey",21),
		("BOURGEOIS","Elias",20);
        
  INSERT INTO clients (numero_client,email,nom,prenom,mdp)
	VALUES ("1","aze@gmail.fr","joe","joe","password"),
			("2","aze@gmail.com","david","doe","password2"),
            ("3","aze@gmail.street","clara","cla","password3");
            
INSERT INTO articles (nom,prix)
	VALUES ("toaster", 50),
		("canape",15),
		("chocolat",20);
        
INSERT INTO tickets (date_ticket, id_vendeurs,id_clients)
	VALUES ("2023-05-12", 1, 1),
		("2024-08-02", 2, 2),
        ("2023-03-24", 3, 3);
        
INSERT INTO contenir (id_tickets, id_articles,quantite)
	VALUES (1,1,4),
		(2,2,5),
        (3,3,6);
        
        
        
UPDATE articles SET prix = "8" WHERE id_articles = 1;
UPDATE articles SET prix = "9" WHERE id_articles = 2;
UPDATE articles SET prix = "10" WHERE id_articles = 3;

UPDATE clients SET nom = "ruby" WHERE id_clients = 1;
UPDATE clients SET prenom = "bob" WHERE id_clients = 1;

UPDATE vendeurs SET nom = "joe" WHERE nom LIKE "%BO%"; 
UPDATE vendeurs SET prenom = "fraie" WHERE prenom LIKE "%Au%"; 

UPDATE tickets SET date_ticket = "2024-01-01" WHERE id_tickets BETWEEN 2 AND 5;

UPDATE contenir SET quantite = 8 WHERE id_tickets IN (1,2,4,6);

-- Calcul

SELECT count(id_vendeurs) AS nombre_de_vendeurs FROM vendeurs;
SELECT count(id_tickets) AS nombre_de_tickets FROM tickets;
SELECT id_vendeurs, count(id_tickets) AS nombre_de_ticket_vendu FROM tickets GROUP BY	id_vendeurs;
SELECT AVG(quantite) AS nombre_article_vendu FROM contenir;
SELECT id_tickets, AVG(quantite) AS nombre_article_vendu FROM contenir GROUP BY id_tickets;

SELECT nom, prix FROM articles ORDER BY prix DESC LIMIT 1;
SELECT nom, prix FROM articles ORDER BY prix LIMIT 1;
SELECT AVG(prix) AS prix_moyen FROM articles;

SELECT prenom FROM clients ORDER BY id_clients DESC LIMIT 1;
SELECT prenom FROM clients ORDER BY id_clients  LIMIT 1;


