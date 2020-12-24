// console.log("Webpack is working");
const MovingObject = require('../src/moving_object.js');
const Asteroid = require('../src/asteroid.js');

console.log(MovingObject);
console.log(Asteroid);

document.addEventListener("DOMContentLoaded", function(){




    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    window.MovingObject = MovingObject;
    window.Asteroid = Asteroid;
    const b = new MovingObject({
        pos: [100, 100],
        vel: [10, 10],
        radius: 100,
        color: "red"
    });

    const a = new Asteroid({
        pos: [200, 200]
    });

    b.draw(ctx);
    a.draw(ctx);

    

    
    // Need to draw moving object here.
    // How to fill in the window? May need webpack
    // ctx.beginPath();
    // ctx.arc(100, 100, 100, 0, 2 * Math.PI, false);
    // ctx.fillStyle = 'red';
    // ctx.fill();


    

});