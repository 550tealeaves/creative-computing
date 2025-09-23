//CHANGES THE IMAGE SIZE AS YOU SCROLL
document.addEventListener('DOMContentLoaded', async function () {
    function changeTrainPicSize(widthPercent, heightPercent) {
        let trainPic = document.querySelector('.ball');
        trainPic.style.width = widthPercent + 'vw';   // % of viewport width
        trainPic.style.height = heightPercent + 'vh'; // % of viewport height
    }

    // INSTANTIATE THE SCROLLAMA
    const scroller = scrollama();
    let numberSteps = document.querySelectorAll('.scroll-step').length;

    scroller
        .setup({ step: '.scroll-step' })
        .onStepEnter((response) => {
            // RESIZE TRAIN 
            let desiredSize = response.element.getAttribute('data-size');
            if (desiredSize) {
                changeTrainPicSize(desiredSize, desiredSize);
            }

            // PLAY AUDIO when entering a step
            const audios = response.element.querySelectorAll("audio");
            document.querySelectorAll("audio").forEach(a => {
                a.pause();
                a.currentTime = 0;
            });

            if (audios.length > 0) {
                // PLAY 1ST AUDIO
                audios[0].play();

                // IF THERE IS A 2ND AUDIO, WAIT UNTIL THE 1ST ENDS TO START THE NEXT
                if (audios.length > 1) {
                    audios[0].addEventListener("ended", () => {
                        audios[1].play();
                    }, { once: true });
                }
            }
        })
        .onStepExit((response) => {
            // RESIZE THE TRAIN AT THE END
            if (response.index == numberSteps - 1) {
                changeTrainPicSize(25, 25); // train ends at 25vw x 25vh
            }

            // STOP AUDIO WHEN LEAVING STEP
            const audios = response.element.querySelectorAll("audio");
            audios.forEach(a => {
                a.pause();
                a.currentTime = 0;
            });
        });
});

//AUTOMATIC SCROLLING BY PRESSING ENTER
let scrollerID;
let paused = true;
let speed = 1; // 1 - Fast | 2 - Medium | 3 - Slow
let interval = speed * 8;

function startScroll() {
    let id = setInterval(function () {
        window.scrollBy(0, 2);
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            stopScroll();
        }
    }, interval);
    return id;
}
function stopScroll() {
    clearInterval(scrollerID);
}

document.body.addEventListener('keypress', function (event) {
    if (event.which == 13) { // Enter key
        if (paused) {
            scrollerID = startScroll();
            paused = false;
        } else {
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

//MOVE THE TRAIN ONTO THE TRACK (responsive centering)
let moveTrain = document.querySelector('.ball');
moveTrain.addEventListener('mouseover', function () {
    moveTrain.classList.add('on-track');
});

//MUTE / UNMUTE BUTTON
var sound = true;
function muter() {
    if (sound === true) {
        document.querySelectorAll("audio").forEach(a => a.muted = true);
        sound = false;
        document.querySelector('button').textContent = 'Sound';
    } else {
        document.querySelectorAll("audio").forEach(a => a.muted = false);
        sound = true;
        document.querySelector('button').textContent = 'Mute';
    }
}
document.querySelector('button').addEventListener('click', muter);

















// //CHANGES THE IMAGE SIZE AS YOU SCROLL
// document.addEventListener('DOMContentLoaded', async function () {
//     function changeTrainPicSize(width, height) {
//         console.log('measures', width, height);
//         let trainPic = document.querySelector('.ball');
//         trainPic.style.width = width + 'px';
//         trainPic.style.height = height + 'px';
//     }

//     // INSTANTIATE THE SCROLLAMA
//     const scroller = scrollama();

//     let numberSteps = document.querySelectorAll('.scroll-step').length;
//     console.log(numberSteps);

//     scroller
//         .setup({ step: '.scroll-step' })
//         .onStepEnter((response) => {
//             // RESIZE TRAIN 
//             let desiredSize = response.element.getAttribute('data-size');

//             if (desiredSize) {
//                 changeTrainPicSize(desiredSize, desiredSize);
//             }

//             // PLAY AUDIO when entering a step
//             const audios = response.element.querySelectorAll("audio");
//             document.querySelectorAll("audio").forEach(a => {
//                 a.pause();
//                 a.currentTime = 0;
//             });
//             if (audios.length > 0) {
//           // PLAY 1ST AUDIO
//           audios[0].play();

//           // IF THERE IS A 2ND AUDIO, WAIT UNTIL THE 1ST ENDS TO START THE NEXT
//           if (audios.length > 1) {
//               audios[0].addEventListener("ended", () => {
//                   audios[1].play();
//               }, { once: true });
//           }
//       }
//   })
//         .onStepExit((response) => {
//             // RESIZE THE TRAIN AT THE END
//             if (response.index == numberSteps - 1) {
//                 changeTrainPicSize(500, 500);
//             }

//       // STOP AUDIO WHEN LEAVING STEP
//         const audios = response.element.querySelectorAll("audio");
//             audios.forEach(a => {
//                 a.pause();
//                 a.currentTime = 0;
//             });
//         });
// }); 

// //AUTOMATIC SCROLLING BY PRESSING ENTER - https://codepen.io/shrutibalasa/pen/jOWgPmY
// //THIS WORKS WHEN YOU TEST IT A NEW FILE BUT IT'S NOT WORKING HERE
// let scrollerID;
// let paused = true;
// let speed = 1; // 1 - Fast | 2 - Medium | 3 - Slow
// let interval = speed * 8;

// function startScroll() {
//     let id = setInterval(function () {
//         window.scrollBy(0, 2);
//         if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//             // Reached end of page
//             stopScroll();
//         }
//     }, interval);
//     return id;
// }
// console.log('scroll', interval);

// function stopScroll() {
//     clearInterval(scrollerID);
// }

// document.body.addEventListener('keypress', function (event) {
//     if (event.which == 13 || event.which == 13) { //NOT SURE WHY "WHICH" ARE STRUCKTHROUGH
//         // It's the 'Enter' key
//         if (paused == true) {
//             scrollerID = startScroll();
//             paused = false;
//         }
//         else {
//             stopScroll();
//             paused = true;
//         }
//     }
// }, true);



// //CHANGE THE TEXT FIRST USING CLICK EVENT
// let changeText = document.querySelector('.intro');
// changeText.addEventListener('click', function () {
// changeText.textContent = "HOVER OVER THE TRAIN ICON AND THEN SCROLL";
// changeText.style.color = 'red';
// changeText.style.position = 'relative';
// });



// //MOVE THE TRAIN ONTO THE TRACK
// let moveTrain = document.querySelector('.ball');
// moveTrain.addEventListener('mouseover', function () {
//     moveTrain.style.position = 'relative';
//     moveTrain.style.right = '24em'; //this centers train on track 
// });


// //NOT SURE IF ATTEMPT #4 WORKS BUT IT DOESN'T SHOW ERRORS
// var sound = true;

// function muter() {
//     if (sound === true) {
//         $("embed").prop('muted', true);
//         sound = false;
//         $('button').text('Sound');
//     } else {
//         $("embed").prop('muted', false);
//         sound = true;
//         $('button').text('Mute');
//     }
// }

// $('button').click(function () {
//     muter();
// });

// //muter.reset();



