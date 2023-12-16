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

//CHANGE THE STARTING STATEMENT WITH CLICK AND THEN USE scrollLeft FUNCTION TO MOVE IT ACROSS THE SCREEN
// let changeText = document.querySelector('.intro');
// changeText.addEventListener('click', function(scrollLeft){
//     changeText.textContent = "STAND CLEAR THE CLOSING DOORS, PLEASE";
//     changeText.style.color = 'red';
//     changeText.style.position = 'relative';
//     changeText.style.left = '100%';
//     document.getElementById("intro");
//     setTimeout(scrollLeft, 10);
// });
// scrollLeft();


//ALTERNATIVE WAY TO WRITE//

//CHANGE THE TEXT FIRST USING CLICK EVENT
let changeText = document.querySelector('.intro');
changeText.addEventListener('click', function () {
changeText.textContent = "STAND CLEAR THE CLOSING DOORS, PLEASE";
changeText.style.color = 'red';
changeText.style.position = 'relative';
});
