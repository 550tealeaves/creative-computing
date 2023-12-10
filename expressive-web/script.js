function setup() {
    createCanvas(innerWidth, innerHeight);
    // By default angles in p5js are specified in radians.
    // This switches to degree mode so we can specify
    // angles from 0 to 360 instead of 0 to 2 * PI
    angleMode(DEGREES);
    // Let's make our canvas light blue
    background(51, 0.4);
}

function draw() {    
   // line(x1, y1, x2, y2)
    stroke('red');
    strokeWeight(2);
    line(width, height, (width/10), (height/6));
}


document.addEventListener('DOMContentLoaded', async function () {
    function changeBallSize(width, height) {
        console.log(width, height);
        let ball = document.querySelector('.ball');
        ball.style.width = width + 'px';
        ball.style.height = height + 'px';
    }

    // instantiate the scrollama
    const scroller = scrollama();

    let numberSteps = document.querySelectorAll('.scroll-step').length;
    console.log(numberSteps);

    // setup the instance, pass callback functions
    scroller
        .setup({
            step: '.scroll-step',
        })
        .onStepEnter((response) => {
            let desiredSize = response.element.getAttribute('data-size');

            if (desiredSize) {
                changeBallSize(desiredSize, desiredSize);
            }

            // { element, index, direction }
        })
        .onStepExit((response) => {
            //detect if it's the last step
            if (response.index == numberSteps - 1) {
                changeBallSize(30, 30);
            }
        });
});
