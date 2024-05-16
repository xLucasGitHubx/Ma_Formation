//TODO: Créer 1 variable pour un nom,
//TODO: Créer une variable pour un âge,
//TODO: Créer une variable passions qui est un tableau qui contient 2 chaînes de
// caractères (au choix)
//TODO: Puis créer une variable tabUser qui est un tableau qui contient les variable du
// nom, de l'âge et passions
//TODO: en Console on affiche le tabUser
//TODO : en passant par tabUser on veut afficher en console uniquement les passions
//TODO : en passant par tabUser on veut afficher en console uniquement la 2ème passion

// / TODO : Reprendre l'exercice 2 (⁠javascript⁠) en mode objet
// (un objet user avec des propriétés pour le nom age et passions
// qui est lui aussi un objet avec 2 propriétés

let moi = {
	nom: "lucas",
	age: 21,
	passion: [
		{
			hobbies: "escalade",
		},
		{
			hobbies: "plonger",
		},
	],
};

console.log(moi);
console.log(moi.passion[1].hobbies);
let array = [1, 2, 3];
let test = (element) => {
	console.log(element);
};
array.forEach(test);
