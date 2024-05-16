// / TODO :JS map phase 1
// TODO : côté template html rajouter plein de <p></p>
// TODO :On va récupérer TOUS les <p> de notre page dans une
// variable lesTxt via getElementsByTagName
// TODO :On va faire un console log de lesTxt

let lesTxt = document.getElementsByTagName("p");
console.log(lesTxt);

//TODO JS map Phase 2
//TODO Avec la methode Array.from(), dans une nouvelle variable
// textesTab on va transformer notre htmlCollection en array
//TODO On console log la variables textesTab
//* On transforme le HTMLCollection(qui contient tous nos <p>) en
// Array classique

let textesTab = Array.from(lesTxt);
console.log(textesTab);

//TODO JS Map Phase 3 (on peut travailler sur un Array)
//TODO Sur textesTab on va utiliser la ƒ° map(),
//TODO dans map(), on va lui passer en param une fonction fléchée
// qui elle a en parametre une variable temporaire
// (nom de la variable au choix)
//TODO cette fonction fléchée elle va modifier le innerText

textesTab.map((a) => {
	a.innerText = "Coucou";
});

// voici un tableau contenant des tableaux :
// [[1,2,3],[4,5,6],[7,8,9]]

// A l'aide de boucle, afficher la valeur de chaque case
// Cela doit donner :

let matrice = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

for (let i = 0; i < matrice.length; i++) {
	for (let j = 0; j < matrice[i].length; j++) {
		console.log(matrice[i][j]);
	}
}

for (const a of matrice) {
	for (const b of matrice) {
		console.log(matrice[a][b]);
	}
}
