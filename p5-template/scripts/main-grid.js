//week 9 hw assignment - https://editor.p5js.org/claire89/sketches/zgnRCFHOW

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(240);    

    //1st for loop (x=0), x<width - changes the circles on the vertical lines (col)
    //2nd for loop (y-0), y<height - changes circles on horizontal lines (rows)
    //increased the last # in each for loop statement (width/#), (height/#) to increase the circles - originally started at 10
    for (var x = 0; x < width; x += width / 25) { 
        for (var y = 0; y < height; y += height / 25) {
            noStroke(); //no outline 
            fill(60, 59, 251); //color from assignment
            circle(x, y, 8); 
            //below code would create white grid lines intersecting the circles
            // stroke(255);
            // strokeWeight(0.1);
            // line(x, 0, x, height);
            // line(0, y, width, y);
        }
    }
}