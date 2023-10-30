let startX = [10, 117, 220, 333, 447, 471, 379, 480];
let endX = [2, 6, 12, 24, 48, 61, 70, 105];

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(48);

    //loops through both arrays, creates circles w/ circle parameters (x,y,d) w/ specified fill/stroke
    //loops through arrays, creates squares w/ random width/heights & side of 20*i (squares appear randomly throughout)
    for (let i = 0; i < startX.length; i = i + 1) {
        fill("#e6b5e0");
        stroke("#f5da42")
        circle(120 + startX[i], 200 + endX[i], 380);
        fill(66, 245, 66);
        stroke(245, 66, 66);
        square(random(width) + startX[i], random(height) + endX[i], 20 + i); //looks like squares are moving
    }
}