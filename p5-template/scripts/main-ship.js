//INSPIRATIONS
//https://editor.p5js.org/wvnl/sketches/5wnuHAXKd (star twinkle) 
//https://p5js.org/examples/math-noise-wave.html (noise wave)


// Responsive code

let yoff = 0.0; // 2nd dimension of perlin noise
let stars = [];

function setup() {
    // Create canvas relative to window size
    createCanvas(windowWidth * 0.82, windowHeight * 0.8);

    for (let i = 0; i < 1000; i++) {
        stars[i] = new Star();
    }
}

function draw() {
    background(20);

    // Scale factor relative to original design width
    let scaleFactor = width / 1010;

    // Draw stars
    for (let i = 0; i < stars.length; i++) {
        stars[i].draw();
    }

    // ========== BUILD AND COLOR ICEBERG ==========
    // Incorporate the scaleFactor to variable to each measurement of the shape so it's responsive
    stroke('black');
    fill('#2F2C2C');
    quad(0, 60 * scaleFactor, 200 * scaleFactor, 400 * scaleFactor,
         0, height, 130 * scaleFactor, 5 * scaleFactor);
    quad(0, 40 * scaleFactor, 20 * scaleFactor, 500 * scaleFactor,
         70 * scaleFactor, 300 * scaleFactor, 230 * scaleFactor, 19 * scaleFactor);

    // ========== BUILD AND COLOR THE HULL ==========
    // Incorporate the scaleFactor to variable to each measurement of the shape so it's responsive
    stroke('black');
    fill('#35393b');
    quad(200 * scaleFactor, 200 * scaleFactor, 220 * scaleFactor, 350 * scaleFactor,
         width, 350 * scaleFactor, width, 200 * scaleFactor);

    fill('white');
    quad(197 * scaleFactor, 180 * scaleFactor, 200 * scaleFactor, 200 * scaleFactor,
         width, 200 * scaleFactor, width, 180 * scaleFactor);

    fill('#940404');
    quad(220 * scaleFactor, 351 * scaleFactor, 240 * scaleFactor, 380 * scaleFactor,
         width, 380 * scaleFactor, width, 351 * scaleFactor);

    // ========== BUILD AND COLOR THE MAST LINES ==========
    // Incorporate the scaleFactor to variable to each measurement of the shape so it's responsive
    stroke('darkgray');
    strokeWeight(3);
    line(200 * scaleFactor, 180 * scaleFactor, 300 * scaleFactor, 0);
    line(400 * scaleFactor, 180 * scaleFactor, 500 * scaleFactor, 0);
    line(550 * scaleFactor, 180 * scaleFactor, 580 * scaleFactor, 0);
    line(450 * scaleFactor, 180 * scaleFactor, 500 * scaleFactor, 0);

    // ========== BUILD AND COLOR THE LOOKOUT MAST ==========
    // Incorporate the scaleFactor to variable to each measurement of the shape so it's responsive
    stroke('black');
    strokeWeight(1);
    rect(640 * scaleFactor, 0, 50 * scaleFactor, 180 * scaleFactor);
    fill('beige');

    // CREATE THE LOOKOUT POST
    // Incorporate the scaleFactor to variable to each measurement of the shape so it's responsive
    arc(640 * scaleFactor, 50 * scaleFactor,
        85 * scaleFactor, 18 * scaleFactor,
        45, 5);

    // ========== BUILD AND COLOR THE WAVES ==========
    fill('rgba(8, 36, 96, 0.85)');
    beginShape();
    let xoff = 0;
    for (let x = 0; x <= width; x += 10) {
        let y = map(noise(xoff, yoff), 0, 1, height * 0.8, height * 0.6);
        vertex(x, y);
        xoff += 0.05;
    }
    yoff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);

    // ========== PORTHOLES ==========
    drawGrid(scaleFactor);
}

// BUILD AND COLOR THE PORT HOLES ALONGSIDE THE HULL
function drawGrid(scaleFactor) {
    fill('#ccad00');
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 10; j++) {
            circle((i * 45 * scaleFactor) + 220 * scaleFactor, 190 * scaleFactor, 10 * scaleFactor);
            circle((i * 60 * scaleFactor) + 490 * scaleFactor, 220 * scaleFactor, 12 * scaleFactor);
            circle((i * 60 * scaleFactor) + 250 * scaleFactor, 250 * scaleFactor, 12 * scaleFactor);
            circle((i * 60 * scaleFactor) + 310 * scaleFactor, 285 * scaleFactor, 12 * scaleFactor);
            circle((i * 60 * scaleFactor) + 430 * scaleFactor, 320 * scaleFactor, 12 * scaleFactor);
        }
    }
}

// DRAW STARS
class Star {
    constructor() {
        this.x = random(width);
        this.y = random(height * 0.6); //draw stars in top 60% of the canvas
        this.size = random(0.25, 3);
        this.t = random(TAU);
    }

    draw() {
        this.t += 0.1;
        let scale = this.size + sin(this.t) * 1;
        noStroke();
        fill('white');
        ellipse(this.x, this.y, scale, scale);
    }
}

// RESIZE CANVAS WHEN WINDOW CHANGES
function windowResized() {
    resizeCanvas(windowWidth * 0.95, windowHeight * 0.8);
}








// let yoff = 0.0; // 2nd dimension of perlin noise
// let stars = [];

// function setup() {
//     createCanvas(710, 500);

//     for (var i = 0; i < 1000; i++) {
// 		stars[i] = new Star();
// 	}
// }

// function draw() {
//     background(20);

//     for (var i = 0; i < stars.length; i++) {
// 		stars[i].draw();
// 	}
//     //BUILD AND COLOR ICEBERG
//     stroke('black');
//     fill('#2F2C2C'); //colors iceberg
//     quad(0, 60, 200, 400, 0, 600, 130, 5);
//     quad(0, 40, 20, 500, 70, 300, 230, 19);

//     //BUILD AND COLOR THE HULL
//     stroke('black');
//     fill('#35393b');
//     quad(200, 200, 220, 350, 710, 350, 710, 200);
//     fill('white');
//     quad(197, 180, 200, 200, 710, 200, 710, 180); 
//     fill('#940404');
//     quad(220, 351, 240, 380, 710, 380, 710, 351);
    
//     //BUILD THE LINES THAT HOLD THE MAST
//     stroke('darkgray');
//     strokeWeight(3); //changed the strokeweight for all lines outside of mast lines to default
//     line(200, 180, 300, 0);
//     line(400, 180, 500, 0);
//     line(550, 180, 580, 0);
//     line(450, 180, 500, 0);
//     fill('#8c7c6c');
    
//     //BUILD THE LOOKOUT MAST
//     stroke('black');
//     strokeWeight(1);
//     rect(640, 0, 50, 180);
//     fill('beige');
//     //square(600, 20, 40);

//     //CREATE THE LOOKOUT POST
//     arc(640, 50, 85, 18, 45, 50 - 45);
    
    
//     fill('rgba(8, 36, 96, 0.85)'); //colors the noise wave - added transparency

//     // DRAW A POLYGON OUT OF THE WAVE POINTS
//     beginShape();

//     let xoff = 0; // Option #1: 2D Noise
//     // let xoff = yoff; // Option #2: 1D Noise

//     // Iterate over horizontal pixels
//     for (let x = 0; x <= width; x += 10) {
//         // Calculate a y value according to noise, map to
//         // Option #1: 2D Noise
//         let y = map(noise(xoff, yoff), 0, 1, 400, 300);

//         // Set the vertex
//         vertex(x, y);
//         // Increment x dimension for noise
//         xoff += 0.05;

//     }
//     // increment y dimension for noise
//     yoff += 0.01;
//     vertex(width, height);
//     vertex(0, height);
//     endShape(CLOSE);
//     drawGrid();
// }

// //CREATE THE PORT HOLES ALONGSIDE THE HULL
// function drawGrid(){
//     fill('#ccad00');
//     for (var i = 0; i < 12; i++) {
//         for (var j = 0; j < 10; j++) {
//             circle((i * 45) + 220, 190, 10); //1st row along white part of hull
//             circle((i * 60) + 490, 220, 12); //2nd row - stars about 5 holes behind the 3rd row
//             circle((i * 60) + 250, 250, 12); //3rd row - starts the closest to the edge of hull
//             circle((i * 60) + 310, 285, 12); //4th row - starts 1 port hole behind 3rd
//             circle((i * 60) + 430, 320, 12); //5th row - starts 3 holes behind the 4th row
//            }  
//     }
// }

// // DRAW STARS
// class Star {
// 	constructor() {
// 		this.x = random(width);
// 		this.y = random(height);
// 		this.size = random(0.25, 3);
// 		this.t = random(TAU);
// 	}
	
// 	draw() {
// 		this.t += 0.1; //higher #, the faster stars move 
// 		var scale = this.size + sin(this.t) * 1; //higher #, bigger the dots
// 		noStroke();
//         fill('white');
// 		ellipse(this.x, this.y, scale, scale);
// 	}
// }

