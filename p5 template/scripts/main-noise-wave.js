let yoff = 0.0; // 2nd dimension of perlin noise

function setup() {
    createCanvas(710, 400);
}

function draw() {
    background(30);

    fill('silver'); //colors rectangle
    rect(0, 120, 300);

    fill('navy');
    //triangle(200, 200, 200, 350, 710,280);
    quad(200, 200, 200, 350, 710, 350, 710, 200)
    
    fill('rgba(51, 200, 132, 0.6)'); //colors the noise wave - added transparency
    
    // Draw a polygon out of the wave points
    beginShape();

    let xoff = 0; // Option #1: 2D Noise
    // let xoff = yoff; // Option #2: 1D Noise

    // Iterate over horizontal pixels
    for (let x = 0; x <= width; x += 10) {
        // Calculate a y value according to noise, map to

        // Option #1: 2D Noise
        let y = map(noise(xoff, yoff), 0, 1, 200, 300);

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
}
