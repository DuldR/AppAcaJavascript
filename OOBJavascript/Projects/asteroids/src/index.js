console.log("Webpack is working");
const MovingObject = require('../src/moving_object.js');
const Asteroid = require('../src/asteroid.js');
const Game = require('../src/game.js');
const GameView = require('../src/game_view.js');


document.addEventListener("DOMContentLoaded", function(){




    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    window.GameView = GameView
    let g = new GameView(ctx);

    g.start();


    

});