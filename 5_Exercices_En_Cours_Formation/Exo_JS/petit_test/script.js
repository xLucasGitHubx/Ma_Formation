const cardName = [
	"Thor, le porteur de Mjolnir",
	"Odin, le père de tous",
	"Loki, le menteur et le tricheur",
	"Balder, l'étincellant",
	"Heimdall, le gardien du Bifrost",
	"Jupiter, le seigneur des Dieux",
	"Mars, le massacreur",
	"Mercure, le messager ailé",
	"Neptune, le tumulteux",
	"Pluton, le faucheur",
	"Horus, l'oeil vigilant",
	"Amon-Ra, le haut régnant",
	"Set, le gardien des secrets",
	"Bast, la protectrice du foyer",
	"Anubis, le passeur et grand juge",
];

const cardType = ["Ciel", "Mer", "Feu", "Mort", "Pouvoir", "Savoir", "Gardien"];

/*
METTEZ VOTRE SCRIPT EN DESSOUS
*/

function randomX(number) {
	return Math.floor(Math.random() * number);
}
console.log(randomX(10));
