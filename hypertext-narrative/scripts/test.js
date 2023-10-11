// Initialize Scrollama
const scroller = scrollama();

function handleStepEnter(response) {
    // This function will be called when a new step/section enters the viewport
    const { element, index, direction } = response;

    // You can add animations or content changes based on the current step
    // Example: If you want to change the background color of the section
    element.style.backgroundColor = 'lightblue';
}

function handleStepExit(response) {
    // This function will be called when a step/section exits the viewport
    // You can reset any animations or content changes here
}

// Reverse the order of sections
const steps = Array.from(document.querySelectorAll('.scrollama-section')).reverse();

// Configure Scrollama
scroller
    .setup({
        step: steps, // Reversed order of your sections
        offset: 0.5, // Adjust this value for when you want the section to be considered "in view"
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

// Initialize Scrollama
scroller.init();