let daysTag = document.querySelector(".days");
let currentDate = document.querySelector(".date-actuel");
let prevNextIcon = document.querySelectorAll("#suivant, #precedant");

// Create a new date with the current year and month
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

// Create an array with the full names of all months
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Functionto render the calendar
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
