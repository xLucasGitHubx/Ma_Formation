let icon = document.querySelector("#password");
let touchIcon = document.querySelector(".seeMdp");

touchIcon.addEventListener("click", () => {
	if (icon.type == "password") {
		icon.style.backgroundImage = "url('./Assets/Icons/eyes_see.svg')";
		icon.type = "text";
	} else {
		icon.style.backgroundImage = "url('./Assets/Icons/eyes_hide.svg')";
		icon.type = "password";
	}
});
