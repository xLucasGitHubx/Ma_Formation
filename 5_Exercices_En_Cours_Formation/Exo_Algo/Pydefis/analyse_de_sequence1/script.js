console.log("énigme sur l'analyse de sequence partie 1 avec pydéfis");
console.log("input de l'énigme : NDNKCNVNUGYWRGCNABGSNCRACGSHWNNCYBCSNVUAAGDCMNKNYNNBNCGUBHUNRANDGDMDRSYMGSNWHNDNCVCMAMCANWKYRKVMWMKC");
let chaineNucleique = "NDNKCNVNUGYWRGCNABGSNCRACGSHWNNCYBCSNVUAAGDCMNKNYNNBNCGUBHUNRANDGDMDRSYMGSNWHNDNCVCMAMCANWKYRKVMWMKC";
chaineNucleique = chaineNucleique.split("");
console.log(chaineNucleique);
let numberOfSeq = 1;
for (let i = 0; i < chaineNucleique.length; i++) {
	if (chaineNucleique[i] == "R") {
		numberOfSeq = numberOfSeq * 2;
	} else if (chaineNucleique[i] == "Y") {
		numberOfSeq = numberOfSeq * 2;
	} else if (chaineNucleique[i] == "K") {
		numberOfSeq = numberOfSeq * 2;
	} else if (chaineNucleique[i] == "M") {
		numberOfSeq = numberOfSeq * 2;
	} else if (chaineNucleique[i] == "S") {
		numberOfSeq = numberOfSeq * 2;
	} else if (chaineNucleique[i] == "W") {
		numberOfSeq = numberOfSeq * 2;
	} else if (chaineNucleique[i] == "B") {
		numberOfSeq = numberOfSeq * 3;
	} else if (chaineNucleique[i] == "D") {
		numberOfSeq = numberOfSeq * 3;
	} else if (chaineNucleique[i] == "H") {
		numberOfSeq = numberOfSeq * 3;
	} else if (chaineNucleique[i] == "V") {
		numberOfSeq = numberOfSeq * 3;
	} else if (chaineNucleique[i] == "N") {
		numberOfSeq = numberOfSeq * 4;
	}
}

console.log(numberOfSeq % 100000);
