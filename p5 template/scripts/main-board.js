//https://openprocessing.org/sketch/1103112/
//line(x1,y1,x2,y2);
//text(string, x, y, [maxWidth], [maxHeight]); (w/h optional)

function setup() {
    createCanvas(600, 500);
    background('#FDD8F6');
}

function draw() {
    drawGrid();

    fill(150, 83, 222);
    circle(250, 250, 100);

    fill('orange');
    circle(350, 350, 100);

    fill('#d4cf55');
    circle(450, 250, 100);

    fill(63, 161, 146);
    circle(150, 350, 100);
}

function drawGrid() {
    textSize(10);
    fill(0);
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 10; j++) {
            line(i * 50, 0, i * 50, 500); //adjusts vertical lines
            text(i * 50, (i * 50) + 2, 10); //1st # increments #s on top row by 50 (0*50, 1*50, 2*50 etc), 2nd # = (x) - places each text at (0*50) + 2 (x=2, x=52, x-152 - moves #s to the right of the line). This done to prevent 2 (0's) from showing, 3rd # = (y) moves #s up/down y-axis
            line(0, j * 50, 600, j * 50); //adjusts horizontal lines
            text(j * 50, 2, (j * 50) + 10); //1st increments #s on column by 50 (0*50, 1*50 etc), 2nd # (x) lists values at x=2, 3rd # (y) moves #s down y-axis (y=10, y=60, y=110) - moves #s down & under the lines
        }
    }
}