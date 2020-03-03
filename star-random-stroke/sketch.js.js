function setup() {

  createCanvas(960, 540);

}



function draw() {
  background(0);
  noFill();
  stroke(random(50,200),random(50,200),random(500,200));

  for(var i= 7; i < width; i+=7){

    odds = i%1

    if (odds == 0){

      strokeWeight(2);

    }else{

      strokeWeight(1);

    }
  
    star(width/2+30, height/2-50, 10+i/1, 200, 5);
    star(width/2+30, height/2-50, 10+i/1.5, 50, 5);
    star(width/2+30, height/2-50, 10+i/0.5, 350, 5);
    star(width/2+30, height/2-50, 10+i/0.3, 600, 5);
  }

  

  for(var j = 0; j <=10; j++){

    print(j);

  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}