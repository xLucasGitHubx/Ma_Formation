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
	main.style.display = "none";
	nav.style.display = "flex";
});
// hide the menu
crossButton.addEventListener("click", () => {
	main.style.display = "flex";
	nav.style.display = "none";
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
