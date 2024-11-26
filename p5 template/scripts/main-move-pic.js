//variables for each image
let cloud 
let sky
let eagle

function setup() {
  createCanvas(windowWidth, windowHeight);  
}

function preload(){
  //loading all three images
cloud = loadImage ('images/cloud.png');
sky = loadImage ('images/sky.jpg');
eagle = loadImage ('images/eagle.png');
}
  function draw() {
    //first image (sky) is used as background
    background (sky,600,400); 
    
    //the x,y axis coordinates
    //text(mouseX + "," + mouseY, 20, 20);
    
    //eagle image moving. Only the x axis is able to move freely
    image(eagle,mouseX,110,150,150);
    
    //the cloud image placement in the corner. 
    image (cloud,260,105);
    
    
  
  
}