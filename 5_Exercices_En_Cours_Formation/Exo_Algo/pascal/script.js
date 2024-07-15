// Sur la planète Erret, il existe un groupe de 13 stagiaires : Ael, Emixam, Leahpar, Lehcar, Nahoj, Niamor, Roinuj, Rotciv, Sacul, Saile, Tnemelc, Togram et Yerdua.
// Leur professeur, Nnaoy, pour les préparer aux oraux veut choisir 4 stagiaires au hasard pour les regrouper au centre de la salle sous les yeux de tous les autres et leur poser tout plein de questions, toutes plus difficiles les unes que les autres.
// Combien de groupes de 4 personnes peuvent ainsi être formés ?

// Pour répondre à cette question, on peut utiliser le triangle de Pascal ! Euh, le triangle de Lacsap !
// C'est un triangle qui contient la réponse que l'on cherche dans la case numéro 4 de la ligne numéro 13 !
// Il est très facile à construire :
//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1
// Et ainsi de suite
// Sur chaque ligne, il y a des 1 au bord, et au milieu, on fait la somme des cases juste au-dessus. Par exemple, si on voulait construire la ligne suivante :
// Elle commence par un 1
// Ensuite, on ajoute le 1 et le 4 de la ligne précédente : 5
// On ajoute le 4 et le 6 de la ligne précédente : 10
// Pareil jusqu'au bout de la ligne : 10, 5, 1
// Donc la ligne suivante, complète, sera : 1 5 10 10 5 1
//

// Représentation en js ;
// - Une ligne du triangle -> un tableau
// - Le triangle -> plusieurs lignes -> un tableau de tableaux
// [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]
// TODO: Créer un triangle suffisamment grand pour obtenir la réponse !

// Bonus : Maintenant qu'on a le triangle sous la main, on peut faire un petit dessin avec !
// Au lieu d'afficher les nombres, on va afficher "+" si le nombre est impair, et " " sinon. (Le r'voilà lui, avec ses histoires de parité)
// En affichant les 5 premières lignes du triangle, ça donnerait :
// +
// ++
// + +
// ++++
// +   +
function pascalTriangle(n) {
	let triangle = [[1]];

	for (let i = 1; i < n; i++) {
		let ligne = [1];
		for (let j = 1; j < i; j++) {
			ligne.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
		}

		ligne.push(1);
		triangle.push(ligne);
	}

	// Affichage du triangle de Pascal avec nombre
	for (let i = 0; i < triangle.length; i++) {
		console.log(triangle[i].join(","));
	}
}
pascalTriangle(32);

function pascalTriangleBis(n) {
	let triangle = [[1]];

	for (let i = 1; i < n; i++) {
		let ligne = [1];

		for (let j = 1; j < i; j++) {
			ligne.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
		}

		ligne.push(1);
		triangle.push(ligne);
	}

	// Affichage du triangle de Pascal avec "+" pour les nombres impairs et " " pour les nombres pairs
	for (let i = 0; i < triangle.length; i++) {
		let ligne = "";
		for (let j = 0; j < triangle[i].length; j++) {
			if (triangle[i][j] % 2 == 0) {
				ligne += " ";
			} else {
				ligne += "+";
			}
		}
		console.log(ligne);
	}
}
pascalTriangleBis(32);
