var field;
var w, h, tow, toh;
var x, y, tox, toy;
//var zoom = .005; //zoom step per mouse tick 

function preload() {
    field = loadImage("field.png");
    player = loadImage("player.png");
    jackie = loadImage("jackie.PNG");
    hank = loadImage("hank-aaron.png");
    satchel = loadImage("satchel-paige.png");
    larry = loadImage("larry-doby.png");
    moses = loadImage("moses-fleetwood-walker.png");
    frank = loadImage("frank-robinson.png");
    mookie = loadImage("mookie-betts.png");
    jeter = loadImage("derek-jeter.png");
    prince = loadImage("prince-fielder.png");
    randolph = loadImage("willie-randolph.png");
    bonilla = loadImage("bobby-bonilla.png");
}

//code from here: https://gist.github.com/companje/5478fff07a18a1f4806df4cf77ae1048

function setup() {
    createCanvas(windowWidth, windowHeight);
    w = currentImageWidth = field.width;
    h = currentImageHeight = field.height;
    x = tox = w / 2;
    y = toy = h / 2;
  }



function draw() {
    background(255); //change background color to white

    image(field, x - w / 2, y - h / 2, windowWidth, windowHeight);
    image(player, mouseX-50, mouseY-50, 100, 100); //moves player image based on cursor position mouseX-50 (moves cursor to right and puts it on img, mouseY-50 moves cursor down img, if no #s, then default cursor is up and to left of img) - last 2 numbers adjusts size (w,h) - https://editor.p5js.org/mellerbr/sketches/Jhz5uwM5
    
    // ADD THE IMAGES WITH AN X/Y, W/H - Smaller the divisor for x = moves pic to the right. Smaller divisor for y = moves the pic down
    //The higher the positive # of X, more it moves to right, the higher the positive # of y, the more it moves down - higher the # neg # of y, moves pic up
    
    image(jackie, x+240, y+250, 100, 100); //batter
    image(hank, x+140, y+10, 100, 100); //runner
    image(satchel, x+330, y+75, 100, 100); //pitcher
    image(larry, x+330, y-170, 100, 100); //center-fielder
    image(moses, x+330, y+300, 65, 65); //catcher
    image(frank, x+90, y-130, 60, 100); //left fielder
    image(mookie, x+550, y-100, 100, 100); //right fielder
    image(jeter, x+220, y-80, 80, 100); //shortstop
    image(prince, x+540, y+80, 70, 100); //first baseman
    image(randolph, x+300, y-80, 150, 100); //second baseman
    image(bonilla, x+70, y+80, 100, 100); //third baseman
}