let img1
let img2
let img3
let img4
let img5
let angle = 1
let frameCount = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  img1 = loadImage('assets/rhinestone0.png')
  img2 = loadImage('assets/rhinestone1.png')
  img3 = loadImage('assets/rhinestone2.png')
  img4 = loadImage('assets/rhinestone3.png')
  img5 = loadImage('assets/rhinestone4.png')

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

function draw () {

    translate(width / 2, height / 2);
    rotate(radians(angle));
    imageMode(CENTER);
    image(img1, 300 + Math.sin(frameCount/10)*100, 0);
    angle += 1;
    frameCount += 1;

}
