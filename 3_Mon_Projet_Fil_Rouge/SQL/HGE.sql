CREATE DATABASE HGE;
USE HGE;

CREATE TABLE Utilisateur(
   Id_Utilisateur INT AUTO_INCREMENT,
   Nom VARCHAR(50) ,
   Prénom VARCHAR(50) ,
   Email VARCHAR(100) ,
   mdp VARCHAR(150) ,
   PRIMARY KEY(Id_Utilisateur),
   UNIQUE(Email)
);

CREATE TABLE Rôle(
   Id_Rôle INT AUTO_INCREMENT,
   role VARCHAR(50)  NOT NULL,
   PRIMARY KEY(Id_Rôle)
);

CREATE TABLE Adresse(
   Id_Adresse INT AUTO_INCREMENT,
   Rue VARCHAR(100) ,
   Ville VARCHAR(50) ,
   Code_postal VARCHAR(50) ,
   Pays VARCHAR(50) ,
   Id_Utilisateur INT NOT NULL,
   PRIMARY KEY(Id_Adresse),
   UNIQUE(Id_Utilisateur),
   FOREIGN KEY(Id_Utilisateur) REFERENCES Utilisateur(Id_Utilisateur)
);

CREATE TABLE Historique_de_connexion(
   Id_Historique_de_connexion INT AUTO_INCREMENT,
   Date_de_connexion DATETIME,
   Adresse_IP VARCHAR(50) ,
   Id_Utilisateur INT NOT NULL,
   PRIMARY KEY(Id_Historique_de_connexion),
   FOREIGN KEY(Id_Utilisateur) REFERENCES Utilisateur(Id_Utilisateur)
);

CREATE TABLE Message(
   Id_Message INT AUTO_INCREMENT,
   Contenu TEXT,
   date_envoi DATETIME,
   Id_Destinataire INT NOT NULL,
   Id_Expéditeur INT NOT NULL,
   PRIMARY KEY(Id_Message),
   FOREIGN KEY(Id_Destinataire) REFERENCES Utilisateur(Id_Utilisateur),
   FOREIGN KEY(Id_Expéditeur) REFERENCES Utilisateur(Id_Utilisateur)
);

CREATE TABLE Réalisation(
   Id_Réalisation INT AUTO_INCREMENT,
   Titre VARCHAR(50)  NOT NULL,
   Description TEXT NOT NULL,
   Video TEXT,
   Id_Utilisateur INT NOT NULL,
   PRIMARY KEY(Id_Réalisation),
   FOREIGN KEY(Id_Utilisateur) REFERENCES Utilisateur(Id_Utilisateur)
);

CREATE TABLE Commentaire(
   Id_Commentaire INT AUTO_INCREMENT,
   Contenu TEXT,
   date_création DATETIME,
   Id_Réalisation INT NOT NULL,
   Id_Utilisateur INT NOT NULL,
   PRIMARY KEY(Id_Commentaire),
   UNIQUE(Id_Réalisation),
   UNIQUE(Id_Utilisateur),
   FOREIGN KEY(Id_Réalisation) REFERENCES Réalisation(Id_Réalisation),
   FOREIGN KEY(Id_Utilisateur) REFERENCES Utilisateur(Id_Utilisateur)
);

CREATE TABLE Note(
   Id_Note INT AUTO_INCREMENT,
   Valeur SMALLINT,
   date_création VARCHAR(50) ,
   Id_Réalisation INT NOT NULL,
   Id_Utilisateur INT NOT NULL,
   PRIMARY KEY(Id_Note),
   UNIQUE(Id_Réalisation),
   UNIQUE(Id_Utilisateur),
   FOREIGN KEY(Id_Réalisation) REFERENCES Réalisation(Id_Réalisation),
   FOREIGN KEY(Id_Utilisateur) REFERENCES Utilisateur(Id_Utilisateur)
);

CREATE TABLE Avoir(
   Id_Utilisateur INT,
   Id_Rôle INT,
   PRIMARY KEY(Id_Utilisateur, Id_Rôle),
   FOREIGN KEY(Id_Utilisateur) REFERENCES Utilisateur(Id_Utilisateur),
   FOREIGN KEY(Id_Rôle) REFERENCES Rôle(Id_Rôle)
);
