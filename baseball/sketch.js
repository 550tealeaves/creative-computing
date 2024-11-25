var img;
var w, h, tow, toh;
var x, y, tox, toy;
var zoom = .005; //zoom step per mouse tick 

function preload() {
    img = loadImage("Baseball.png");
}

//code from here: https://gist.github.com/companje/5478fff07a18a1f4806df4cf77ae1048

function setup() {
    //noCursor(); //if active, no cursor shows on the screen
    createCanvas(windowWidth, windowHeight);
    w = tow = img.width;
    h = toh = img.height;
    x = tox = w / 1.25; //higher the #, the more the image moves left
    y = toy = h / 2; //higher the #, the more the image moves up

    imageMode(CENTER); //centers the image
}

function draw() {
    background(255); //change background color to white

    //tween/smooth motion
    x = lerp(x, tox, .1);
    y = lerp(y, toy, .1);
    w = lerp(w, tow, .1);
    h = lerp(h, toh, .1);

    image(img, x - w / 2, y - h / 2, w, h);
}

function mouseDragged() {
    tox += mouseX - pmouseX;
    toy += mouseY - pmouseY;
}

function mouseWheel(event) {
    var e = -event.delta;

    if (e > 0) { //zoom in
        for (var i = 0; i < e; i++) {
            if (tow > 30 * width) return; //max zoom
            tox -= zoom * (mouseX - tox);
            toy -= zoom * (mouseY - toy);
            tow *= zoom + 1;
            toh *= zoom + 1;
        }
    }

    if (e < 0) { //zoom out
        for (var i = 0; i < -e; i++) {
            if (tow < width) return; //min zoom
            tox += zoom / (zoom + 1) * (mouseX - tox);
            toy += zoom / (zoom + 1) * (mouseY - toy);
            toh /= zoom + 1;
            tow /= zoom + 1;
        }
    }
}