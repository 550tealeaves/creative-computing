console.log('blah');

//was trying to create JS scrolling text but not working
var style = document.createElement('style');
var position = 'left'; //determines direction text move - l,r,t,b

style.innerHTML = `@keyframes my-animation{
    0%{${position}: -${document.querySelector('.top-left').offsetWidth + 10}px;}
    100%{${position}: 100%;}
}`;

document.head.append(style);
