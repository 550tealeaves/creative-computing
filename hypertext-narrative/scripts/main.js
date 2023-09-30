console.log('blah');

//Used https://www.youtube.com/watch?v=nHwwCGIRzGo to create scrolling text
var style = document.createElement('style');
var position = 'left'; //determines direction text move - l,r,t,b

style.innerHTML = `@keyframes my-animation{
    0%{${position}: -${document.querySelector('.top-left').offsetWidth + 10}px;}
    100%{${position}: 100%;}
}`;

document.head.append(style);
