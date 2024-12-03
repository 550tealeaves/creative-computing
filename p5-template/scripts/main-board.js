//https://openprocessing.org/sketch/1103112/

//line(x1,y1,x2,y2);
//circle (x,y,d);
//square (x,y,s);

function setup() {
    createCanvas(400, 400);
    background('#c700ff');
}

function draw() {
    drawGrid();
}

function drawGrid() {
    textSize(10);
    fill(0);
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 10; j++) {
            line(i * 50, 0, i * 50, 500); //adjusts vertical lines
            line(0, j * 50, 600, j * 50); //adjusts horizontal lines
            
            //CREATING THE BOARD GAME - squares have to be 100 spaces apart both horizontally & vertically
            //alternating rows start at 0 and space out every 100 (i*100)
            //alternating rows start at 50 & space out every 100 (i*100) + 50
            //y changes

            fill(0);
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

            //CREATE AND POSITION 1ST SET OF "CHECKER" PIECES
            fill('red');
            circle((i * 100) + 25, 25, 49);//created 1st row of circles
            circle((i * 100) + 75, 75, 49);//created 2nd row of circles
            circle(random(i * 100) - 75, 125, 49);//created 3rd row of circles
            //CREATE AND POSITION 2ND SET OF "CHECKER" PIECES
            fill('seagreen');
            circle(random(i * 100) + 75, 275, 49);
            circle((i * 100) - 275, 325, 49); //creates 2nd row of other pieces
            circle((i * 100) + 75, 375, 49);
        }
    }
}