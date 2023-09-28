console.log('test');

//Add new element to the DOM
let x = document.createElement('div'); //creates element div
x.classList.add('btn');  //adds class btn to the element div

//Add content to new element
//x.innerText = 'Wow my first real javascript element' //adds this text to HTML 

//Can add more child elements using .innerHTML
x.innerHTML = '<h3>Here are my thoughts</h3><p>this is my first element</p><p>but not my last element</p>'

//Style the new element - easier to do in CSS
x.style.color = 'magenta' //makes it magenta
x.style['transform'] = 'skew(15deg)' //skews text by degrees

// //select element to reference
let header = document.querySelector('h1');
//change one style at a time
header.style.color = 'red';
//if the style has a dash in it - you have to reference it using brackets
header.style["padding-top"] = "40px";

document.querySelector('.container').appendChild(x); //select html element w/ class container and then will add the div, called x

console.log(document.querySelector('.container')) //this will search and see if there is a class "container" on the page


//FUNCTIONS
//this defines the function. a and b are variable placeholders
function addNumbers(a, b) {
    return a + b;
}

// now run the function
let result = addNumbers(5, 3);
console.log(result); // Output: 8



function makeElement(text) { //pass in parameter (can be named anything)
    // Create a new element & pass in the text parameter
let newParagraph = document.createElement(text); //insert parameter name into ()

// Add text content to the paragraph
newParagraph.innerHTML = "This is the new text element.";

// Add a class to the new paragraph
newParagraph.classList.add("new-text-element"); 

// Find the container element by its class
let container = document.querySelector(".container");

// Append the new paragraph to the element /w class container
container.appendChild(newParagraph);
}

//Call function (if called multiple times, will run again)
makeElement('TMNT rocks'); //pass in this text as argument so that it updates innerHTML
makeElement('Asking for ice-cream'); //pass in text so that it updates innerHTML



//Another way to add new text and elements using functions
makeElement('When you have to wake up early', 'div') //text & element

function makeElement(text, elementType) { //pass in parameters that represents the arguments above for makeElement("when...", 'div')
    // Create a new element & pass in the text parameter
    let newParagraph = document.createElement(elementType); //Create element based on the elementType argument (element passed into)

    // Add text content to the paragraph
    newParagraph.innerHTML = text; //passing in the text parameter = passing in "when you have..."

    // Add a class to the new paragraph
    newParagraph.classList.add("new-text-element");

    // Find the container element by its class
    let container = document.querySelector(".container");

    // Append the new paragraph to the element /w class container
    container.appendChild(newParagraph);
}

//Call function (if called multiple times, will run again)
makeElement("Isn't this a confusing question?", 'h2'); //pass in this argument (text, elementType) so that it shows on HTML
makeElement('Add some more marshmallows to the hot chocolate', 'h5'); //pass in this argument (text, elementType) so that it shows on HTML