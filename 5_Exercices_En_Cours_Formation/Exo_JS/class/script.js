class Employee {
	constructor(nom, prenom, age, salaire) {
		(this.nom = nom), (this.prenom = prenom), (this.age = age), (this.salaire = salaire);
	}
}
class pme {
	constructor(nom, equipe, revenu, FF, FA) {
		(this.nom = nom), (this.equipe = equipe), (this.revenu = revenu), (this.FF = FF), (this.FA = FA);
	}
	ci() {
		console.log(`${this.nom}: COUT INITIAL : ${this.FF + this.FA}`);
	}
	ct() {
		let coutTotal = 0;
		let n = 12;
		for (const a of this.equipe) {
			coutTotal += (a.salaire * 0.9 + a.salaire) * n;
		}
		console.log(`${this.nom}: Cout Total Equipe : ${coutTotal}`);
	}
	vente() {
		console.log(`${this.nom}: VENTES : ${this.revenu}`);
	}
	bilanCalculed() {
		let coutTotal = 0;
		let n = 12;
		for (const a of this.equipe) {
			coutTotal += (a.salaire * 0.9 + a.salaire) * n;
		}
		console.log(`${this.nom}: Bilan : ${this.revenu - coutTotal - (this.FF + this.FA)}`);
	}
}

// // Scénario
const Pme = new pme(
	//Le nom entreprise
	"Ma Petite Entreprise - ",
	//L'equipe de salariés (un tableau)
	[new Employee("Duval", "Paul", 30, 2000), new Employee("Durand", "Alain", 40, 3000), new Employee("Dois", "Sylvia", 50, 4000)],
	//le revenu , frais fixe, frais d'achat
	300000,
	20000,
	50000
);
Pme.ci();
Pme.ct();
Pme.vente();
Pme.bilanCalculed();
