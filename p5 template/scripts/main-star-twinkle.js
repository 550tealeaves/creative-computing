//https://editor.p5js.org/claire89/sketches/3-34StcSX
var stars = [];

function setup() {
    createCanvas(600, 600);

    for (var i = 0; i < 1000; i++) {
        stars[i] = new Star();
    }
}

function draw() {
    background(3);

    for (var i = 0; i < stars.length; i++) {
        stars[i].draw();
    }
}


// star class //
class Star {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(3.15, 2); //increase #, bigger the dots
        this.t = random(TAU);
    }

    draw() {
        this.t += 0.1; //higher #, the faster stars move
        var scale = this.size + sin(this.t) * 2; //higher #, bigger the dots
        noStroke();
        fill('#ffff7f');
        ellipse(this.x, this.y, scale, scale);
    }
}
