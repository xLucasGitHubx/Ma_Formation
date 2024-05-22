class CompteBancaire {
	constructor(nom, total = 0) {
		(this.nom = nom), (this.total = total);
	}
	crediter(n) {
		this.total += n;
		console.log(`Ajout de: ${this.total} pour: ${this.nom}`);
	}
	retrait(n) {
		if (this.total - n < 0) {
			console.log(`----->${this.nom}, retrait de: 1200 refuser avec ${this.total}`);
		} else {
			this.total -= n;
			console.log(`Retrait de: ${n} pour: ${this.nom}`);
		}
	}
	visualisation() {
		console.log(`titulaire: ${this.nom}, solde: ${this.total}`);
	}
	virement(n, nom) {
		this.total -= n;
		nom.total += n;
		console.log(`Virement de: ${n}: ${this.nom} vers: ${nom.nom}`);
	}
}

// Main, gère 3 comptes bancaires dans un tableau associatif
const lesComptes = {
	Alex: new CompteBancaire("Alex"),
	Clovis: new CompteBancaire("Clovis"),
	Marco: new CompteBancaire("Marco"),
};
// lecture tableau associatif ou Objet["truc"]
// Crédite et décrit chaque compte
for (let key in lesComptes) lesComptes[key].crediter(1000);
// un retrait de 100 par Alex
lesComptes.Alex.retrait(100);
// un petit virement: Marco Vire 300 à Clovis
lesComptes.Marco.virement(300, lesComptes.Clovis);
// un petit retrait incorrect (doit déclencher erreur custom) :
// Alex fait un retrait de 1200
lesComptes.Clovis.crediter(300);
lesComptes.Marco.retrait(300);
lesComptes.Alex.retrait(1200);
// bilan : faire une description de tous les comptes en console (ou DOM ?)
for (let key in lesComptes) lesComptes[key].visualisation();
