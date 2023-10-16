//Can add as many colors
let colorlist = ["gold", "yellow", "turquoise", "red", 'green', 'indigo', 'pink'];

function setup() {
    //this function runs once when the webpage is loaded
    //w/in this function, you can use p5
    createCanvas(windowWidth * 0.8, windowHeight * 0.8); //canvas dimensions
    //background(255); 
    background(29); //background color
}

function draw() {
    //this functions runs many times every second!
    //w/in this function, you can use p5 syntax
    noStroke();
    fill(random(colorlist)); //apply the colorlist array as fill for circles
    //ellipse(mouseX, mouseY, 25, 25);
    ellipse(mouseX, mouseY, 55, 29); //changes shape of ellipse
}


//outside of the setup and draw functions (which are automatically called) - the rest of your code here is plain old javascript