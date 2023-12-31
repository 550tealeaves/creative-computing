let xoff = 0.01;
let xincrement = 0.01; //increaese # and it moves faster

function setup() {
    createCanvas(710, 400);
    background(132, 66, 87);
    noStroke();
}

function draw() {
    // Create an alpha blended background
    fill(80, 10);
    rect(0, 0, width, height);

    //let n = random(0,width);  // Try this line instead of noise

    // Get a noise value based on xoff and scale
    // it according to the window's width
    let n = noise(xoff) * width;

    // With each cycle, increment xoff
    xoff += xincrement;

    // Draw the ellipse at the value produced by perlin noise
    fill(200);
    ellipse(n, height / 2, 64, 64);
}
