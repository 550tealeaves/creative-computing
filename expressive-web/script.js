//this changes the size of the image as you scroll
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

    scroller
        .setup({ step: '.scroll-step' })
        .onStepEnter((response) => {
            // resize train, etc.

            // 🎵 PLAY AUDIO when entering a step
            const audios = response.element.querySelectorAll("audio");
            document.querySelectorAll("audio").forEach(a => {
                a.pause();
                a.currentTime = 0;
            });
            if (audios.length > 0) {
          // play the first audio
          audios[0].play();

          // if there's a second, wait until the first ends
          if (audios.length > 1) {
              audios[0].addEventListener("ended", () => {
                  audios[1].play();
              }, { once: true });
          }
      }
  })
        .onStepExit((response) => {
            // resize at last step, etc.
            if (response.index == numberSteps - 1) {
                changeTrainPicSize(500, 500);
            }

      // 🎵 STOP AUDIO when leaving step
        const audios = response.element.querySelectorAll("audio");
            audios.forEach(a => {
                a.pause();
                a.currentTime = 0;
            });
        });
}); 

//AUTOMATIC SCROLLING BY PRESSING ENTER - https://codepen.io/shrutibalasa/pen/jOWgPmY
//THIS WORKS WHEN YOU TEST IT A NEW FILE BUT IT'S NOT WORKING HERE
let scrollerID;
let paused = true;
let speed = 1; // 1 - Fast | 2 - Medium | 3 - Slow
let interval = speed * 8;

function startScroll() {
    let id = setInterval(function () {
        window.scrollBy(0, 2);
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // Reached end of page
            stopScroll();
        }
    }, interval);
    return id;
}
console.log('scroll', interval);

function stopScroll() {
    clearInterval(scrollerID);
}

document.body.addEventListener('keypress', function (event) {
    if (event.which == 13 || event.which == 13) { //NOT SURE WHY "WHICH" ARE STRUCKTHROUGH
        // It's the 'Enter' key
        if (paused == true) {
            scrollerID = startScroll();
            paused = false;
        }
        else {
            stopScroll();
            paused = true;
        }
    }
}, true);



//CHANGE THE TEXT FIRST USING CLICK EVENT
let changeText = document.querySelector('.intro');
changeText.addEventListener('click', function () {
changeText.textContent = "HOVER OVER THE TRAIN ICON AND THEN SCROLL";
changeText.style.color = 'red';
changeText.style.position = 'relative';
});



//MOVE THE TRAIN ONTO THE TRACK
let moveTrain = document.querySelector('.ball');
moveTrain.addEventListener('mouseover', function () {
    moveTrain.style.position = 'relative';
    moveTrain.style.right = '24em'; //this centers train on track 
});

//This works but the image just floats around and doesn't remain fixed as you scroll - also hard to know what initialX/initialY to set b/c final location changes based on the initial despite keeping moveImage() the same
// var image = document.getElementById('movingImage');

// // Set initial position
// //initialX = 20 & initial y = 10 puts the image at the bottom
// var initialX = -5;
// var initialY = -10;

// // Set the interval for animation
// var interval = setInterval(moveImage, 3); //lower the #, slower it moves

// function moveImage() {
//     // Update position
//     initialX += 8; // Change this value to control horizontal movement
//     initialY += 7; // Change this value to control vertical movement

//     // Apply new position
//     image.style.left = initialX + 'px';
//     image.style.bottom = initialY + 'px';

//     //Optional: Stop the animation after a certain condition (e.g., reached a specific position)
//     //initialX>=625 puts it at the center track
//     if (initialX >= 625) {
//         clearInterval(interval);
//     }
// }



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



// //Used this https://stackoverflow.com/questions/51254897/javascript-move-image-across-page-on-click-and-reset-image-to-original-location
// var moveTrain = null;
// var animate;

// function init() {
//     moveTrain = document.getElementById('ball');
//     moveTrain.style.position = 'relative';
//     moveTrain.style.top = '400px';
// }


// shiftTrain = moveTrain;
// shiftTrain.addEventListener('click', function (){
//     function moveTop(target) {
//         moveTrain.style.top = parseInt(moveTrain.style.top) - 10 + 'px';
//     if (parseInt(moveTrain.style.top) < target) {
//         moveTrain.style.top = target + 'px';
//     }

//     if (parseInt(moveTrain.style.top) - 10 > target) {
//         animate = setTimeout(function () { moveTop(target); }, 20);
//     }
//     else {
//         //add the wait here, currently 5 seconds
//         animate = setTimeout(function () { moveBack(400); }, 5000);
//     }
//     }

//     function moveBack(target) {
//         moveTrain.style.top = parseInt(moveTrain.style.top) + 10 + 'px';
//     if (parseInt(moveTrain.style.top) > target) {
//         moveTrain.style.top = target + 'px';
//     }

//     if (parseInt(moveTrain.style.top) + 10 < target) {
//         animate = setTimeout(function () { moveBack(400); }, 20);
//     }
//     }

// })



//function stop(){
//clearTimeout(animate);
//imgObj.style.top = '0px'; 
//}

// window.onload = init;









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



//NOT SURE IF ATTEMPT #4 WORKS BUT IT DOESN'T SHOW ERRORS
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



