console.log("Webpack is working");
const MovingObject = require('../src/moving_object.js');
const Asteroid = require('../src/asteroid.js');
const Game = require('../src/game')


document.addEventListener("DOMContentLoaded", function(){




    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    window.MovingObject = MovingObject;
    const b = new MovingObject({
        pos: [100, 100],
        vel: [10, 10],
        rad: 100,
        color: "red"
    });

    const a = new Asteroid({
        pos: [300, 300]
    });

    const g = new Game();

    g.draw(ctx);

    // b.draw(ctx);
 

    // g.print();
    

});