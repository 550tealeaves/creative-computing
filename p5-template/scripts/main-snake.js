let snakeX = [];
let snakeY = [];

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(228);

    //each time you loop, the length increases by 1
    snakeX.push(mouseX);
    snakeY.push(mouseY);

    //checks if snakeX.length is >50, and if so, it will remoe the first value
    if (snakeX.length > 50) {
        snakeX.splice(0, 1);
        snakeY.splice(0, 1);
    }

    //loop through array & increments by 1 - create ellipse w/ dimensions
    //colors are (rgb + opacity) - increase the (blue*i & opacity*i) = gets bluer and more opaque
    for (let i = 0; i < snakeX.length; i = i + 1) {
        noStroke();
        fill(200, 85, 6 * i, 2 * i);
        ellipse(snakeX[i], snakeY[i], i, i)
    }

}