/*
 "J'ai bien lu les consignes" 
Examen d'algorithmique
FADDEV31-21-02
8 novembre 2021
Nom :
Prénom :
*/

/**********************
Les différents concepts
**********************/

// Question 1

/*
Une variable, est une donnée qui va être stocker dans une case mémoire de l'ordinateur et qui est manipulable.
*/

// Question 2
// une déclaration permet de dire qu'une variable existe même si elle na aucune donnée stocker à l'intérieur. le mot clé est "let" ex: let variable;

// Question 3
// elle sert a éffectuer une affectation

// Question 4
// let a = 5;
// let b = a*2;
// console.log(a+b);

// Question 5
// let a = 4;
// let b = 5;
// let c;
// c=a;
// a=b;
// b=c;
// Question 6
// une boucle est une fonctionnalité qui permet d'éxcuter du code en boucle tant que une condition est vraie par exemple si je fais une squat a chaque passage dans la boucle et lorsque j'arrive à 50 j'arrête
// Question 7

// for(let i = 0; i<27; i++){
//     console.log("il ne faut pas tricher");
// }
// Question 8
// il va afficher
// j'ajoute -3
// j'ajoute-1
// j'ajoute 1
// j'ajoute 3
// au final à vaut 7
// Question 9
// let a = 1;
// let b = 7;
// while (a != 4 && b != 10) {
// 	console.log(a, "et", b);
// 	b++;
// 	if (b == 10) {
// 		b = 7;
// 		a++;
// 	}
// }

// Question 10
// c'est une condition qui permet d'éxuctér du code si une condition est vrai
// Question 11
// let c = 42;
// if (c > 20) {
// 	console.log("c'est plus grand");
// } else if (c == 20) {
// 	console.log("20 tout pile!");
// } else {
// 	console.log("c'est petit");
// }
// Question 12
// Une fonction est une machine à excécuter du code lorsque on n'appuie sur son bouton go. il peut arriver que cette machine à besoin de données en entrée quand on la lance c'est des argumet
// Elle va donc effectuer une action dont on connais pas forcément le contenu est nous retourner un résultat.
// Question 13
// quand on a utiliser le module turtle en js on a utiliser des fonctions.
// Question 14
// ici on définit la fonction entre{} mais on ne l'utilise par car on ne la pas appeler.
// Question 15
// elle vaut 14
// Question 16
// aquali(1,1,1) 1+2*1+3*1 = 6
// aquali(2,2,2) 2+2*2+3*2 = 12
// aquali(3,3,3) 3+2*3+3*3 = 18
// aquali(aquali(1,1,1),aquali(2,2,2),aquali(3,3,3)) 6+2*12+3*18 =84
// Question 17
function f1(n) {
	return -n;
}
// Question 18
function f2(n1, n2) {
	return f1(f1(n1) + f1(n2));
}
// Question 19
// un tableau est une grille de 1 ligne avec un certain nombre de colonne chaque case de se tableau est une position précise du tableau et à l'intérieur de chaqune de c'est case on peut y stocker une information donnér
// Question 20
// let t=[1,2,3,4,5,6,7,8,9,10];
// Question 21
// t[9];
// Question 22
// t[2];
// Question 23
// t.pop();
// Question 24
// console.log(t.length);
// Question 25
// for( let i = 0; i< t.length; i++){
//     console.log(t[i]);
// }

/****************************
TP1 - Les jours de la semaine
****************************/

// Question 26
let week = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

// Question 27
// on va utiliser l'index du mot dans le tableau ainsi avec sa position on saura de quel jour on parle;
// exemple week[2] correspond à mercredi car le premier élément correspond à l'index 0;

// Question 28
function nameOfDay(j) {
	return week[j];
}
console.log("Question 28", nameOfDay(3));

// Question 29
// 2010 n'est pas bissextile car elle n'est ni multiple de 400 ni de 4
// 2021 n'est pas  bissextile car elle n'est pas multiple de 400 ni de 4
// Question 30
function isLeapYear(n) {
	if (n % 400 == 0) {
		return true;
	} else if (n % 4 == 0 && n % 100 != 0) {
		return true;
	} else {
		return false;
	}
}
console.log("Question 30-1", isLeapYear(2021));
console.log("Question 30-2", isLeapYear(2020));
console.log("Question 30-3", isLeapYear(2000));
console.log("Question 30-4", isLeapYear(1900));

// Question 31
function nbOfDaysBetweenYears(plusPetiteY, plusGrandeY) {
	let day = 0;
	for (let year = plusPetiteY; year <= plusGrandeY; year++) {
		if (isLeapYear(year)) {
			day += 366;
		} else {
			day += 365;
		}
	}
	return day;
}
console.log("Question 31-1", nbOfDaysBetweenYears(2021, 2021));
console.log("Question 31-2", nbOfDaysBetweenYears(2020, 2021));
console.log("Question 31-3", nbOfDaysBetweenYears(2000, 2021));

// Question 32
function nbOfDaysInYear(y) {
	let array = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	if (isLeapYear(y)) {
		array[1] = 29;
	}
	return array;
}
console.log("Question 32", nbOfDaysInYear(2021));

// Question 33
function numOfMonth(month) {
	let array = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
	for (let i = 0; i < array.length; i++) {
		if (array[i] == month) {
			return i;
		}
	}
}
console.log("Question 33", numOfMonth("novembre"));

// Question 34
// il c'est écoule 10mois

// Question 35
/*
let count = 0;
for (let i = 0; i < numOfMonth("novembre"); i++) {
	count += nbOfDaysInYear(2021)[i];
}
count - 22;
console.log(count);
*/
// Question 36
function nbOfDaysSinceNewYear(n, mot, date) {
	let count = 0;
	for (let i = 0; i < numOfMonth(mot); i++) {
		count += nbOfDaysInYear(date)[i];
	}
	count += n;
	return count;
}
console.log("Question 36", nbOfDaysSinceNewYear(8, "novembre", 2021));

// Question 37
console.log(nbOfDaysSinceNewYear(23, "juin", 1912));
console.log(nbOfDaysBetweenYears(1912, 2020));
console.log(nbOfDaysSinceNewYear(8, "novembre", 2021));
// Question 38
//39950+1 pour 23juin qui saute
// Question 39

for (let i = 0; i < nbOfDaysSinceNewYear(23, "juin", 1912) - nbOfDaysBetweenYears(1912, 2020) + nbOfDaysSinceNewYear(8, "novembre", 2021) + 1; i++) {
	if (i % 7 == 0) {
		console.log("on est dimache");
	} else if (i % 7 == 1) {
		console.log("on est lundi");
	} else if (i % 7 == 2) {
		console.log("on est mardi");
	} else if (i % 7 == 3) {
		console.log("on est mercredi");
	} else if (i % 7 == 4) {
		console.log("on est jeudi");
	} else if (i % 7 == 5) {
		console.log("on est vendredi");
	} else {
		console.log("on est samedi");
	}
}

// Question 40
function dayOfTheWeek() {}
console.log("Question 40", dayOfTheWeek(8, "novembre", 2021));

/*********************
TP2 - Le jeu de la vie
*********************/

// Question 41

// Question 42

// Question 43

// Question 44

// Question 45

// Question 46

// Question 47
function lineToString() {}

// Question 48
function displayGrid() {}

// Question 49
function createEmptyArray() {}

// Question 50
function createEmptyGrid() {}

// Question 51
function evolution() {}

// Question 52

// Question 53
function drawGrid() {}

// Question 54
