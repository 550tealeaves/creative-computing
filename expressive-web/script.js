function setup() {
    createCanvas(innerWidth, innerHeight);
    // By default angles in p5js are specified in radians.
    // This switches to degree mode so we can specify
    // angles from 0 to 360 instead of 0 to 2 * PI
    angleMode(DEGREES);
    // Let's make our canvas light blue
    background(51, 0.4);
}

function draw() {    
   // line(x1, y1, x2, y2)
    stroke('red');
    strokeWeight(2);
    line(width, height, (width/10), (height/6));
}