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
    // arc(centerX, centerY, width, height, startAngle, endAngle)
    arc(67, 67, 50, 50, 45, 360 - 45);

    // circle(centerX, centerY, diameter)
    circle(200, 67, 50);

    // ellipse(centerX, centerY, width, height)
    ellipse(334, 67, 30, 50);

    // point(x, y)
    strokeWeight(5); // we need to increase the thickness of the stroke to make the point visible
    point(67, 200);
    strokeWeight(1);

    // line(x1, y1, x2, y2)
    stroke('red');
    line(175, 225, 225, 175);

    // quad(x1, y1, x2, y2, x3, y3, x4, y4)
    stroke("black");
    quad(309, 225, 309, 200, 359, 175, 359, 200);

    // rect(leftX, topY, w, h)
    rect(42, 314, 50, 40);

    // square(leftX, topY, size)
    square(176, 309, 50);

    // triangle(x1, y1, x2, y2, x3, y3)
    triangle(315, 340, 342, 310, 350, 355);
}