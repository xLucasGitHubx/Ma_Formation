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
