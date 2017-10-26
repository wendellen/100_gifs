var img1

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  img1 = createImg('assets/butterfly.gif');
  mouseX = -1000
  mouseY = -1000
}

function draw() {
  background(129, 112, 182);
  img1.position(mouseX-270, mouseY-270);
}
