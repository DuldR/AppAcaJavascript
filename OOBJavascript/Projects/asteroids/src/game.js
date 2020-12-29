const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const Utils = require('./utils.js');

const GAME_DEFAULTS = {

    DIM_X: 1920,
    DIM_Y: 1200,
    NUM_ASTEROIDS: 15
    
};

function Game(options) {
    
    this.asteroids = [];
    this.addAsteroids();


}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
  
Game.prototype.addAsteroids = function() {

    for (let i = 0; i < GAME_DEFAULTS.NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: this}));
    }

}

Game.prototype.randomPosition = function() {
    let xCoord = getRandomInt(0, GAME_DEFAULTS.DIM_X);
    let yCoord = getRandomInt(0, GAME_DEFAULTS.DIM_Y);
    return [xCoord, yCoord];
}

Game.prototype.move = function() {
    this.asteroids.forEach(ele => {
        ele.move();
    })
}

Game.prototype.draw = function(ctx) {

    ctx.clearRect(0, 0, GAME_DEFAULTS.DIM_X, GAME_DEFAULTS.DIM_Y);

    this.asteroids.forEach(ele => {
        ele.draw(ctx);
    })

}

Game.prototype.checkCollisions = function() {
    
    // Need to two for loops. Otherwise you'll need to verify the asteroid doesnt check itself with stringify or some other method.

    let toBeRemoved = [];

    for (let i = 0; i < this.asteroids.length; i++) {
        for (let j = 0; j < this.asteroids.length; j++) {
            if (j === i) {
                continue
            } else {

                if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
                    this.remove(i);
                    this.remove(j-1);
  
                };
                
            }
        }

    }

}

Game.prototype.remove = function(asteroid) {
    this.asteroids.splice(asteroid, 1);
}

Game.prototype.wrap = function(pos) {

    if (pos[0] > GAME_DEFAULTS.DIM_X) {
        return [pos[0] - GAME_DEFAULTS.DIM_X, pos[1]];
    } else if (pos[0] < 0) {
        return [pos[0] + GAME_DEFAULTS.DIM_X, pos[1]];
    } else if (pos[1] > GAME_DEFAULTS.DIM_Y) {
        return [pos[0], pos[1] - GAME_DEFAULTS.DIM_Y];
    } else if (pos[1] < 0) {
        return [pos[0], pos[1] + GAME_DEFAULTS.DIM_Y];
    } else {
        return pos;
    }
}

Game.prototype.step = function() {
    this.move();
    this.checkCollisions();
}


let g = new Game();
// console.log(g.asteroids.splice(0, 1));
// g.remove(0);

// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log(g.asteroids)


// console.log(g.wrap([1930, 1200]));
// console.log(g.wrap([-10, 1200]));
// console.log(g.wrap([1920, 1210]));
// console.log(g.wrap([1920, -10]));

// Game.prototype.print = function() {
//     console.log(this.asteroid);
// }



module.exports = Game;

