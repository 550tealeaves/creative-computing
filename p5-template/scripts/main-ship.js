// //INSPIRATIONS
// //https://editor.p5js.org/wvnl/sketches/5wnuHAXKd (star twinkle) 
// //https://p5js.org/examples/math-noise-wave.html (noise wave)


// Responsive code

    let yoff = 0.0; // 2nd dimension of perlin noise
    let stars = [];

    // base design size
    const baseWidth = 710;
    const baseHeight = 500;

    function setup() {
        createCanvas(windowWidth, windowHeight);

        // create starfield
        for (let i = 0; i < 1000; i++) {
            stars[i] = new Star();
        }
    }

    function draw() {
        background(20);

        // determine scale so artwork fits inside window without stretching
        let scaleFactor = min(width / baseWidth, height / baseHeight);

        // center the drawing
        translate((width - baseWidth * scaleFactor) / 2,
                (height - baseHeight * scaleFactor) / 2);
        scale(scaleFactor);

        // draw stars (in top 65% of base canvas)
        for (let i = 0; i < stars.length; i++) {
            stars[i].draw();
        }

        // ===== ICEBERG =====
        stroke('black');
        fill('#2F2C2C');
        quad(0, 60, 200, 400, 0, 600, 130, 5);
        quad(0, 40, 20, 500, 70, 300, 230, 19);

        // ===== HULL =====
        stroke('black');
        fill('#35393b');
        quad(200, 200, 220, 350, 710, 350, 710, 200);
        fill('white');
        quad(197, 180, 200, 200, 710, 200, 710, 180);
        fill('#940404');
        quad(220, 351, 240, 380, 710, 380, 710, 351);

        // ===== MAST LINES =====
        stroke('darkgray');
        strokeWeight(3);
        line(200, 180, 300, 0);
        line(400, 180, 500, 0);
        line(550, 180, 580, 0);
        line(450, 180, 500, 0);

        // ===== LOOKOUT MAST =====
        stroke('black');
        strokeWeight(1);
        fill('#8c7c6c');
        rect(640, 0, 50, 180);

        // Lookout post
        fill('beige');
        arc(640, 50, 85, 18, 45, 5);

        // ===== WAVES =====
        fill('rgba(8, 36, 96, 0.85)');
        beginShape();
        let xoff = 0;
        for (let x = 0; x <= baseWidth; x += 10) {
            let y = map(noise(xoff, yoff), 0, 1, 400, 300);
            vertex(x, y);
            xoff += 0.05;
        }
        yoff += 0.01;
        vertex(baseWidth, baseHeight);
        vertex(0, baseHeight);
        endShape(CLOSE);

        // ===== PORT HOLES =====
        drawGrid();
    }

    // CREATE THE PORT HOLES ALONGSIDE THE HULL
    function drawGrid() {
        fill('#ccad00');

        // Row 1 (y=190)
        for (let x = 220; x < 710; x += 45) {
            circle(x, 190, 10);
        }

        // Row 2 (y=220)
        for (let x = 490; x < 710; x += 60) {
            circle(x, 220, 12);
        }

        // Row 3 (y=250)
        for (let x = 250; x < 710; x += 60) {
            circle(x, 250, 12);
        }

        // Row 4 (y=285)
        for (let x = 310; x < 710; x += 60) {
            circle(x, 285, 12);
        }

        // Row 5 (y=320)
        for (let x = 430; x < 710; x += 60) {
            circle(x, 320, 12);
        }
    }

    // STAR CLASS
    class Star {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = random(baseWidth);
            this.y = random(baseHeight * 0.65); // top 65% of scene
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

    // resize canvas when window changes
    function windowResized() {
        resizeCanvas(windowWidth, windowHeight);

        // reset stars to stay in correct bounds
        stars = [];
        for (let i = 0; i < 1000; i++) {
            stars[i] = new Star();
        }
    }


























