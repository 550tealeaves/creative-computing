// function setup() {
//     createCanvas(500, 500)
//     background(100);
// }

// function draw() {
//     ellipse(x, height / 2, 20, 20);
//     x = x + 1;
// }


//MOUSE INTERACTIVITY

// function setup() {
//     createCanvas(500, 500);
//     background(230);
//     strokeWeight(2);
// }

// function draw() {
//     if (mouseIsPressed) {
//         stroke(255);
//     } else {
//         stroke(237, 34, 93);
//     }
//     line(mouseX - 66, mouseY, mouseX + 66, mouseY);
//     line(mouseX, mouseY - 66, mouseX, mouseY + 66);
// }




// //MAKING A GRID

// function setup() {
//     createCanvas(400, 400);
//     background(240)
// }

// //original code that will draw only 1 row
// // function setup() {
// //     createCanvas(400, 400);
// //     background(240)
// // }

// // function draw() {

// //     noLoop();
// //     noStroke();
// //     fill('red');
// //     let numCircles = 50;
// //     let r = (width) / numCircles;

// //     for (x = 0; x < numCircles; x++) {
// //         ellipse(x * r, height / 2, r);
// //     }
// // }


// //if you increase the increment in the loop, then it will increase the gap b/w cricles
// //have to add the for loops before the ellipse in order for it to draw a grid 

// function draw() {

//     noLoop();
//     noStroke();
//     fill('red');
//     let numCircles = 50;
//     let r = (width) / numCircles;

//     for (x = 0; x < numCircles; x += 3) {
//         for (y = 0; y < numCircles; y += 3) 
//         { ellipse(x * r, y * r, r); }
//     }
// }

//FRAME BY FRAME MOVEMENT
// let x = 0;

// function setup() {
//     createCanvas(500, 500)
//     background(100);
// }

// function draw() {
//     ellipse(x, height / 2, 20, 20);
//     x = x + 1;
// }


//RANDOMNESS
// function setup() {
//     createCanvas(500, 500)
//     background(300);
// }

// function draw() {
//     console.log(min(random(1, 40), random(1, 40)))
// }



//SKYSCRAPER WITH RANDOMNESS
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    noLoop();

    let numRects = 40;
    let rectWidth = width / numRects;
    fill('blue');
    noStroke();
    //start at #, end at another & increment by certain amount
    //it's going to the width of the page - and incrementing by the rectangle width so there are no overlaps
    //start at x (0) and keep going until reaching the width & keep incrementing by the width of the rectangle
    //This starts at 0, & rect width = 10, so 0, 10, 20, 30 etc 390 - stops at 390 b/c < NOT <=
    for (x = 0; x < width; x += rectWidth) {
        //let rectHeight = random(1, 150);
        let rectHeight = max(random(1, 150), random(1, 150)); //this line makes the buildings look taller
        rect(x, height / 2, rectWidth, -rectHeight)
    }
}


//ANOTHER WAY TO CREATE SHAPE WITH FOR LOOP
// function setup() {
//     createCanvas(400, 400);
//     fill(160, 200, 23);
// }

// function draw() {
//     background(255);
//     noLoop();

//     let numSquares = 10;
//     let squareSize = width / numSquares;

//     //start at 0, and go till the numSquares (10) and increment by 1 so will stop at 9
//     for (x = 0; x < numSquares; x += 1) {
//         rect(50, 50, squareSize);
//         console.log(x); //show 0-9
//     }
// }