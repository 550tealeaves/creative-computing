let incrementParam;
let gridSizeParam;
let colorParam;

function setup() {
    createCanvas(500, 500);

    gridSize = width / 20;

    //noise offset param
    createP('noise increment');
    incrementParam = createSlider(0, 1, 0.05, 0.01);

    createP('grid size (rows and cols)');
    gridSizeParam = createSlider(1, 500, gridSize, 10);

    createP('select base color')
    colorParam = createColorPicker('black');
}

let noiseOff = 0;

function draw() {
    background(220);
    noStroke();

    let rowWidth = width / gridSizeParam.value();

    //we'll make this square so rows and cols are the same
    let rows = width / rowWidth;
    let cols = rows;

    let yOff = 0
    for (let y = 0; y < rows; y++) {
        let xOff = 0;
        for (let x = 0; x < cols; x++) {
            let col = color(colorParam.value());
            let colorAlphaVal = map(noise(xOff, yOff), 0, 1, 0, 255);
            col.setAlpha(colorAlphaVal)
            fill(col);
            rect(x * rowWidth, y * rowWidth, rowWidth);
            xOff += incrementParam.value(); //see
        }
        yOff += incrementParam.value();
    };
}