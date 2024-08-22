CREATE DATABASE HGE;
USE HGE;

CREATE TABLE Utilisateur(
   Id_Utilisateur INT PRIMARY KEY AUTO_INCREMENT,
   Nom VARCHAR(50) NOT NULL,
   Prénom VARCHAR(50) NOT NULL,
   Email VARCHAR(100) NOT NULL UNIQUE,
   mdp VARCHAR(150) NOT NULL
);

CREATE TABLE Rôle(
   Id_Rôle INT PRIMARY KEY AUTO_INCREMENT,
   role VARCHAR(50) NOT NULL
);

CREATE TABLE Historique_de_connexion(
   Id_Historique_de_connexion INT PRIMARY KEY AUTO_INCREMENT,
   Date_de_connexion DATETIME NOT NULL,
   Adresse_IP VARCHAR(50) NOT NULL,
   Id_Utilisateur INT NOT NULL,
   FOREIGN KEY(Id_Utilisateur) REFERENCES Utilisateur(Id_Utilisateur)
);

CREATE TABLE Message(
   Id_Message INT PRIMARY KEY AUTO_INCREMENT,
   Contenu TEXT NOT NULL,
   date_envoi DATETIME NOT NULL,
   Id_Destinataire INT NOT NULL,
   Id_Expéditeur INT NOT NULL,
   FOREIGN KEY(Id_Destinataire) REFERENCES Utilisateur(Id_Utilisateur),
   FOREIGN KEY(Id_Expéditeur) REFERENCES Utilisateur(Id_Utilisateur)
);

CREATE TABLE Réalisation(
   Id_Réalisation INT PRIMARY KEY AUTO_INCREMENT,
   Titre VARCHAR(50) NOT NULL,
   Description TEXT NOT NULL,
   Video TEXT,
   Id_Utilisateur INT NOT NULL,
   FOREIGN KEY(Id_Utilisateur) REFERENCES Utilisateur(Id_Utilisateur)
);

CREATE TABLE Commentaire(
   Id_Commentaire INT PRIMARY KEY AUTO_INCREMENT,
   Contenu TEXT NOT NULL,
   date_création DATETIME NOT NULL,
   Id_Réalisation INT NOT NULL,
   Id_Utilisateur INT NOT NULL,
   FOREIGN KEY(Id_Réalisation) REFERENCES Réalisation(Id_Réalisation),
   FOREIGN KEY(Id_Utilisateur) REFERENCES Utilisateur(Id_Utilisateur)
);

CREATE TABLE Note(
   Id_Note INT PRIMARY KEY AUTO_INCREMENT,
   Valeur SMALLINT NOT NULL,
   date_création VARCHAR(50) NOT NULL,
   Id_Réalisation INT NOT NULL,
   Id_Utilisateur INT NOT NULL,
   FOREIGN KEY(Id_Réalisation) REFERENCES Réalisation(Id_Réalisation),
   FOREIGN KEY(Id_Utilisateur) REFERENCES Utilisateur(Id_Utilisateur)
);

CREATE TABLE Ville(
   Id_Ville INT PRIMARY KEY AUTO_INCREMENT,
   ville VARCHAR(200) NOT NULL
);

CREATE TABLE Code_postal(
   Id_Code_postal INT PRIMARY KEY AUTO_INCREMENT,
   code VARCHAR(25) NOT NULL
);

CREATE TABLE Pays(
   Id_Pays INT PRIMARY KEY AUTO_INCREMENT,
   pays VARCHAR(200) NOT NULL
);

CREATE TABLE Adresse(
   Id_Adresse INT PRIMARY KEY AUTO_INCREMENT,
   Rue VARCHAR(100) NOT NULL,
   Id_Ville INT NOT NULL,
   Id_Pays INT NOT NULL,
   Id_Code_postal INT NOT NULL,
   Id_Utilisateur INT NOT NULL,
   FOREIGN KEY(Id_Ville) REFERENCES Ville(Id_Ville),
   FOREIGN KEY(Id_Pays) REFERENCES Pays(Id_Pays),
   FOREIGN KEY(Id_Code_postal) REFERENCES Code_postal(Id_Code_postal),
   FOREIGN KEY(Id_Utilisateur) REFERENCES Utilisateur(Id_Utilisateur)
);

CREATE TABLE Avoir(
   Id_Utilisateur INT NOT NULL,
   Id_Rôle INT NOT NULL,
   PRIMARY KEY(Id_Utilisateur, Id_Rôle),
   FOREIGN KEY(Id_Utilisateur) REFERENCES Utilisateur(Id_Utilisateur),
   FOREIGN KEY(Id_Rôle) REFERENCES Rôle(Id_Rôle)
);
