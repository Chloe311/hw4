function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  frameRate(20);
}

function draw() {
  background(255);

  for (var x = 10; x < width-10; x = x + 10) {
    stroke(color(x,80,80));//add colors to lines
    strokeWeight(2);
    line(x, height/2, mouseX, mouseY);
  }
}
