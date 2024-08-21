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
	iconUser.src = "/Assets/Icons/user_icon_white.svg";
}

// Weird window size matters
if (window.innerWidth < window.innerHeight) {
	iconUser.src = "/Assets/Icons/user_icon_brown.svg";
	nav.style.display = "none";
}

window.addEventListener("resize", () => {
	if (window.innerWidth >= 641) {
		nav.style.display = "flex";
		main.style.display = "flex";
		iconUser.src = "/Assets/Icons/user_icon_white.svg";
	} else {
		main.style.display = "flex";
		nav.style.display = "none";
		iconUser.src = "/Assets/Icons/user_icon_brown.svg";
	}
	if (window.innerWidth < window.innerHeight) {
		iconUser.src = "/Assets/Icons/user_icon_brown.svg";
		nav.style.display = "none";
	}
});
