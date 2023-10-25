function setup() {
    createCanvas(500, 500)
    background(100);
}

function draw() {
    ellipse(x, height / 2, 20, 20);
    x = x + 1;
}


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
let x = 0;

function setup() {
    createCanvas(500, 500)
    background(100);
}

function draw() {
    ellipse(x, height / 2, 20, 20);
    x = x + 1;
}
