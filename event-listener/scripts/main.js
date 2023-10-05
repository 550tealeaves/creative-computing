//Select the element you want to add event listener to 
let btn = document.querySelector('.btn');
//Add eventListener - 
//(1) define the type of event - ie clicked
//(2) Define function and pass in the parameters
btn.addEventListener('mouseover', function () {
    let showMe = document.querySelector('.show-me');
    showMe.style.opacity = '1';
    showMe.scrollTo['font-size'] = '190px';
    showMe.style.transform = 'skew(30deg)';
})
window.addEventListener('scroll', function () {
    console.log("yes, I'm scrolling");
})


