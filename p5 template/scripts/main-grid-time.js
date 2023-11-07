function setup() {
    createCanvas(500, 500);
}

let timeFactor = 0;

function draw() {
    background(220);
    noStroke();
    let rowWidth = width / 50;

    //we'll make this square so rows and cols are the same
    let rows = width / rowWidth;
    let cols = rows;

    let increment = 0.05;
    let yOff = 0;


    for (let y = 0; y < rows; y++) {
        let xOff = 0;
        for (let x = 0; x < cols; x++) {
            let colorVal = map(noise(xOff, yOff, timeFactor), 0, 1, 0, 255);
            fill(colorVal);
            rect(x * rowWidth, y * rowWidth, rowWidth);
            xOff += increment;
        }
        yOff += increment;
    };

    timeFactor += 0.009;


}