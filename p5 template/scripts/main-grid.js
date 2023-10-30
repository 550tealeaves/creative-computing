function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);    

    let numrows = 1000;
    let numcols = 1000;
    let paddingFactor = 0;
    let xPadding = paddingFactor / numrows;
    let yPadding = paddingFactor / numcols;



    //For (var BEGIN; END; INTERVAL){
    //DO SOMETHING }
    for (var x = 0; x < width; x += width / 10) {
        for (var y = 0; y < height; y += height / 5) {
            stroke(255);
            strokeWeight(1);
            line(x, 0, x, height);
            line(0, y, width, y);
            noStroke();
            fill(60, 59, 251);
            circle(200, 200, 50); //circle appears in the middle

        }
    }
}