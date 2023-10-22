//Code must live within functions

//function setup() performs an action upon start of program
function setup() {
    createCanvas(640, 360); //canvas size - 640px wide and 360px high
}

function draw() {
    rect(100, 200, 75, 150); //(x,y,w,h)
    circle(320, 162, 63); //(x,y,d)
    line(32, 94, 81, 129); //(x1,y1,x2,y2)
    square(60, 245, 17); //(x,y,s)
    point(41, 17); //(x,y)
    triangle(23, 53, 76, 12, 64, 98); //(x1,y1,x2,y2,x3,y3)
    ellipse(167, 98, 32, 66); //(x,y,w,h)
    arc(227, 221, 57, 22, 10, 15, "pie"); //(x, y, w, h, start, stop, mode(optional), detail(optional))
}