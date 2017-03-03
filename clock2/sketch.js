function setup() {
  
  resizeCanvas(500,500);

}

function draw() {
  
  //time
  background(255,56,152);
  int=h = hour();
  int=m = minute();
  int=s = second();
  //shape 
  rect(0, 0, h*10, height/3); 
  rect(0, height/3, m*4, height/3);
  rect(0, height*2/3, s*4, height/3);
  noStroke()
  fill(0)
}