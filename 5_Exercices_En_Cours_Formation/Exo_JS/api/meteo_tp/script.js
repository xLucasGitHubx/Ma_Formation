/*C'est là que vous allez mettre votre code JS*/
let info = document.createElement("div");
const cardMeteo = document.querySelector(".cardMeteo");
const newButton = document.querySelector("button");
info.style.height = "300px";
info.style.width = "200px";
info.style.margin = "16px 0 16px 0";
info.style.border = "3px solid gray";
info.style.padding = "16px 12px 24px 12px";
cardMeteo.append(info);

function addInfo(text) {
	info.innerText = text;
}

function button(n) {
	n.classList.add("button__cardMeteo");
	n.classList.remove("button");
}

newButton.addEventListener("mousedown", () => {
	newButton.style.background = "orange";
});
document.addEventListener("mouseup", () => {
	newButton.style.background = "cornflowerblue";
});

newButton.addEventListener("click", () => {
	async function meteo() {
		let meteo = await fetch("https://prevision-meteo.ch/services/json/toulouse");
		let data = await meteo.json();
		console.log(data.current_condition.condition);
		console.log(data.current_condition.tmp);
		console.log(data.fcst_day_0.tmax);
		console.log(data.fcst_day_0.tmin);
		addInfo(`
        Le temp est ${data.current_condition.condition}
        
        La température est de ${data.current_condition.tmp}°C
        
        Les maximales sont à${data.fcst_day_0.tmax}°C
        
        Les minimales sont à${data.fcst_day_0.tmin}°C
        `);
	}

	meteo();
	button(newButton);
});
