//https://p5js.org/examples/structure-create-graphics.html

let pg;

function setup() {
    createCanvas(710, 400);
    pg = createGraphics(500, 150);
}

function draw() {
    fill(0, 12);
    rect(0, 0, width, height);
    fill(255);
    noStroke();
    square(mouseX, mouseY, 50); //the square is shown outside of the canvas when moving cursor
    //ellipse(mouseX, mouseY, 120, 82);

    pg.background(51);
    pg.fill(116, 235, 52);
    pg.stroke(220, 184, 34);
    pg.ellipse(mouseX - 150, mouseY - 75, 90, 20); //when mouse is in canvas, changes to ellipse

    //Draw the offscreen buffer to the screen with image()
    image(pg, 150, 75);
}
