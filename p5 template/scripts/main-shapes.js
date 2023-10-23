//Code must live within functions

//function setup() performs an action 1x upon start of programs
function setup() {
    createCanvas(640, 360); //canvas size - 640px wide and 360px high
}


//function draw() runs continuously
function draw() {
    rect(100, 200, 75, 150); //(x,y,w,h)
    circle(320, 162, 63); //(x,y,d)
    line(32, 94, 81, 129); //(x1,y1,x2,y2)
    square(60, 245, 17); //(x,y,s)
    point(41, 17); //(x,y)
    triangle(23, 33, 176, 12, 124, 98); //(x1,y1,x2,y2,x3,y3)
    ellipse(167, 98, 32, 66); //(x,y,w,h)
    arc(227, 221, 57, 22, 10, 15, "pie"); //(x, y, w, h, start, stop, mode(optional), detail(optional))
    quad(6, 50, 100, 120, 23, 43, 16, 77); //(x1,y1,x2,y2,x3,y3,x4,y4,detailX(opt), detailY(opt))
}
