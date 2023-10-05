let div = document.createElement('div'); //create element
div.classList.add('btn'); //add class to element

//add element to page - must be added to a parent
document.querySelector('.container').appendChild(div);

//add and remove classes
div.classList.add('btn-click');
div.classList.remove('btn');

div.innerText = 'dude whats up';
document.querySelector('h1').innerText = 'this is now an official header'

//select element to reference
let header = document.querySelector('h1');
//change one style at a time
header.style.color = 'red';
//if the style has a dash in it - you have to reference it using brackets
header.style["padding-top"] = "10px";

//i can also specify multiple styles at once. however if i do this, i will overwrite all the styles that were applied (no longer red)
header.style = 'font-family: monospace; font-size: 60px';

//we can also straight up edit the HTML by specifying it all to one string- but this will replace the element entirely - notice how our previous div element is gone and replaced by the string we specified

document.querySelector('.btn-click').innerHTML = '<div class="test-outer"><div class="test-inner">this is not a drill</div></div>'
