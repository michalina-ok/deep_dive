let grotesk;
let fontSize = 200;
let firstLetter = [];
let x, y;
let secondLetter = [];

function preload() {
  grotesk = loadFont("grotesk.otf");
}

function setup() {
  createCanvas(400, 400);
  textFont(grotesk);
  textSize(fontSize);
  x = width / 2 - 80;
  y = height / 2 + 65;
  firstLetter = grotesk.textToPoints("W", x, y, fontSize, {
    sampleFactor: 0.1,
  });
  secondLetter = grotesk.textToPoints("M", x, y, fontSize, {
    sampleFactor: 0.094,
  });
}

function draw() {
  background(200);
  beginShape();
  for (let i = 0; i < firstLetter.length; i++) {
    vertex(firstLetter[i].x, firstLetter[i].y);

    if (firstLetter[i].x <= secondLetter[i].x) {
      firstLetter[i].x++;
    }

    if (firstLetter[i].x >= secondLetter[i].x) {
      firstLetter[i].x--;
    }
        if (firstLetter[i].y >= secondLetter[i].y) {
      firstLetter[i].y--;
    }

    if (firstLetter[i].y <= secondLetter[i].y) {
      firstLetter[i].y++;
    }
    //vertex(secondLetter[i].x, secondLetter[i].y);
  }
  endShape();

  //text("W", x, y);
}
