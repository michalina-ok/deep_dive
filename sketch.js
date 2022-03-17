let grotesk;
let fontSize = 160;
let firstLetter = [];
let firstLetter1 = [];
let secondLetter = [];
let secondLetter1 = [];
let thirdLetter = [];
let thirdLetter1 = [];
let x, y;
let colorPicker;



function draw() {
  background(colorPicker.color());
}
function preload() {
  grotesk = loadFont("grotesk.otf");
}

function setup() {    
  let myCanvas = createCanvas(400, 300);
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(20, height + 30);
  myCanvas.parent('canvas');
  textFont(grotesk);
  textSize(fontSize);
  x = width / 2 - 160;
  y = height / 2 + 65;
  firstLetter = grotesk.textToPoints("C", x, y, fontSize, {
    sampleFactor: 0.1,
  });
  firstLetter1 = grotesk.textToPoints("B", x, y, fontSize, {
    sampleFactor: 0.0658,
  });
  secondLetter = grotesk.textToPoints("P", x+100, y, fontSize, {
    sampleFactor: 0.1,
  });
  secondLetter1 = grotesk.textToPoints("L", x+100, y, fontSize, {
    sampleFactor: 0.142,
  });
  thirdLetter = grotesk.textToPoints("H", x+185, y, fontSize, {
    sampleFactor: 0.1,
  });
  thirdLetter1 = grotesk.textToPoints("N", x+185, y, fontSize, {
    sampleFactor: 0.0845,
  });
  print(firstLetter.length);
  print(firstLetter1.length);
  print(secondLetter.length);
  print(secondLetter1.length);
print(thirdLetter.length);
print(thirdLetter1.length);
}

function draw() {
  background(colorPicker.color());
  fill(255, 204, 200);
  //beginShape();
  for (let i = 0; i < firstLetter.length; i++) {
    //vertex(firstLetter[i].x, firstLetter[i].y);

    //ellipse(firstLetter[i].x, firstLetter[i].y, 10, 10);
    push()
    translate(firstLetter[i].x, firstLetter[i].y);
    line(-5,-5,5,5);
    pop();
    
    if (firstLetter[i].x <= firstLetter1[i].x) {
      firstLetter[i].x++;
    }

    if (firstLetter[i].x >= firstLetter1[i].x) {
      firstLetter[i].x--;
    }
    if (firstLetter[i].y >= firstLetter1[i].y) {
      firstLetter[i].y--;
    }

    if (firstLetter[i].y <= firstLetter1[i].y) {
      firstLetter[i].y++;
    }
    //vertex(secondLetter[i].x, secondLetter[i].y);

  //endShape();
  }

  for (let i = 0; i < secondLetter.length; i++) {
    
    push()
    translate(secondLetter[i].x, secondLetter[i].y);
    line(-8,-8,8,8);
    pop();
    
    if (secondLetter[i].x <= secondLetter1[i].x) {
      secondLetter[i].x++;
    }

    if (secondLetter[i].x >= secondLetter1[i].x) {
      secondLetter[i].x--;
    }
    if (secondLetter[i].y >= secondLetter1[i].y) {
      secondLetter[i].y--;
    }

    if (secondLetter[i].y <= secondLetter1[i].y) {
      secondLetter[i].y++;
    }
    
  }

  for (let i = 0; i < thirdLetter.length; i++) {
    
    push()
    translate(thirdLetter[i].x, thirdLetter[i].y);
    line(-8,-8,8,8);
    pop();
    
    if (thirdLetter[i].x <= thirdLetter1[i].x) {
      thirdLetter[i].x++;
    }

    if (thirdLetter[i].x >= thirdLetter1[i].x) {
      thirdLetter[i].x--;
    }
    if (thirdLetter[i].y >= thirdLetter1[i].y) {
      thirdLetter[i].y--;
    }

    if (thirdLetter[i].y <= thirdLetter1[i].y) {
      thirdLetter[i].y++;
    }
    
  }
}
