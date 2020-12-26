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


}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
  
Game.prototype.addAsteroids = function() {

    for (let i = 0; i < GAME_DEFAULTS.NUM_ASTEROIDS; i++) {
        this.asteroids.push([new Asteroid({pos: this.randomPosition(), vel: [10,10]})]);
    }

}

Game.prototype.randomPosition = function() {
    let xCoord = getRandomInt(0, GAME_DEFAULTS.DIM_X);
    let yCoord = getRandomInt(0, GAME_DEFAULTS.DIM_Y);
    return [xCoord, yCoord];
}


Game.prototype.print = function() {
    console.log(this.asteroids[0]);
}


let g = new Game();

console.log(g.randomPosition());
g.addAsteroids();
g.print();