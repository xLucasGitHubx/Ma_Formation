let evenement = document.querySelector(".evenement");
let discussion = document.querySelector(".discussion");
let h3 = document.querySelectorAll(".noSelectH3");

h3[0].addEventListener("click", () => {
	evenement.style.display = "none";
	discussion.style.display = "flex";
});
h3[1].addEventListener("click", () => {
	discussion.style.display = "none";
	evenement.style.display = "flex";
});
