document.addEventListener('DOMContentLoaded', function () {

    //an array holding links to all of the images (some of the repeat)
    let imgLinks = [
        'https://unsplash.com/photos/pasta-with-sauce-on-white-ceramic-plate-0y6eMd8vevA',
        'https://unsplash.com/photos/food-photography-of-baked-dish-on-plate-14HKCEgadoU',
        'https://unsplash.com/photos/cookies-in-clear-glass-bowl--09BJOxi9CM',
        'https://unsplash.com/photos/black-bicycle-on-green-grass-field-during-sunset-XHlmZUd9SOg',
        'https://unsplash.com/photos/brown-canoe-on-water-7KJdg5Hi6XM',
        'https://unsplash.com/photos/assorted-picture-frames-on-wall-acowe0pCVBg',
        'https://unsplash.com/photos/people-inside-dinosaur-fossil-museum-during-daytime-tXmc2mVDxJc',
        'https://unsplash.com/photos/city-skyline-with-famous-building-conciergerie-which-used-to-be-a-prison-with-a-bridge-over-the-river-seine-in-paris-aGTPv7ghZYc',
        'https://unsplash.com/photos/city-skyline-with-famous-building-conciergerie-which-used-to-be-a-prison-with-a-bridge-over-the-river-seine-in-paris-aGTPv7ghZYc',
        'https://unsplash.com/photos/brown-wooden-dock-near-calm-body-of-water-surrounded-by-trees-aRya3uMiNIA',
    ];

    //for each loop will go through each item in the array
    //same as a for loop, just a simpler syntax since you don't have to specify the start and end



    let container = document.querySelector('#container');
    imgLinks.forEach(function (d) {
        console.log(d);
        let newImg = document.createElement('img');
        newImg.src = d;
        //we've created a new image element, with a 'src' attribute that links to the url
        //now you have to add randomized styling to place it somewhere on the page
    })


});
