// console.log("Webpack is working");
const MovingObject = require('../src/moving_object.js');
console.log(MovingObject);

document.addEventListener("DOMContentLoaded", function(){




    // const canvas = document.getElementById('game-canvas');
    // const ctx = canvas.getContext('2d');
    window.MovingObject = MovingObject;
    const b = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    });

    b.print();
    

    
    // Need to draw moving object here.
    // How to fill in the window? May need webpack
    // ctx.beginPath();
    // ctx.arc(100, 100, 100, 0, 2 * Math.PI, false);
    // ctx.fillStyle = 'red';
    // ctx.fill();


    

});