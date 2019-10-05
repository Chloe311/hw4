function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(255);

//define the loop
  for (var x = 50; x < 400; x = x + 10) {
    line(x, height/2, x+100, height/2-75);
  }
}
