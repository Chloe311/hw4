function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

//spread the line further apart by changing the increment
  for (var x = 10; x < width-10; x = x + 80) {
    line(x, height/2, mouseX, mouseY);
  }
}
