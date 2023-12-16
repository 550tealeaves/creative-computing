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

//MOVE THE TRAIN ONTO THE TRACK
// let moveTrain = document.querySelector('.ball');
// moveTrain.addEventListener('click', function(){
//     // moveTrain.style.transform = 'rotate(20deg)';
//     moveTrain.style.position = 'relative';
//     moveTrain.style.right= '165%';
// });

//Used this https://stackoverflow.com/questions/51254897/javascript-move-image-across-page-on-click-and-reset-image-to-original-location
var moveTrain = null;
var animate;

function init() {
    moveTrain = document.getElementById('ball');
    moveTrain.style.position = 'relative';
    moveTrain.style.top = '400px';
}


shiftTrain = moveTrain;
shiftTrain.addEventListener('click', function (){
    function moveTop(target) {
        moveTrain.style.top = parseInt(moveTrain.style.top) - 10 + 'px';
    if (parseInt(moveTrain.style.top) < target) {
        moveTrain.style.top = target + 'px';
    }

    if (parseInt(moveTrain.style.top) - 10 > target) {
        animate = setTimeout(function () { moveTop(target); }, 20);
    }
    else {
        //add the wait here, currently 5 seconds
        animate = setTimeout(function () { moveBack(400); }, 5000);
    }
    }

    function moveBack(target) {
        moveTrain.style.top = parseInt(moveTrain.style.top) + 10 + 'px';
    if (parseInt(moveTrain.style.top) > target) {
        moveTrain.style.top = target + 'px';
    }

    if (parseInt(moveTrain.style.top) + 10 < target) {
        animate = setTimeout(function () { moveBack(400); }, 20);
    }
    }

})



//function stop(){
//clearTimeout(animate);
//imgObj.style.top = '0px'; 
//}

window.onload = init;









//STOP AUDIO FROM PLAYING ON LOAD
// window.ismuted = true; //ATTEMPT #1 DOESN'T WORK



//ATTEMPT #2 DOESN'T WORK
// document.onload = function () {
//     var audios = document.getElementById('embed');

//     for (var i = 0; i < audios.length; i++) {
//         audios[i].muted = true;
//     }
// }


//ATTEMPT #3 BELOW DOES NOT WORK
// let audio = document.getElementsByTagName('embed');
// if (ismuted === true) {
//     audio.muted = false;
//     ismuted = false;
// } else {
//     audio.muted = true;
//     ismuted = true;
// }

// function pauseAudio() {
//     if (audio && !audio.paused) {
//         audio.pause();
//         // audio.currentTime = 0; //starts sound at the beginning
//     }
// }

// function playAudio(sound) {
//     pauseAudio(); //pause current audio
//     audio = new Audio(); //saves reference
//     audio.sound = sound;
//     audio.play();
// }


var sound = true;

function muter() {
    if (sound === true) {
        $("embed").prop('muted', true);
        sound = false;
        $('button').text('Sound');
    } else {
        $("embed").prop('muted', false);
        sound = true;
        $('button').text('Mute');
    }
}

$('button').click(function () {
    muter();
});

//muter.reset();






//TRY TO GET THE SCROLLY SECTION AUTOMATICALLY MOVING UP WHEN PAGE LOADS

