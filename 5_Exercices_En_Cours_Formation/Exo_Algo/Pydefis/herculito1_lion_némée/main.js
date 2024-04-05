let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let god =
	"ARTEMIS ASCLEPIOS ATHENA ATLAS CHARON CHIRON CRONOS DEMETER EOS ERIS EROS GAIA HADES HECATE HEPHAISTOS HERA HERMES HESTIA HYGIE LETO MAIA METIS MNEMOSYNE NYX OCEANOS OURANOS PAN PERSEPHONE POSEIDON RHADAMANTHE SELENE THEMIS THETIS TRITON ZEUS ";

let sommelettre = 0;
let nom = "";
let objet = {
	name: "",
	somme: "",
};
let array = [];
let trie = "";
for (let i = 0; i < god.length; i++) {
	if (god[i] == " ") {
		// chaque espace de god
		objet.name = nom;
		objet.somme = sommelettre;
		// console.log(objet);
		// console.log("espace");
		array.push(objet);

		objet = {
			name: "",
			somme: "",
		};
		sommelettre = 0;
		nom = "";
	}
	for (let j = 0; j < alphabet.length; j++) {
		if (god[i] == alphabet[j]) {
			sommelettre += alphabet.indexOf(god[i]) + 1;
			nom += god[i];
			//    console.log(sommelettre);
		}
	}
}

function sortArray(a, b) {
	return a.somme - b.somme;
}
array.sort(sortArray);
console.log(array);

for (let i = 0; i < array.length; i++) {
	trie += array[i].name + " ";
}
console.log(trie);
