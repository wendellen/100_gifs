let butterfly;
let rhinestone;
let poem = [];

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  butterfly = createImg('assets/butterfly.gif');
  mouseX = -1000
  mouseY = -1000
}



function draw() {
  background(129, 112, 182);
  butterfly.position(mouseX-270, mouseY-270);
}
