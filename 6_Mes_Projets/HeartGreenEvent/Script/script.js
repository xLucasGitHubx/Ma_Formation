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
	"main div, main img, main p, main .nousContacter, main h1, label, input, textarea, button, main a, #connexion"
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

let daysTag = document.querySelector(".days");
let currentDate = document.querySelector(".date-actuel");
let prevNextIcon = document.querySelectorAll("#suivant, #precedant");

// Create a new date with the current year and month
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

// Create an array with the full names of all months
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Function to render the calendar
function renderCalendar() {
	// Get the day of the week of the first day of the month (between 0 and 6)
	let firstDayofMonth = new Date(currYear, currMonth, 0).getDay();

	// Get the number of days in the month
	let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();

	// Get the day of the week of the last day of the month (between 0 and 6)
	let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();

	// Get the number of days in the previous month
	let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

	// Clear the daysTag element
	daysTag.innerHTML = "";

	// Loop to create the "li" elements for the last days of the previous month
	for (let i = firstDayofMonth; i >= 1; i--) {
		const li = document.createElement("li");
		li.className = "inactive";
		li.textContent = lastDateofLastMonth - i;
		daysTag.appendChild(li);
	}

	// Loop to create the "li" elements for all days of the current month
	for (let i = 1; i <= lastDateofMonth; i++) {
		const li = document.createElement("li");
		if (i == date.getDate() && currMonth == new Date().getMonth() && currYear == new Date().getFullYear()) {
			li.className = "currentDay";
		}
		li.textContent = i;
		daysTag.appendChild(li);
	}

	// Loop to create the "li" elements for the first days of the next month
	for (let i = lastDayofMonth; i < 7; i++) {
		const li = document.createElement("li");
		li.className = "inactive";
		li.textContent = i - lastDayofMonth + 1;
		daysTag.appendChild(li);
	}

	currentDate.innerText = `${months[currMonth]} ${currYear}`;
}

// Render the calendar
renderCalendar();

// Loop to add an event listener to each "prevNextIcon" button
for (const icon of prevNextIcon) {
	icon.addEventListener("click", function () {
		// Update the current month based on the button clicked
		currMonth += icon.id === "precedant" ? -1 : 1;

		// Update the current year if the current month is out of range
		if (currMonth < 0) {
			currMonth = 11;
			currYear--;
		} else if (currMonth > 11) {
			currMonth = 0;
			currYear++;
		}

		// Render the updated calendar
		renderCalendar();
	});
}

document.addEventListener("click", function () {
	const allDay = document.querySelectorAll(".days li");

	// Loop to add an event listener to each "li" element
	for (let i = 0; i < allDay.length; i++) {
		allDay[i].addEventListener("click", function () {
			// Loop to remove the "dateCliquer" class from all "li" elements
			for (let j = 0; j < allDay.length; j++) {
				allDay[j].classList.remove("dateCliquer");
			}

			// Add the "dateCliquer" class to the clicked "li" element
			allDay[i].classList.add("dateCliquer");
		});
	}
});
