const usersHuman = [
	{
		type: "humain",
		name: "John Doe",
		email: "j.smith@gmail.com",
		age: 25,
	},
	{
		type: "humain",
		name: "Jane Smith",
		email: "ja.doe@sfr.fr",
		age: 5,
	},
	{
		type: "humain",
		name: "Le Vénérable",
		email: "levy@gmail.com",
		age: 500,
	},
];

const usersPet = [
	{
		type: "animal de compagnie",
		espece: "chien",
		name: "Rox",
		age: 7,
		propriétaire: "John Doe",
	},
	{
		type: "animal de compagnie",
		espece: "renard",
		name: "Roukie",
		age: 300,
		propriétaire: "Le Vénérable",
	},
];

const usersXeno = [
	{
		type: "Xeno",
		espece: "Krogan",
		name: "Wrex",
		menace: "Rouge",
		age: 45,
	},
	{
		type: "Xeno",
		espece: "Turien",
		name: "Garrus",
		menace: "Vert",
		age: 35,
	},
	{
		type: "Xeno",
		espece: "Asari",
		name: "Liara",
		menace: "ULTRA Rouge",
		age: 25,
	},
];

const tabData = [];
tabData.push(usersHuman);
tabData.push(usersPet);
tabData.push(usersXeno);

function afficherHummain(objet) {
	console.log("nom :", objet.name);
	console.log("email :", objet.email);
	console.log("age :", objet.age);
}
// afficherHummain(usersHuman[0]);

function afficherAnimal(objet) {
	console.log("nom :", objet.name);
	console.log("espece :", objet.espece);
	console.log("age :", objet.age);
	console.log("propriétaire :", objet.propriétaire);
}
// afficherAnimal(usersPet[0]);

function afficherXeno(objet) {
	console.log("nom :", objet.name);
	console.log("espece :", objet.espece);
	console.log("age :", objet.age);
	console.log("niveau de menace :", objet.menace);
}
// afficherXeno(usersXeno[0]);

function profil(arrayObject) {
	for (const a of arrayObject) {
		if (a.type == "humain") {
			afficherHummain(a);
		} else if (a.type == "animal de compagnie") {
			afficherAnimal(a);
		} else if (a.type == "Xeno") {
			afficherXeno(a);
		} else {
			console.log("Type de Profil non Existant");
			console.log(a);
		}
	}
}

// profil(usersHuman);
// profil(usersPet);
// profil(usersXeno);

function profilAll(bigArray) {
	for (let i = 0; i < bigArray.length; i++) {
		profil(bigArray[i]);
	}
}
profilAll(tabData);
