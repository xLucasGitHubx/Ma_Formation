async function pokemon() {
	const body = document.querySelector("body");
	let pokemon = await fetch("https://pokeapi.co/api/v2/pokemon");
	let data = await pokemon.json();
	for (let i = 0; i < data.results.length; i++) {
		body.innerText += `
        ${data.results[i].name}
        `;
	}
}

pokemon();
