document.addEventListener('DOMContentLoaded', function () {
    // Your code goes here

    let textHolder = [
        "What's my favorite ice cream? To reveal it a dream. I could eat it day and night. Best not to wear white.Whatever size serving, I eat every bit. CHOCOLATE",
        'fudge ripples through vanilla ice cream. peanut butter cups and chunks of chocolate.sweet driblets trickle down a sugar cone...',
        'I recently started a brand new diet.It lets you eat ice cream,you really should try it.',
        'Give me Ice cream!',
        'Mint Chocolate Green…',
        'butter pecan',
        'lavender',
        'Ice cream, ice cream in a bowl. Ice cream, ice cream in a cone.',
        'ice cream is my friend, you are not',
        'Versatile vanilla vindicates vivacious flavor',
    ];


    let imgLinks = [
        'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWNlJTIwY3JlYW18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY3JlYW18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        'https://images.unsplash.com/photo-1587563974073-6dabdbbadac1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        'https://images.unsplash.com/photo-1588685232180-8bb64cb4837a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        'https://images.unsplash.com/photo-1612639267275-7c4ae6a12d84?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        'https://images.unsplash.com/photo-1587563974670-b5181b459b30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        'https://images.unsplash.com/photo-1538489949601-cbabf5b0c105?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        'https://images.unsplash.com/photo-1579954115567-dff2eeb6fdeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        'https://images.unsplash.com/photo-1587563974073-6dabdbbadac1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        'https://images.unsplash.com/photo-1588685232180-8bb64cb4837a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        'https://images.unsplash.com/photo-1612639267275-7c4ae6a12d84?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        'https://images.unsplash.com/photo-1587563974670-b5181b459b30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        'https://images.unsplash.com/photo-1538489949601-cbabf5b0c105?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        'https://images.unsplash.com/photo-1579954115567-dff2eeb6fdeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    ];


    console.log(imgLinks[5])

    // Add images to page

    // First select the container we want to add images too
    let container = document.querySelector('#container');
    // Loop through the image array and add an image for each item in the array
    imgLinks.forEach((d) => {
        let newImg = document.createElement('img');
        newImg.src = d;
        //must use the "absolute" positioning in order to use the percents
        newImg.style.left = 90 * Math.random() + '%'; //math.random() will give # from 0-1 - 90*(0 to 1) will have any # from 0-90 - add %
        newImg.style.top = 90 * Math.random() + '%'; //math.random() will give # from 0-1 - 90*(0 to 1) will have any # from 0-90 - must add %
        container.appendChild(newImg);

        console.log('d', d); //will show the image web-links
    });


    // After adding images, we want to add click events to each image to remove them
    // So first we select *all* images on the page
    let imgs = document.querySelectorAll('img'); //select all the image elements
    console.log('imgs', imgs); //will show all the image links on the page

    // We loop through this selection of all images (an array)
    imgs.forEach((img) => { //for each img
        //for each image, we add an event listener that will change its styling on click
        img.addEventListener('click', () => {
            img.style.display = 'none'; //removes the image when clicked
        })
    })
});
