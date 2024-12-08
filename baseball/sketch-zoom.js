var img;
var player;
var w, h, currentImageWidth, currentImageHeight;
var x, y, tox, toy;
var zoom = 0.01; //zoom step per mouse tick

function preload() {
  img = loadImage("baseball.png");
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
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = currentImageWidth = img.width;
  h = currentImageHeight = img.height;
  x = tox = w / 2;
  y = toy = h / 2;
  playerWidth = 200;
  playerHeight = 250;

  player.resize(playerWidth, playerHeight); //this doesn't work to change size, it changes the resolution
}

function draw() {
  background(0);
  //image(player, mouseX, 11,15,15); //this line doesn't do anything

  //tween/smooth motion
  x = lerp(x, tox, 0.1);
  y = lerp(y, toy, 0.1);
  w = lerp(w, currentImageWidth, 0.1);
  h = lerp(h, currentImageHeight, 0.1);

  image(img, x - w / 2, y - h / 2, w, h);
  image(player, mouseX-50, mouseY-50, 100, 100); //moves player image based on cursor position mouseX-50 (moves cursor to right and puts it on img, mouseY-50 moves cursor down img, if no #s, then default cursor is up and to left of img) - last 2 numbers adjusts size (w,h) - https://editor.p5js.org/mellerbr/sketches/Jhz5uwM5
  image(jackie, x - 130, y + 130, 100, 100); // batter
  image(hank, x - 220, y - 130, 100, 100); //runner
  image(satchel, x-25, y - 40, 100, 100); //pitcher
  image(larry, x / 2.5, y / 26, 100, 100); //center-fielder
  image(moses, x - 45, y + 185, 65, 65); //catcher
  image(frank, x / 5.3, y / 10, 60, 100); //left fielder
  image(mookie, x / 1.8, y / 10, 100, 100); //right fielder
  image(jeter, x / 3, y / 8.2, 80, 100); //shortstop
  image(prince, x / 2, y / 4, 80, 100); //first baseman
}

function mouseDragged() {
  let maxX = currentImageWidth / 2;
  let minX = width - maxX;
  let maxY = currentImageHeight / 2;
  let minY = height - maxY;
  
  console.log(JSON.stringify({minX, maxX,minY,maxY}));
  tox = constrain(tox + mouseX - pmouseX, minX, maxX);
  toy = constrain(toy + mouseY - pmouseY, minY, maxY);
}

function mouseWheel(event) {
  var delta = event.wheelDeltaY;
  // console.log(event);
  
  // TODO: figure out where on the image the mouse cursor is
  // Figure how how much that point will shift based on the scale
  // Adjust the tox and toy to compensate (thus keeping the part of the image where the mouse is stationary.
  
  currentImageWidth *= delta * zoom + 1;
  currentImageHeight *= delta * zoom + 1;
  
  // Check constraints
  if (delta > 0) {
    //zoom in - higher the # = the more you zoom in
    if (currentImageWidth > 4 * width) {
      currentImageWidth = 4 * width;
      currentImageHeight = 4 * height;
      //max zoom
    }
  } else if (delta < 0) {
    //zoom out
    if (currentImageWidth < width) {
      //min zoom
      currentImageWidth = width;
      currentImageHeight = height;
    }
  }
  
  //adjust x and y if out of bounds
  let maxX = currentImageWidth / 2;
  let minX = width - maxX;
  let maxY = currentImageHeight / 2;
  let minY = height - maxY;
  
  tox = constrain(tox, minX, maxX);
  toy = constrain(toy, minY, maxY);

  return false;
}