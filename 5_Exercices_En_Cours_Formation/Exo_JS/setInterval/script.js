const div = document.querySelector("div");
let pos = 0;
let posY = 200;
let sens = 0;
let sens2 = 0;

function deplacementDiv() {
	if (sens == 0) {
		if (pos < 900) {
			pos += 50;
		} else {
			sens = 1;
		}
	} else if (sens == 1) {
		if (pos > 0) {
			pos -= 20;
		} else {
			sens = 0;
		}
	}

	div.style.left = `${pos}px`;
}
function deplacementDivY() {
	if (sens2 == 0) {
		if (posY < 900) {
			posY += 45;
		} else {
			sens2 = 1;
		}
	} else if (sens2 == 1) {
		if (posY > 0) {
			posY -= 60;
		} else {
			sens2 = 0;
		}
	}
	div.style.top = `${posY}px`;
}
const p = document.querySelector("p");
const h1 = document.querySelector("h1");
let n = 5;
let n2 = 0;
function compteur() {
	let compteur = setInterval(() => {
		p.innerText = n;
		n--;

		if (p.innerText == "0") {
			let ballX = setInterval(deplacementDiv, 20);
			let ballY = setInterval(deplacementDivY, 20);

			let compteur2 = setInterval(() => {
				p.innerText = n2;
				n2++;

				if (p.innerText == "10") {
					h1.style.display = "flex";
					h1.style.justifyContent = "center";
					h1.innerText = "Game Over!";
					clearInterval(ballX);
					clearInterval(ballY);
				}

				setTimeout(() => {
					clearInterval(compteur2);
				}, 10000);
			}, 1000);
		}

		setTimeout(() => {
			clearInterval(compteur);
		}, 5000);
	}, 1000);
}

// setInterval(deplacementDiv, 20);
// setInterval(deplacementDivY, 20);

compteur();
