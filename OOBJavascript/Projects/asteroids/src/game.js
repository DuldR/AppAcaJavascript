const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const Utils = require('./utils.js');

const GAME_DEFAULTS = {

    DIM_X: 1920,
    DIM_Y: 1200,
    NUM_ASTEROIDS: 10
    
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
        this.asteroids.push(new Asteroid({pos: this.randomPosition(), vel: [-10, 0], game: this}));
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


let g = new Game();

console.log(g.wrap([1930, 1200]));
console.log(g.wrap([-10, 1200]));
console.log(g.wrap([1920, 1210]));
console.log(g.wrap([1920, -10]));

// Game.prototype.print = function() {
//     console.log(this.asteroid);
// }



module.exports = Game;

