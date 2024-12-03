//original code - https://editor.p5js.org/Supermanh/sketches/xOEaZAO0v

function setup() {
    createCanvas(650*2, 900*2);
    let rs = random(5);
    blobb = new Blobb(rs);
  
  }
  
  function draw() {   
    background(220);
    noLoop();
  
  // blobb.show(width/2,height/2);
  
    for (var x = 0; x <= width; x = x + 20) {
  
      for (var y = 0; y <= height; y = y + 30) {
        blobb.show(x,y); 
        stroke('#090909');
        fill('#282f3f'); 
        triangle(random(x), random(y), 30, 545, 688, 324);
      }
    } 
  
  }