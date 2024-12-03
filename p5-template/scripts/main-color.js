function setup() {
    createCanvas(400, 400);
    // By default angles in p5js are specified in radians.
    // This switches to degree mode so we can specify
    // angles from 0 to 360 instead of 0 to 2 * PI
    angleMode(DEGREES);
    // Let's make our canvas light gray
    background('thistle');
    strokeWeight(4);
}

//to color shapes = call the fill & stroke functions BEFORE calling the shape
//Colors specified run until the next fill/stroke called
function draw() {
    fill('Crimson');
    stroke('RoyalBlue');
    arc(67, 67, 50, 50, 45, 360 - 45);

    fill('ForestGreen');
    stroke('Violet');
    circle(200, 67, 50);

    fill('RoyalBlue');
    stroke('Gold');
    ellipse(334, 67, 30, 50);

    fill('Violet');
    stroke('DarkTurquoise');
    strokeWeight(8); // we need to increase the thickness of the stroke to make the point more visible
    point(67, 200);
    strokeWeight(4);

    fill('Gold');
    stroke('DarkOrange');
    line(175, 225, 225, 175);

    fill('DarkTurquoise');
    stroke('PaleGreen');
    quad(309, 225, 309, 200, 359, 175, 359, 200);

    fill('DarkOrange');
    stroke('SkyBlue');
    rect(42, 314, 50, 40);

    fill('PaleGreen');
    stroke('Crimson');
    square(176, 309, 50);

    fill('SkyBlue');
    stroke('ForestGreen');
    triangle(315, 340, 342, 310, 350, 355);
}