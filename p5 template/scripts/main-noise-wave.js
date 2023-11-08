let yoff = 0.0; // 2nd dimension of perlin noise

function setup() {
    createCanvas(710, 500);
}

function draw() {
    background(30);
    //construct iceberg
    fill('#d8d6d6'); //colors rectangle
    quad(0, 60, 200, 400, 0, 600, 130, 5);
    quad(0, 40, 20, 500, 70, 300, 230, 19);

    //construct and color the hull
    
    fill('#35393b');
    quad(200, 200, 220, 350, 710, 350, 710, 200);
    fill('white');
    quad(197, 180, 200, 200, 710, 200, 710, 180); 
    fill('#940404');
    quad(220, 351, 240, 380, 710, 380, 710, 351);
    
    //build the lines that hold the columns
    line(200, 180, 300, 0);
    line(400, 180, 500, 0);
    line(550, 180, 580, 0);
    line(450, 180, 500, 0);
    fill('#8c7c6c');
    rect(640, 0, 50, 180);
    
    //fill('rgba(51, 200, 132, 0.6)'); //colors the noise wave - added transparency
    fill('rgba(8, 36, 96, 0.8)'); //colors the noise wave - added transparency

    // Draw a polygon out of the wave points
    beginShape();

    let xoff = 0; // Option #1: 2D Noise
    // let xoff = yoff; // Option #2: 1D Noise

    // Iterate over horizontal pixels
    for (let x = 0; x <= width; x += 10) {
        // Calculate a y value according to noise, map to
        // Option #1: 2D Noise
        let y = map(noise(xoff, yoff), 0, 1, 400, 300);

        
        // Option #2: 1D Noise
        // let y = map(noise(xoff), 0, 1, 200,300);

        // Set the vertex
        vertex(x, y);
        // Increment x dimension for noise
        xoff += 0.05;

    }
    // increment y dimension for noise
    yoff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    drawGrid();
}

function drawGrid(){
    fill('#ccad00');
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 10; j++) {
            circle((i * 100) + 255, 250, 15);
            circle((i * 100) + 255, 285, 15);
            circle((i * 100) + 300, 320, 15);
           }  
    }
}
