int w,h;
void setup(){
  size(555,555);
  background(55);
  w = width;
  h = height;
}

float r =random(175,250);
float a =.1;
void draw(){
  
  noFill();
  stroke(255,5);
  translate(w/2,h/2);
  beginShape();
  for(float i=0;i<TWO_PI;i+=.1){
    float off=.1;
    float nc = noise(i,sin(a*TWO_PI),cos(a*TWO_PI));
    float bc = random(-2,2);
    vertex(r*cos(a*nc)+i+off*bc,r*sin(a*nc)+i+off*bc);
    off+=.1;
  }
  endShape(CLOSE);
  a+=.1;
 // print(frameCount + "\n");
  if(frameCount>355){
    save("output.png");
    exit();
  }
}