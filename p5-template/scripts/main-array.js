let startX = [10, 15, 25, 40, 60, 85, 115, 150];
let endX = [10, 15, 20, 25, 30, 35, 40, 45];

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(238);

    textSize(24);

    //it prints the specific index value & the other 2 values in () specify the x/y (same x, diff y)
    fill('purple');
    text(startX[0], 20, 20); //10 (x=20, y=20)
    fill("green");
    text(startX[1], 20, 60); //15 (x=20, y=60)
    fill('orange');
    text(startX[7], 20, 100); //150 (x=20, y=100)
    fill("skyblue");
    text(startX.length, 20, 160); //8 (x=20, y=160)

    //displays all the values in the array with same width but different heights
    fill("magenta");
    for (let i = 0; i < startX.length; i = i + 1) {
        text(startX[i], 100, 20 + 40 * i); //(ex: 10, x=100, y=(20+40*10))
    }

    //loops through both arrays, creates lines that are each value + 200 (200+10),(200+15) etc w/ line parameters
    for (let i = 0; i < startX.length; i = i + 1) {
        line(200 + startX[i], 10, 200 + endX[i], 380);
    }

}