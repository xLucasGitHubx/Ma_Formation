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
let scrollElements = document.querySelectorAll("main div,main img,main p,main .nousContacter,main h1,label,input,textarea,button,main a,#connexion");
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

// ------calendrier-------

const daysTag = document.querySelector(".days");
const currentDate = document.querySelector(".date-actuel");
const prevNextIcon = document.querySelectorAll("#suivant,#precedant");

// getting new date, current year and month
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
// storing full name of all months in array
const months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];

function renderCalendar() {
	let firstDayofMonth = new Date(currYear, currMonth, 0).getDay(); // getting first day of month
	let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // getting last date of month
	let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); // getting last day of month
	let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
	let liTag = "";
	let isToday = "";
	for (let i = firstDayofMonth; i >= 1; i--) {
		// creating li of previous month last days
		liTag += `<li class="inactive">${lastDateofLastMonth - i}</li>`;
	}

	for (let i = 1; i <= lastDateofMonth; i++) {
		// creating li of all days of current month
		// adding active class to li if the current day, month, and year matched
		// let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "currentDay" : "";

		if (i == date.getDate() && currMonth == new Date().getMonth() && currYear == new Date().getFullYear()) {
			isToday = "currentDay";
		} else {
			isToday = "";
		}

		liTag += `<li class="${isToday}">${i}</li>`;
	}

	for (let i = lastDayofMonth; i < 7; i++) {
		// creating li of next month first days
		liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
	}
	currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
	daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach((icon) => {
	// getting prev and next icons
	icon.addEventListener("click", () => {
		// adding click event on both icons
		// if clicked icon is previous icon then decrement current month by 1 else increment it by 1
		if (icon.id == "precedant") {
			currMonth--;
		} else {
			// it means we click on #suivant
			currMonth++;
		}

		if (currMonth < 0 || currMonth > 11) {
			// if current month is less than 0 or greater than 11
			// creating a new date of current year & month and pass it as date value
			date = new Date(currYear, currMonth, new Date().getDate());
			currYear = date.getFullYear(); // updating current year with new date year
			currMonth = date.getMonth(); // updating current month with new date month
		} else {
			date = new Date(); // pass the current date as date value
		}
		renderCalendar(); // calling renderCalendar function
	});
});

document.addEventListener("click", () => {
	const allDay = document.querySelectorAll(".days li");
	for (let i = 0; i < allDay.length; i++) {
		allDay[i].addEventListener("click", () => {
			for (let j = 0; j < allDay.length; j++) {
				allDay[j].classList.remove("dateCliquer");
			}
			allDay[i].classList.add("dateCliquer");
		});
	}
});
