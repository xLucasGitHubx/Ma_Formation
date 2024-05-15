// TODO: Créer une fonction qui reçoit un tableau de 3 notes et qui calcule une moyenne
// entre ces 3 notes
// TODO: Dans cette ƒ°, SI la moyenne est supérieure ou égale à 15 on renvoi une string
// (très Bien)
// TODO: Dans cette ƒ°, SINON SI la moyenne est supérieure ou égale à 10 on renvoi une
// string (assez Bien)
// TODO: Dans cette ƒ°, SINON renvoi une string (refus)

function moyenne(n1, n2, n3) {if ((n1 + n2 + n3) / 3 > 15) {return "très bien";}return "refus";}console.log(moyenne(10, 16, 20));
