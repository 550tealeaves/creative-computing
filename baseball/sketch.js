var img;
var w, h, currentImageWidth, currentImageHeight;
var x, y, tox, toy;
var zoom = 0.01; //zoom step per mouse tick

function preload() {
  img = loadImage("baseball.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = currentImageWidth = img.width;
  h = currentImageHeight = img.height;
  x = tox = w / 2;
  y = toy = h / 2;
}

function draw() {
  background(0);

  //tween/smooth motion
  x = lerp(x, tox, 0.1);
  y = lerp(y, toy, 0.1);
  w = lerp(w, currentImageWidth, 0.1);
  h = lerp(h, currentImageHeight, 0.1);

  image(img, x - w / 2, y - h / 2, w, h);
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