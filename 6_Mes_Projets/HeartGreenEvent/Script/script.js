// Hamburger Menu
// Initial state
const main = document.querySelector("main");
const nav = document.querySelector(".navLiens");
const hamburgerIcon = document.querySelector(".hamburgerIcon");
const crossButton = document.querySelector(".crossButton");
nav.style.display = "none";
// behavior and logic of the Hamburger menu
// show the menu
hamburgerIcon.addEventListener("click", () => {
	setTimeout(() => {
		main.style.display = "none";
	}, 500);
	nav.style.display = "flex";
	nav.style.animation = "slideInMobile 0.5s forwards";
});
// hide the menu
crossButton.addEventListener("click", () => {
	main.style.display = "flex";
	nav.style.animation = "slideOutMobile 0.5s forwards";
	setTimeout(() => {
		nav.style.display = "none";
	}, 500);
});
// nav desktop par default display
const iconUser = document.querySelector("#iconUtilisateur");
if (window.innerWidth >= "641") {
	nav.style.display = "flex";
	iconUser.src = "../Icons/user_icon_white.svg";
}
// weird windows size matters
if (window.innerWidth < window.innerHeight) {
	iconUser.src = "../Icons/user_icon_brown.svg";
	nav.style.display = "none";
}

window.addEventListener("resize", () => {
	if (window.innerWidth >= "641") {
		nav.style.display = "flex";
		main.style.display = "flex";

		iconUser.src = "../Icons/user_icon_white.svg";
	} else {
		main.style.display = "flex";

		nav.style.display = "none";
		iconUser.src = "../Icons/user_icon_brown.svg";
	}
	if (window.innerWidth < window.innerHeight) {
		iconUser.src = "../Icons/user_icon_brown.svg";
		nav.style.display = "none";
	}
});

// --------------------------------------------------------------------------

// Trouve tous les éléments à laquel je veux appliquer mon effet de scroll
let scrollElements = document.querySelectorAll("main div,main img,main p,main .nousContacter,main h1,label,input,textarea,button,main a");
// Vérifie si un élément est dans la zone visible de la page (viewport)
function elementInView(element) {
	// Trouve la position du haut de l'élément par rapport à la zone visible
	let elementTop = element.getBoundingClientRect().top;

	// Trouve la hauteur de la zone visible
	let viewportHeight = window.innerHeight;

	// Si la position du haut de l'élément est inférieure ou égale à la hauteur de la zone visible divisée par "dividend", alors l'élément est dans la zone visible
	if (elementTop < viewportHeight) {
		return true;
	} else {
		return false;
	}
}

// Vérifie si un élément est en dehors de la zone visible de la page (viewport)
function elementOutofView(element) {
	// Trouve la position du haut de l'élément par rapport à la zone visible
	let elementTop = element.getBoundingClientRect().top;

	// Trouve la hauteur de la zone visible
	let viewportHeight = window.innerHeight;

	// Si la position du haut de l'élément est supérieure à la hauteur de la zone visible, alors l'élément est en dehors de la zone visible
	if (elementTop > viewportHeight) {
		return true;
	} else {
		return false;
	}
}

// Gère l'animation de défilement en parcourant tous les éléments sélectionnés et en vérifiant s'ils sont dans la zone visible
function handleScrollAnimation() {
	for (let i = 0; i < scrollElements.length; i++) {
		let element = scrollElements[i];

		// Si l'élément est dans la zone visible, ajoute la classe "scroll"
		if (elementInView(element)) {
			element.classList.add("scroll");
		}
		// Sinon l'élément est en dehors de la zone visible, supprime la classe "scroll"
		else if (elementOutofView(element)) {
			element.classList.remove("scroll");
		}
	}
}

// Appelle la fonction handleScrollAnimation chaque fois que l'événement "scroll" est déclenché
window.addEventListener("scroll", function () {
	handleScrollAnimation();
});

// Appelle la fonction handleScrollAnimation une fois que l'événement "DOMContentLoaded" est déclenché
window.addEventListener("load", function () {
	handleScrollAnimation();
});
