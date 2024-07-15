// Créer une fonction qui reçoit un nombre en entrée et qui retourne un tableau de la taille demandée, ne contenant que des " ".

function whiteSpace(n) {
	let tab = [];
	for (let i = 0; i < n; i++) {
		tab.push(" ");
	}
	return tab;
}
// console.log(whiteSpace(5));

// Créer un tableau appelé ciel qui, initialement, ne contient que des lignes d'espaces. Chaque ligne sera de taille 10, et il y aura 7 lignes.
// Note : pour la suite de l'exercice, on peut utiliser ciel comme une variable globale, disponible dans les fonctions. Si vous souhaitez faire les choses plus proprement, vous pouvez l'ajouter aux arguments des fonctions !
let ciel = ["          ", "          ", "          ", "          ", "          ", "          ", "          "];
// Créer une fonction d'affichage du ciel (en créant une seule chaîne de caractères, avec le caractère "\n" pour aller à la ligne).
function displaySky() {
	return ciel.join("\n");
}
// console.log(displaySky());
// console.log(ciel[0].split(""));

// Créer une fonction explosion qui reçoit deux nombres en entrées et qui place dans le ciel une explosion de feu d'artifice. Cette explosion sera dessinée avec un "+" au milieu et des "-", "|" le long des quatres côtés.
function explosion(x, y, taille = 2) {
	let ligneMillieu = ciel[y].split("");
	ligneMillieu[x] = "+"; // centre

	for (let i = 1; i <= taille; i++) {
		if (y - i >= 0) {
			let ligneHaut = ciel[y - i].split("");
			ligneHaut[x] = "|"; // haut
			ciel[y - i] = ligneHaut.join("");
		}
		if (y + i < ciel.length) {
			let ligneBas = ciel[y + i].split("");
			ligneBas[x] = "|"; // bas
			ciel[y + i] = ligneBas.join("");
		}
		if (x - i >= 0) {
			ligneMillieu[x - i] = "-"; // gauche
			ciel[y] = ligneMillieu.join("");
		}
		if (x + i < ligneMillieu.length) {
			ligneMillieu[x + i] = "-"; // droite
			ciel[y] = ligneMillieu.join("");
		}
	}
}

explosion(1, 1);
explosion(3, 3);
explosion(5, 3);
explosion(7, 5);
explosion(9, 3);

console.log(displaySky());
// console.log(ciel);
// Exemple :
// [
// 	[" "," "," "," "," "," "," "," "," "," "],
// 	[" "," "," ","|"," "," "," "," "," "," "],
// 	[" "," "," ","|"," "," "," "," "," "," "],
// 	[" ","-","-","+","-","-"," "," "," "," "],
// 	[" "," "," ","|"," "," "," "," "," "," "],
// 	[" "," "," ","|"," "," "," "," "," "," "],
// 	[" "," "," "," "," "," "," "," "," "," "]
// ]
// Affichage correspondant (en mettant tout bout à bout) :
//
//   |
//   |
// --+--
//   |
//   |
// Variante bonus : ajouter un autre argument à la fonction pour pouvoir changer la taille de l'explosion !

// En (re)partant d'un ciel vide de taille 10x7, ajouter des étoiles en :
// (1,1)
// (3,3)
// (5,3)
// (7,5)
// (9,3)
// Comptez (pas à la main !) combien il reste de caractère espace dans le ciel. Vous devriez en avoir 39.

let espaces = 0;
for (let i = 0; i < ciel.length; i++) {
	let ligne = ciel[i];
	for (let j = 0; j < ligne.length; j++) {
		if (ligne[j] === " ") {
			espaces++;
		}
	}
}

console.log("Nombre espace dans le ciel:", espaces);
