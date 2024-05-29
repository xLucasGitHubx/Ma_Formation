const monTxt = document.querySelector("input");
const rendu = document.querySelector(".copie");
if (monTxt.value) {
	rendu.innerText = localStorage.getItem("monSuperTexte");
}
monTxt.addEventListener("keyup", () => {
	localStorage.setItem("monSuperTexte", monTxt.value);
	rendu.innerText = monTxt.value;
});
