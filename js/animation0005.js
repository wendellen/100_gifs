
function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
}

function draw() {
  if (mouseIsPressed) {
    fill('lightyellow');
    stroke('pink');
    strokeWeight(2);
  } else {
    fill('pink');
    stroke('lightyellow');
    strokeWeight(2);
  }
  star(mouseX, mouseY, 20, 38, 5);
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
