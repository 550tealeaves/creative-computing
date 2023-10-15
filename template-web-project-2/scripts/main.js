let div = document.createElement('div'); //create element
div.classList.add('btn'); //add class to element


//ADD ELEMENT TO PAGE - MUST BE ADDED TO A PARENT
document.querySelector('.container').appendChild(div);


//ADD/REMOVE CLASSES
div.classList.add('btn-click');
div.classList.remove('btn');

div.innerText = 'dude whats up';
document.querySelector('h1').innerText = 'this is now an official header'

//SELECT ELEMENT TO REFERENCE
let header = document.querySelector('h1');

//CHANGE STYLE ONE AT A TIME
header.style.color = 'chocolate';
//if the style has a dash in it - you have to reference it using brackets
header.style["padding-top"] = "80px"; //adds padding-top to header
header.style['margin'] = '25px'; //adds margin to header
header.style['border'] = '4px solid purple'; //adds border to header
div.style['border'] = '40px solid red'; //adds red border to div
div.style['margin'] = '60px 43px'; //adds margin to div


//CAN SPECIFY MULTIPLE STYLES AT ONCE 
//But, this OVERWRITES all the styles that were previously applied (no longer red)
header.style = 'font-family: monospace; font-size: 60px; color: salmon; border: 14px dashed violet; text-align: right; margin: 40px; box-shadow: inset 50px 1em gold';
div.style = 'font-style: italic; text-decoration: underline wavy orange 6px; font-size: 25px; border: 20px dashed purple; text-align: center; margin: 19px; padding: 28px; box-shadow: 40px -26px teal;'


// Can also straight up edit the HTML by specifying it all to one string- but this will replace the element entirely - notice how our previous div element is gone and replaced by the string we specified

document.querySelector('.btn-click').innerHTML = '<div class="test-outer"><div class="test-inner">this is not a drill, remain calm.</div></div>'

