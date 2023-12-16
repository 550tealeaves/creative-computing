document.addEventListener('DOMContentLoaded', async function () {
    function changeTrainPicSize(width, height) {
        console.log('measures', width, height);
        let trainPic = document.querySelector('.ball');
        trainPic.style.width = width + 'px';
        trainPic.style.height = height + 'px';
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
                changeTrainPicSize(desiredSize, desiredSize);
            }

            // { element, index, direction }
        })
        .onStepExit((response) => {
            //detect if it's the last step
            if (response.index == numberSteps - 1) {
                changeTrainPicSize(400, 400);
            }
        });
});


let openStatement = document.querySelector('.intro');
openStatement.addEventListener('load', function(){
    let start = document.querySelector('.intro');
    start.style.transition = 'transform 0.2s ease-in-out';
    start.style.position = 'absolute';
    start.style.position.top = '10%';
});