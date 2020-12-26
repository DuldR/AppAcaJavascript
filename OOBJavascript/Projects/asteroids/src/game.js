const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const Utils = require('./utils.js');

const GAME_DEFAULTS = {

    DIM_X: 1920,
    DIM_Y: 1200,
    NUM_ASTEROIDS: 5
    
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
        this.asteroids.push(new Asteroid({pos: this.randomPosition(), vel: [10,10]}));
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

    // for (let i = 0; i < this.asteroids.length; i++) {
    //     this.asteroids[i].draw(ctx);
    // }

}

Game.prototype.print = function() {
    this.asteroids[0].print();
}



module.exports = Game;

