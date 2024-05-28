const h1 = document.querySelector("h1");
const body = document.querySelector("body");

setTimeout(() => {
	h1.style.display = "block";
	h1.style.background = "red";
}, 3000);

// Dans une page HTML, créer une div qui a une hauteur de 150px, une largeur de 300px et une couleur de fond bleu
// Dans le Javascript : faite en sorte que la div suive le mouvement de la souris (event mousemove,  il faudra modifier les coordonnés de la div en fonction des coordonnés de l'event)
// Faire en sorte qu'au bout de 5 secondes, on supprime l'Event Listener (méthode removeEventListener())

let div = document.createElement("div");
div.style.height = "150px";
div.style.width = "300px";
div.style.background = "blue";
body.append(div);

function suiviSouris(e) {
	let mouseX = e.clientX;
	let mouseY = e.clientY;
	div.style.position = "absolute";
	div.style.top = `${mouseY}px`;
	div.style.left = `${mouseX}px`;
}

document.addEventListener("mousemove", suiviSouris);

setTimeout(() => {
	document.removeEventListener("mousemove", suiviSouris);
}, 5000);
