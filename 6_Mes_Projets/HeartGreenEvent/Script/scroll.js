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

		// If the element is in the viewport, add the "scroll" class and "already-shown" class
		if (elementInView(element)) {
			element.classList.add("scroll");
			element.classList.add("already-shown");
		}
		// Otherwise, the element is out of the viewport, remove the "scroll" class
		else if (elementOutofView(element) && !element.classList.contains("already-shown")) {
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
