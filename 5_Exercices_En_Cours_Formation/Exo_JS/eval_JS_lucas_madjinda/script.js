const locs = [
	{ ville: "Paris", lat: 48.8592, long: 2.3417 },
	{ ville: "Toulouse", lat: 43.6043, long: 1.4437 },
	{ ville: "Lyon", lat: 45.7676, long: 4.8345 },
];

const aside = document.querySelector("aside");
const tabMarker = [];

const map = L.map("map").setView([47, 2], 6);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

displayMarker(locs);

function profil(objet) {
	let article = document.createElement("article");
	article.classList.add("card");
	let img = document.createElement("img");
	let h2 = document.createElement("h2");
	let p1 = document.createElement("p");
	let p2 = document.createElement("p");
	img.src = objet.picture.large;
	h2.innerText = `${objet.name.first} ${objet.name.last}`;
	p1.innerText = `${objet.gender} ${objet.dob.age} ans`;
	p2.innerText = objet.email;

	aside.append(article);
	article.append(img, h2, p1, p2);

	return article;
}

async function fetchProfilAndDisplay() {
	let rep = await fetch("https://randomuser.me/api/?results=3&inc=name,dob,email,gender,picture,nat&nat=fr");
	let data = await rep.json();

	for (let i = 0; i < data.results.length; i++) {
		displayProfil(data.results[i], i);
	}
}

function displayMarker(array) {
	for (let i = 0; i < array.length; i++) {
		const marker = L.marker([array[i].lat, array[i].long]).addTo(map);
		tabMarker.push(marker);
	}
}

function displayProfil(array, n) {
	const article = profil(array);

	article.addEventListener("mouseenter", () => {
		article.classList.add("card—hover");
	});
	article.addEventListener("mouseleave", () => {
		article.classList.remove("card—hover");
	});
	article.addEventListener("click", () => {
		tabMarker[n].bindPopup(`<img src="${article.firstChild.src}">`).openPopup();
	});
}

fetchProfilAndDisplay();
