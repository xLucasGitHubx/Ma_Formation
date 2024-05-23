const newNav = document.createElement("nav");
const newH1 = document.createElement("h1");
const body = document.querySelector("body");
const addClasse = document.createElement("a");
const suppClasse = document.createElement("a");
const toggleClasse = document.createElement("a");
const newDiv = document.createElement("div");
newH1.innerText = "D.O.M Events";
addClasse.innerText = "ajouter classe";
suppClasse.innerText = "supprimer classe";
toggleClasse.innerText = "toggle classe";

body.append(newDiv);
newDiv.append(newH1, newNav);
newNav.append(addClasse, suppClasse, toggleClasse);
newH1.style.textAlign = "center";
newNav.style.textAlign = "end";
newH1.addEventListener("click", (event) => {
	newH1.innerText = "--🥳--";
});

const allA = document.querySelectorAll("a");
for (let i = 0; i < allA.length; i++) {
	allA[i].style.margin = "1.5vw";
}

newDiv.style.background = "linear-gradient(90deg, rgba(255,164,233,1) 2%, rgba(255,211,113,0.9864320728291317) 76%)";

addClasse.addEventListener("click", (event) => {
	newH1.classList.add("green");
});
suppClasse.addEventListener("click", (event) => {
	newH1.classList.remove("green");
});
toggleClasse.addEventListener("click", (event) => {
	newH1.classList.toggle("green");
});

document.addEventListener("click", (e) => {
	console.log(e.clientX, e.clientY);
	const newImg = document.createElement("img");
	newImg.src = "https://picsum.photos/100";
	body.append(newImg);
	newImg.style.position = "absolute";
	newImg.style.zIndex = "100";
	newImg.style.top = `${e.clientY}px`;
	newImg.style.left = `${e.clientX}px`;
});

const newInput = document.createElement("input");
body.append(newInput);
newInput.addEventListener("focus", (e) => {
	newInput.style.background = "blue";
	newInput.style.color = "white";
});

newInput.addEventListener("blur", (e) => {
	newInput.style.background = "white";
	newInput.style.color = "black";
});

const allImg = document.querySelectorAll("img");
let arrayImg = [];

arrayImg = Array.from(allImg);
arrayImg.map((img, index) => {
	img.addEventListener("load", () => {
		console.log(`image numero ${index} - vient de finir de charger`);
	});
});
