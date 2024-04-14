// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function test(t) {
	console.log(t[t.length - 1]);
}
test([4, 45]);
// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function test2(t) {
	return t[t.length - 1];
}
console.log(test2([1, 2, 3]));
// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function test3(t) {
	t.sort((a, b) => a - b);
	return t[0];
}

function test3bis(t) {
	let a = t[0];
	for (let i = 1; i < t.length; i++) {
		if (a > t[i]) {
			a = t[i];
		}
	}
	return a;
}
console.log(test3bis([15, 2, 3, 7, 14]));
console.log(test3([14, 2, 3]));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function test4(t) {
	let a = t[0];
	for (let i = 1; i < t.length; i++) {
		if (a < t[i]) {
			a = t[i];
		}
	}
	return a;
}
console.log(test4([14, 2, 3, 7, 1]));
// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.
function test5(t) {
	let a = t[0];
	let b = t[0];
	for (let i = 0; i < t.length; i++) {
		// recupére le nombre le plus grand
		if (a < t[i + 1]) {
			a = t[i + 1];
		}
	}
	for (let i = 0; i < t.length; i++) {
		// ignore le nombre le plus grand et recupére le 2eme plus grand
		if (a == t[i]) {
			b = t[i + 1];
		} else if (b < t[i + 1]) {
			b = t[i + 1];
		}
	}

	return b;
}
console.log(test5([14, 2, 3, 7, 1]));

function deuxiemePlusGrand(t) {
	// retourne la 2eme plus grande valeur du tableau
	let a = t[0];
	let b = t[1];
	for (let i = 1; i < t.length; i++) {
		if (a < t[i]) {
			a = t[i];
		} else if (b < t[i]) {
			b = t[i];
		}
	}
	return b;
}

console.log(deuxiemePlusGrand([14, 10, 3, 7, 1]));
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function nombreFoisApparu(t, n) {
	let count = 0;
	for (let i = 0; i < t.length; i++) {
		if (t[i] == n) {
			count++;
		}
	}
	return count;
}

console.log(nombreFoisApparu([1, 1, 1, 1, 1], 1));
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
function existNumber(t, n) {
	let count;
	count = false;
	for (let i = 0; i < t.length; i++) {
		if (t[i] == n) {
			count = true;
		}
	}
	return count;
}
console.log(existNumber([7851, 144, 17272, 175785, 17578, 1], 144));

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?
function bonus_suite(t) {
	t.sort((a, b) => a + b); // tableau trié dans l'ordre décroissant on return la 2eme valeur
	return t[1];
}
console.log(bonus_suite([14, 10, 3, 7, 1]));

function binarySearch(t, x, debut, fin) {
	if (debut > fin) {
		return console.log(`le nombre ${x} n'existe pas dans le tableau`);
	}
	let mid = Math.floor((debut + fin) / 2);
	if (t[mid] == x) {
		return console.log(`le nombre ${x} existe dans le tableau`);
	} else if (t[mid] > x) {
		return binarySearch(t, x, debut, mid - 1);
	} else {
		return binarySearch(t, x, mid + 1, fin);
	}
}
let tab = tabEnPlusDix(7777);
binarySearch(tab, 70, 0, tab.length - 1);
// Créer un tableau qui contient [1,2,3,...,7777].

function tabAvecNElementCroissant(n) {
	let t = [];
	for (let i = 1; i <= n; i++) {
		t.push(i);
	}
	return t;
}

// console.log(tabAvecNElementCroissant(7777));

// Créer un tableau qui contient [10,20,30,...,77770].

function tabEnPlusDix(n) {
	let t = [];
	for (let i = 10; i <= n; i += 10) {
		t.push(i);
	}
	return t;
}
// console.log(tabEnPlusDix(7777));

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
function tabEnPlusCinq(n) {
	let t = [];
	for (let i = 5; i <= n; i += 5) {
		t.push(i);
	}
	return t;
}
console.log(tabEnPlusCinq(38885));
// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.

function supLastValue(t) {
	for (let i = 0; i < t.length; i++) {
		if (t[i] < 50) {
			t.pop(i);
		}
	}
	return t;
}

console.log(supLastValue([1, 45, 88, 54, 23, -100, 12]));
// doit afficher [1,45,88,54]
