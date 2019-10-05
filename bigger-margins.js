function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

//increase the margin to 35 
  for (var x = 35; x < width-35; x = x + 35) {
    line(x, height/2, mouseX, mouseY);
  }
}
