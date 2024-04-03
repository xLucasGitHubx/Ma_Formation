/*
// exo A1
// init
setPos(300,300);
faceDown();
changeColor(color.red);
setLineWidth(10);
// mouvement
forward(200);
faceRight();
forward(100);


// exo A2
// init
setPos(300,300);
faceLeft();
changeColor(color.yellow);
setLineWidth(10);
// mouvement
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);

// exo A3
// init
setPos(300,300);
faceLeft();
changeColor(color.red);
setLineWidth(10);
// mouvement
forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceUp();
forward(100);
faceDown();
forward(200);

// exo A4
// init
setPos(200,500);
faceRight();
changeColor(color.green);
setLineWidth(10);
// mouvement
forward(200);
arcLeft(100,180);
forward(100);
arcRight(100,180);
forward(200);

// exo A5
// init
setPos(300,500);
faceRight();
changeColor(color.fuchsia);
setLineWidth(10);
// mouvement
arcLeft(200,180);
arcLeft(200,180);
arcLeft(100,180);
arcRight(100,180);

// exo A6
// init
setPos(300,500);
faceUp();
changeColor(color.blue);
setLineWidth(10);
// mouvement
forward(100);
up();
forward(100);
down();
forward(200);

// exo A7
// init
setPos(400,300);
faceUp();
changeColor(color.green);
setLineWidth(10);
// mouvement
forward(200);
arcLeft(100,180);
forward(100);
up();
forward(100);
down();
forward(200);
arcLeft(100,180);
forward(100);

// exo A8
// init
setPos(300,300);
faceUp();
changeColor(color.fuchsia);
setLineWidth(10);
// mouvement
forward(50);
faceRight();
forward(100);
faceDown();
forward(200);
faceLeft();
forward(50);
up();
forward(50);
faceUp();
forward(50);
down();
forward(50);

// exo A9
// init
setPos(250,500);
faceRight();
changeColor(color.blue);
setLineWidth(10);
// mouvement
forward(200);
faceLeft();
arcRight(50,180);
arcLeft(50,180);
forward(200);
arcLeft(50,180);
arcRight(50,180);


// exo A10
// init
setPos(300,300);
faceRight();
changeColor(color.red);
setLineWidth(10);
// mouvement
arcLeft(50,180);
changeColor(color.green);
arcLeft(100,180);
changeColor(color.yellow);
arcLeft(200,180);


// exo A11
// init
setPos(200,320);
faceUp();
changeColor(color.blue);
setLineWidth(10);
// mouvement
arcRight(50,180);
faceRight();
up();
forward(50);
down();
faceUp();
arcRight(50,180);
up();
forward(50);
faceLeft();
forward(25);
faceDown();
down();
changeColor(color.fuchsia);
arcRight(100,180);

// exo A12
// init
setPos(100,200);
faceUp();
changeColor(color.green);
setLineWidth(10);
// mouvement
arcRight(50,180);
forward(100);
arcLeft(50,180);
changeColor(color.red);
up();
faceRight();
forward(50);
faceDown();
down();
arcLeft(50,180);
forward(100);
arcRight(50,180);


// exo B1
// init
setPos(100,200);
faceRight();
changeColor(color.green);
setLineWidth(10);
// mouvement
for(let i=0; i<4;i++){
    forward(50);
    faceDown();
    forward(50);
    faceRight();
}


// exo B2
// init
setPos(100,200);
faceUp();
changeColor(color.red);
setLineWidth(10);
// mouvement
for(let i=0; i<4;i++){
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
    faceUp();
}


// exo B3
// init
setPos(100,200);
faceRight();
changeColor(color.fuchsia);
setLineWidth(10);
// mouvement
for(let i=0; i<4;i++){
    forward(50);
    right(90);
}

// exo B4
// init
setPos(100,200);
faceRight();
changeColor(color.blue);
setLineWidth(10);
// mouvement
for(let i=0; i<3;i++){
    forward(100);
    left(120);
}


// exo B5
// init
setPos(100,200);
faceUp();
changeColor(color.aqua);
setLineWidth(10);
// mouvement
forward(100);
changeColor(color.red);
for(let i=0; i<3;i++){
    forward(50);
    right(120);
}

// exo B6
// init
setPos(100,200);
faceRight();
changeColor(color.red);
setLineWidth(10);
// mouvement
for(let i=0; i<2;i++){
    forward(50);
    faceUp();
    forward(50);
    faceRight();
}
changeColor(color.green);
for(let i=0; i<3;i++){
    forward(50);
    faceDown();
    forward(50);
    faceRight();
}


// exo B7
// init
setPos(200,300);
faceRight();
changeColor(color.red);
setLineWidth(10);
// mouvement
for(let i=0; i<3;i++){
    forward(100);
    left(120);
}
for(let i=0; i<4;i++){
    forward(100);
    right(90);
}


// exo B8
// init
setPos(200,300);
faceRight();
changeColor(color.yellow);
setLineWidth(10);
// mouvement
for(let i=0; i<9;i++){
    forward(200);
    right(135);
}


// exo B9
// init
setPos(200,300);
faceRight();
changeColor(color.fuchsia);
setLineWidth(10);
// mouvement
forward(50);
up();
forward(50);
for(let i=0; i<3;i++){
    down();
    forward(100);
    right(120);
}

// exo B10
// init
setPos(50, 300);
faceRight();
changeColor(color.blue);
setLineWidth(5);
// mouvement
function etoile(a) {
  for (let i = 0; i < 8; i++) {
    forward(a);
    right(135);
  }
}
etoile(100);
up();
forward(200);
changeColor(color.yellow);
down();
etoile(200);
up();
right(90);
forward(200);
changeColor(color.fuchsia);
down();
etoile(100);

// exo B11
// init
setPos(50, 300);
faceRight();
changeColor(color.red);
setLineWidth(5);
// mouvement
for(let i=0; i<4;i++){
    forward(50);
    left(90);
    forward(50);
    right(90);
    forward(50);
    right(90);
}

// exo B12
// init
setPos(300, 300);
faceRight();
changeColor(color.fuchsia);
setLineWidth(5);
// mouvement
for (let i = 0; i < 3; i++) {
  right(90);
  forward(50);
}
up();
forward(50);
changeColor(color.green);
down();
for (let i = 0; i < 3; i++) {
  forward(50);
  right(90);
}


// exo B13
// init
setPos(300, 300);
faceRight();
changeColor(color.green);
setLineWidth(5);
// mouvement
for (let i = 0; i < 8; i++) {
    forward(50);
    left(135);
    forward(25);
    right(90);
    forward(25);
    right(90);
}


// exo B14
// init
setPos(100, 100);
faceRight();
changeColor(color.yellow);
setLineWidth(5);
// mouvement
forward(25);
for (let i = 0; i < 6; i++) {
    right(120);
    forward(50);
    left(120);
    forward(50);
}



// exo B15
// init
setPos(300, 300);
faceRight();
changeColor(color.red);
setLineWidth(5);
// mouvement
forward(25);
for (let i = 0; i < 4; i++) {
    forward(100);
    arcLeft(50,90);
}


// exo B16
// init
setPos(100, 500);
faceRight();
changeColor(color.green);
setLineWidth(5);
// mouvement
arcLeft(200,90);
faceLeft();
for (let i = 0; i < 4; i++) {
    arcLeft(25,90);
    arcRight(25,90);
}


// exo B17
// init
setPos(100, 400);
faceRight();
changeColor(color.blue);
setLineWidth(5);
// mouvement
for (let i = 0; i < 7; i++) {
    arcLeft(50,180);
    left(120);
}


// exo B18
// init
setPos(100, 400);
faceRight();
changeColor(color.yellow);
setLineWidth(5);
// mouvement
for (let i = 0; i < 8; i++) {
    forward(200);
    left(90);
    forward(50);
    left(45);
}

// exo B19
// init
setPos(100, 550);
faceRight();
changeColor(color.blue);
setLineWidth(5);
// mouvement
for (let i = 0; i < 4; i++) {
    arcLeft(50,180);
    faceRight();
}
up();
faceUp();
forward(50);
down();
for(let i=0; i<4; i++){
    faceLeft();
    arcLeft(50,180);
}


// exo B20
// init
setPos(100, 300);
faceDown();
changeColor(color.blue);
setLineWidth(5);
// mouvement
for (let i = 0; i < 2; i++) {
    forward(100);
    arcLeft(50,90);
}
forward(150);
arcLeft(50,90);
forward(100);
arcLeft(50,90);
forward(50);
faceRight();
forward(200);
faceLeft();
forward(100);
faceDown();
up();
forward(25);
down();
faceRight();
arcRight(50,600);


// exo B21
// init
setPos(400, 200);
faceRight();
shiftColor(0.6);
setLineWidth(5);
// mouvement

function fish(){
    forward(100);
    left(120);
    forward(50);
    left(120);
    forward(100);
    right(60);
    forward(50);
    right(120);
    forward(50);
    right(120);
}

for(let i=0; i<6; i++){
    fish();
    up();
    forward(100);
    down();
    shiftColor(0.1);
}



// exo B22
// init
setPos(300, 400);
faceRight();
left(30);
changeColor(color.yellow);
setLineWidth(5);
// mouvement

for(let i=0; i<6; i++){
    forward(100);
    left(60);
}
changeColor(color.red);
left(30);
for(let i=0; i<3;i++){
    right(120);
    forward(100);
}
right(30);
changeColor(color.green);
for(let i=0; i<4;i++){
    forward(100);
    right(90);
}
right(150);
for(let i=0; i<4;i++){
    forward(100);
    right(90);
}

// exo C1
// init
setPos(100, 400);
faceRight();
changeColor(color.blue);
setLineWidth(5);
// mouvement
for(let i=0;i<4;i++){
    for(let j=0;j<3;j++){
        forward(100);
        right(120);
    }
    forward(100);
}


// exo C10
// init
setPos(300, 100);
faceDown();
changeColor(color.red);
setLineWidth(5);
// mouvement
for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){
        forward(50);
        for(let k=0;k<4;k++){
            left(90);
            forward(25);
        }
        right(90);
    }
    forward(100);
}



// exo D12
// init
setPos(300, 400);
faceRight();
changeColor(color.blue);
setLineWidth(5);
// mouvement
let longeur = 50;
for(let i=0;i<6;i++){
    for(let j=0;j<4;j++){
        forward(longeur);
        left(120);
    }
    right(60);
    longeur += 25;
}


// exo D13
// init
setPos(300, 300);
faceRight();
changeColor(color.fuchsia);
setLineWidth(5);
// mouvement
let rayon = 50;
for(let i=0;i<8;i++){
    arcRight(rayon,180);
    up();
    forward(50);
    down();
    rayon += 25;
}


// exo E11
// init
setPos(300, 300);
faceRight();
changeColor(color.fuchsia);
setLineWidth(5);
// mouvement

function forme(){
    forward(100);
    for(let i=0; i<2; i++){
        right(60);
        forward(50);
    }
}

for(let i=0;i<3;i++){
    forme();
    up();
    shiftColor(0.1);
    forward(50);
    down();
}
up();
faceUp();
forward(100);
down();
for(let i=0; i<3;i++){
    forme();
}


// exo E12
// init
setPos(150, 250);
faceRight();
changeColor(color.blue);
setLineWidth(5);
// mouvement

function lescarrer(){
    let longeur=50;
    for(let i=0; i<3; i++){
        for(let j=0; j<4;j++){
            forward(longeur);
            arcLeft(50, 90);
        }
        longeur +=25;
    }
}

lescarrer();
up();
faceDown();
forward(100);
shiftColor(0.25);
down();
lescarrer();
up();
faceRight();
forward(250);
shiftColor(0.25);
down();
lescarrer();

*/

let alphabet = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];

let god = "ARTEMIS ASCLEPIOS ATHENA ATLAS CHARON CHIRON CRONOS DEMETER EOS ERIS EROS GAIA HADES HECATE HEPHAISTOS HERA HERMES HESTIA HYGIE LETO MAIA METIS MNEMOSYNE NYX OCEANOS OURANOS PAN PERSEPHONE POSEIDON RHADAMANTHE SELENE THEMIS THETIS TRITON ZEUS"

console.log(god.length);
console.log("test")

// for(let i=0; i<alphabet.length;i++){
//     alphabet
// }