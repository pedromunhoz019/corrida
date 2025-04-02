
function setup() {
  createCanvas(400, 4
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;
let xJogador4 = 0;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#E1B5EB");
  } else {
    background("rgb(178,190,238)");
  }
}

function desenhaJogadores() {
  textSize(40);
  text(" 🤠 ", xJogador1, 50);
  text(" 👻 ", xJogador2, 150);
   text(" 😭 ", xJogador3, 250);
  text(" 😺 ", xJogador4, 350);
}

function desenhaLinhaDeChegada() {
  rect(350, 0, 30, 400);
}

function verificaVencedor() {
  textSize(30);
  if (xJogador1 > 350) {
    text("Cowboy ganhou", 50, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    text("Fantasma venceu", 50, 200);
    noLoop();
  }
  if (xJogador3 > 350) {
    text("Chorão ganhou", 50, 200);
    noLoop();
  }
  if (xJogador4 > 350) {
    text("Gatinho venceu", 50, 200);
    noLoop();
  }
}

function keyReleased() {
  if (key == "t") {
    xJogador1 += random(30);
  }
  if (key == "u") {
    xJogador2 += random(30);
  }
  if (key == "j") {
    xJogador3 += random(30);
  }
  if (key == "h") {
    xJogador4 += random(30);
  }
}
