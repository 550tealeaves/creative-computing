function setup() {
    createCanvas(400, 400);
}

let noiseFactor = 0;
let noiseResult;
function draw() {
    background(200); //redraw the background

    fill('red');
    noStroke();
    let circleSize = 200; //
    noiseResult = noise(noiseFactor) * 50;
    console.log(noiseResult);
    circle(width / 2, height / 2, circleSize + noiseResult);

    noiseFactor = noiseFactor + .1; //increment noiseFactor each time it runs
}

//what is code doing 
//First, define circle size, draw it, put it in the center
//generate a # and add it to the circleSize (that's why it gets bigger/smaller) (maybe add 3, 5, 1 etc)
//preset noise # - call noise function, multiply it by something (default is 0-1 that is being multiplied by 50)
//to get a smooth #, noise only related to #s that are close to each other
//want to run the function over and over & give it a # that is slightly higher each time
//noise(0), noise(.1), noise(.2), noise(.3) etc