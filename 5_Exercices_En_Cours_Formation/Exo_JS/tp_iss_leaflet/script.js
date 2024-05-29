let zoom = 6;

const map = L.map("map").setView([0, 0], zoom);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let myIcon = L.icon({
	iconUrl: "./space-rocket-svgrepo-com.png",
	iconSize: [50, 50],
});

const marker = L.marker([0, 0], { icon: myIcon }).addTo(map);

let message1 = document.querySelector(".message1");
let message2 = document.querySelector(".message2");
let message3 = document.querySelector(".message3");

message1.addEventListener("click", () => {
	marker.bindPopup("Hello").openPopup();
});
message2.addEventListener("click", () => {
	marker.bindPopup("World").openPopup();
});
message3.addEventListener("click", () => {
	marker.bindPopup("ISS").openPopup();
});

async function iss() {
	let iss = await fetch("http://api.open-notify.org/iss-now.json");
	let data = await iss.json();
	marker.setLatLng([data.iss_position.latitude, data.iss_position.longitude]);
}

setInterval(iss, 200);
