function setup() {
    createCanvas(700, 600);

    //loop  - creates several circles, separated by 50 - until reach width
    for (let x = 0; x <= width; x += 50) {
        fill(255, 0, 200);
        ellipse(x, 300, 25, 25);
    }

    //loop - create several circles seperated by 50px 
    for (let x = 0; x <= width; x += 50) {
        fill(25, 106, 210); //color
        ellipse(x, 100, 115, 25); //starts 100 pixels down - ellipse as width of 115 - overlaps
    }

    for (let x = 0; x <= width; x += 50) {
        fill(90, 6, 10);
        ellipse(x, 200, 15, 150);
    }

    //intro to conditionals - console log says "uh close enough"
    let year = 2019;


    if (year == 2015) {
        console.log("you're 6 years off my friend");
    } else if (year == 2016) {
        console.log("you're 5 years off my friend");
    } else if (year == 2017) {
        console.log("you're 4 years off my friend");
    } else if (year >= 2018) {
        console.log('uh close enough');
    } else {
        console.log('idk man');
    }



    function testFunction(p1, p2) {
        return p1 * p2;
    }

    let a = 5, b = 6;
    let c = testFunction(5, 6)
    console.log(c); // 30
}



let x = 5;
let y = 6;
let z = x + y;
console.log(z);