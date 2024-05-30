const firebaseConfig = {
	apiKey: "AIzaSyA6y0CpIx1bLR1xtgWj92B5rVoRVCX4ZUQ",
	authDomain: "projet-dev-lucasm.firebaseapp.com",
	databaseURL: "https://projet-dev-lucasm-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "projet-dev-lucasm",
	storageBucket: "projet-dev-lucasm.appspot.com",
	messagingSenderId: "535612557210",
	appId: "1:535612557210:web:9e0232ac42a45b18569c23",
	measurementId: "G-XCPNWY1KP8",
};
//init de firebase
firebase.initializeApp(firebaseConfig);
//On va créer une référence à notre BDD
const dbRef = firebase.database().ref();
// On va également faire une ref directement dans le noeud(une table enft) / """"table""""" users
const usersRef = dbRef.child("users");

const monForm = document.querySelector("form");
const submit = document.querySelector("input[name='submit']");
const name = document.querySelector("input[name='name']");
const age = document.querySelector("input[name='age']");
const mail = document.querySelector("input[name='mail']");
const userListUI = document.getElementById("user-list");

//Event listener sur l'élément sublit pour envoyer les données à firebase
submit.addEventListener("click", (e) => {
	e.preventDefault();
	registerUser();
});

function registerUser() {
	const tabInput = document.querySelectorAll("input[type='text']");
	const newUser = {};
	for (let input of tabInput) {
		let key = input.getAttribute("name");
		let value = input.value;
		newUser[key] = value;
	}
	console.log(newUser);

	//ajouter utilisateur à la bdd dans le noeud "users" en pushant dans le href
	usersRef.push(newUser);
}

function readUserData() {
	usersRef.on("value", (snap) => {
		userListUI.innerHTML = "";
		snap.forEach((childSnap) => {
			let value = childSnap.val();
			let li = document.createElement("li");
			li.innerText = value.name;
			li.setAttribute("user-key", childSnap.key);

			li.addEventListener("click", userClicked(childSnap));

			userListUI.append(li);
		});
	});
}
readUserData();

function userClicked(event) {
	let userID = event.target.getAttribute("user-key");
	let userRef = dbRef.child("users/" + userID);
}
