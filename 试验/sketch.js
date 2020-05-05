let img;
function preload(){
  img = loadImage("http://127.0.0.1:8887/puppy.jpg");
}

function setup() {
  createCanvas(400, 400,WEBGL);
}

function draw() {
  background(220);
image(img, 0, 0);

}