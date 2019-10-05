var a = -120;
var b = 520;

function setup() {
  createCanvas(400, 160);
  colorMode(RGB);
  frameRate(20);
}

function draw() {
  background(0,10);

  
//   for (var x = -width/2; x < width; x = x + 10) {
//     line(x, height/2, x+100, height/2-75);
//   }
    
  stroke(color(255));

  line(a,height/2 ,a+100, height/2-75);
  a = a +15;
  
  if(a > width)
  {
    a = -120;
  }
   
  
  line(b,height/2+75 ,b - 100, height/2);
  b = b -15;
  
  if(b < 0)
  {
    b = width + 120;
  }
   
}
