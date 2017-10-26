let butterfly;
let rhinestones = [];
let poem = [flowers, that, fade, into, bloom];

function preload() {
  rhinestone1 = loadImage("../assets/rhinestone1.png")
  rhinestone2 = loadImage("../assets/rhinestone2.png")
  rhinestone3 = loadImage("../assets/rhinestone3.png")
  rhinestone4 = loadImage("../assets/rhinestone4.png")
  rhinestone5 = loadImage("../assets/rhinestone5.png")
}


function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  butterfly = createImg('assets/butterfly.gif');
  mouseX = -1000
  mouseY = -1000
}

function draw() {
  background(255, 255, 255);
  butterfly.position(mouseX-270, mouseY-270);
  // first rhinestone appears at page load
  image(rhinestone1, random(100, 400), random(100, 400));
  rhinestone1.resize(800, 0);
}

// new rhinestone appears upon mouse click
