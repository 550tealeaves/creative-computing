console.log('blah');

//Used https://www.youtube.com/watch?v=nHwwCGIRzGo to create scrolling text
var style = document.createElement('style');
var position = 'left'; //determines direction text move - l,r,t,b

style.innerHTML = `@keyframes my-animation{
    0%{${position}: -${document.querySelector('.top-left').offsetWidth + 10}px;}
    100%{${position}: 100%;}
}`;

document.head.append(style);


//SCROLLYTELLING - https://pudding.cool/process/how-to-implement-scrollytelling/
var handleItemFocus = function (event, item) {
    var step = item.data.step
    graphic.update(step)
}

var handleContainerScroll = function (event) {
    var bottom = false
    var fixed = false

    var bb = $graphicEl[0].getBoundingClientRect()
    var bottomFromTop = bb.bottom - viewportHeight

    if (bb.top < 0 && bottomFromTop > 0) {
        bottom = false
        fixed = true
    } else if (bb.top < 0 && bottomFromTop < 0) {
        bottom = true
        fixed = false
    }

    toggle(fixed, bottom)
}

$graphicEl.scrollStory({
    contentSelector: '.trigger',
    triggerOffset: halfViewportHeight,
    itemfocus: handleItemFocus,
    containerscroll: handleContainerScroll,
})