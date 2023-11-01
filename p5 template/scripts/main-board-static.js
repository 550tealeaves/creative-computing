//https://openprocessing.org/sketch/1103112/

//line(x1,y1,x2,y2);
//text(string, x, y, [maxWidth], [maxHeight]); (w/h optional)

function setup() {
    createCanvas(400, 400); //this creates 8x8 board which is good for checkers
    //createCanvas(600, 400); 
    background('#c700ff');
}

function draw() {
    drawGrid();

    // fill(150, 83, 222);
    // circle(225, 225, 49);

    // fill('orange');
    // circle(325, 125, 49);

    // fill('#d4cf55');
    // circle(375, 475, 49);

    // fill(63, 161, 146);
    // circle(125, 325, 49);
}

function drawGrid() {
    textSize(10);
    fill(0);
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 10; j++) {
            line(i * 50, 0, i * 50, 500); //adjusts vertical lines
            // fill(255);
            // text(i * 50, (i * 50) + 2, 10); //1st # increments #s on top row by 50 (0*50, 1*50, 2*50 etc), 2nd # = (x) - places each text at (0*50) + 2 (x=2, x=52, x-152 - moves #s to the right of the line). This done to prevent 2 (0's) from showing, 3rd # = (y) moves #s up/down y-axis
            line(0, j * 50, 600, j * 50); //adjusts horizontal lines
            // fill(255);
            // text(j * 50, 2, (j * 50) + 10); //1st increments #s on column by 50 (0*50, 1*50 etc), 2nd # (x) lists values at x=2, 3rd # (y) moves #s down y-axis (y=10, y=60, y=110) - moves #s down & under the lines
            fill(0);
            //CREATING THE BOARD GAME - squares have to be 100 spaces apart both horizontally & vertically
            //alternating rows start at 0 and space out every 100 (i*100)
            //alternating rows start at 50 & space out every 100 (i*100) + 50
            //y changes
            square(0, (i * 100), 50); //first column of black squares
            square((i * 100), 0, 50); //top row of black squares
            square((i * 100) + 50, 50, 50); //2nd row of black squares
            square(i * 100, 100, 50); //3rd row of black squares
            square((i * 100) + 50, 150, 50); //4th row of black squares 
            square((i * 100), 200, 50); //5th row of black squares
            square((i*100) + 50, 250, 50);//6th row of black squares
            square((i * 100), 300, 50);//7th row of black squares
            square((i * 100) + 50, 350, 50);//8th row of black squares
            square((i * 100), 400, 50)//9th row of black squares
            square((i * 100) + 50, 450, 50);//10th row of black squares

            //CREATE AND POSITION THE "CHECKER" PIECES
            fill('red');
            circle((i * 100) + 25, 25, 49);//created 1st row of circles
            circle((i * 100) + 75, 75, 49);//created 2nd row of circles
            circle((i * 100) - 75, 125, 49);//created 3rd row of circles
            //circle((i * 100) + 75, 175, 49);
            fill('seagreen');
            circle((i * 100) + 75, 275, 49);
            circle((i * 100) - 275, 325, 49); //creates 2nd row of other pieces
            circle((i * 100) + 75, 375, 49);
            // circle((i * 100) - 75, 425, 49); //not needed b/c of reduced canvas size
            // circle((i * 100) + 75, 475, 49); //not needed b/c of reduced canvas size
        }
    }
}