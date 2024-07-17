// Hamburger Menu
// Initial state
const main = document.querySelector("main");
const nav = document.querySelector(".navLiens");
const hamburgerIcon = document.querySelector(".hamburgerIcon");
const crossButton = document.querySelector(".crossButton");
nav.style.display = "none";

// Behavior and logic of the Hamburger menu
// Show the menu
hamburgerIcon.addEventListener("click", () => {
	// Hide the main content after 500ms
	setTimeout(() => {
		main.style.display = "none";
	}, 500);
	// Show the navigation menu
	nav.style.display = "flex";
	nav.style.animation = "slideInMobile 0.5s forwards";
});

// Hide the menu
crossButton.addEventListener("click", () => {
	// Show the main content
	main.style.display = "flex";
	nav.style.animation = "slideOutMobile 0.5s forwards";
	// Hide the navigation menu after 500ms
	setTimeout(() => {
		nav.style.display = "none";
	}, 500);
});

// Nav desktop display by default
const iconUser = document.querySelector("#iconUtilisateur");
if (window.innerWidth >= 641) {
	nav.style.display = "flex";
	iconUser.src = "../Icons/user_icon_white.svg";
}

// Weird window size matters
if (window.innerWidth < window.innerHeight) {
	iconUser.src = "../Icons/user_icon_brown.svg";
	nav.style.display = "none";
}

window.addEventListener("resize", () => {
	if (window.innerWidth >= 641) {
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

// Find all elements to apply scroll effect
let scrollElements = document.querySelectorAll(
	"main div, main img, main p, main.nousContacter, main h1, label, input, textarea, button, main a, #connexion"
);

// Check if an element is in the visible area of the page (viewport)
function elementInView(element) {
	// Get the top position of the element relative to the viewport
	let elementTop = element.getBoundingClientRect().top;

	// Get the height of the viewport
	let viewportHeight = window.innerHeight;

	// If the top position of the element is less than or equal to the viewport height divided by "dividend", then the element is in the viewport
	if (elementTop < viewportHeight) {
		return true;
	} else {
		return false;
	}
}

// Check if an element is out of the visible area of the page (viewport)
function elementOutofView(element) {
	// Get the top position of the element relative to the viewport
	let elementTop = element.getBoundingClientRect().top;

	// Get the height of the viewport
	let viewportHeight = window.innerHeight;

	// If the top position of the element is greater than the viewport height, then the element is out of the viewport
	if (elementTop > viewportHeight) {
		return true;
	} else {
		return false;
	}
}

// Handle scroll animation by iterating through all selected elements and checking if they are in the viewport
function handleScrollAnimation() {
	for (let i = 0; i < scrollElements.length; i++) {
		let element = scrollElements[i];

		// If the element is in the viewport, add the "scroll" class
		if (elementInView(element)) {
			element.classList.add("scroll");
		}
		// Otherwise, the element is out of the viewport, remove the "scroll" class
		else if (elementOutofView(element)) {
			element.classList.remove("scroll");
		}
	}
}

// Call the handleScrollAnimation function whenever the "scroll" event is triggered
window.addEventListener("scroll", function () {
	handleScrollAnimation();
});

// Call the handleScrollAnimation function once the "DOMContentLoaded" event is triggered
window.addEventListener("load", function () {
	handleScrollAnimation();
});
