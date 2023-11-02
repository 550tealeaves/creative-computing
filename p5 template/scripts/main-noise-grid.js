function setup() {
    createCanvas(500, 500);
}

let noiseOff = 0.4;

function draw() {
    background(220);
    noStroke();
    // stroke(212, 188, 95);
    // strokeWeight(.3);


    let rowWidth = width / 50;

    //EDIT THE PARAMETERS TO SEE WHAT HAPPENS
    //we'll make this square so rows and cols are the same
    let rows = width / rowWidth;
    let cols = rows;

    let yNoiseFactor = 0.1;
    let increment = 0.06;

    for (let y = 0; y < rows; y++) {

        for (let x = 0; x < cols; x++) {
            let colorVal = map(noise(yNoiseFactor), 0, 1.6, 0, 255); //produces one value (r of rgb)
            fill(colorVal, 49, 57); //added other gb values so grid changes color
            //each time you click play the above color appears in different spots
            rect(x * rowWidth, y * rowWidth, rowWidth);

        }
        yNoiseFactor += increment;
    }



    noLoop();
}