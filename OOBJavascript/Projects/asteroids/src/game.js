const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const Ship = require('./ship.js');
const Bullet = require('./bullet.js');
const Utils = require('./utils.js');

const GAME_DEFAULTS = {

    DIM_X: 1920,
    DIM_Y: 1200,
    NUM_ASTEROIDS: 5
    
};

function Game(options) {
    
    this.asteroids = [];
    this.bullets = [];
    this.ship = new Ship({pos: this.randomPosition(), game: this})
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

Game.prototype.addBullet = function addBullet(obj) {
    this.bullets.push(obj);
}

Game.prototype.randomPosition = function() {
    let xCoord = getRandomInt(0, GAME_DEFAULTS.DIM_X);
    let yCoord = getRandomInt(0, GAME_DEFAULTS.DIM_Y);
    return [xCoord, yCoord];
};

Game.prototype.move = function() {
    this.allObjects().forEach(ele => {
        ele.move();
    })
};

Game.prototype.allObjects = function() {

    let testBullet = new Bullet({pos: this.ship.pos, vel: [10,10], game: this})
    let allArr = [];

    this.asteroids.forEach(ele => {
        allArr.push(ele);
    })

    allArr.push(this.ship);
    allArr.push(testBullet);
    // allArr.push(this.bullets[0]);

    return allArr;
};

Game.prototype.draw = function(ctx) {

    ctx.clearRect(0, 0, GAME_DEFAULTS.DIM_X, GAME_DEFAULTS.DIM_Y);

    this.allObjects().forEach(ele => {
        ele.draw(ctx);
    })

};

Game.prototype.checkCollisions = function() {

    this.asteroids.forEach(ele => {
        if (ele.isCollidedWith(this.ship)) {
            this.ship.relocate(this.randomPosition())
        }
    })

};

Game.prototype.remove = function(asteroid) {
    this.asteroids.splice(asteroid, 1);
};

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
};

Game.prototype.step = function() {
    this.move();
    this.checkCollisions();
};




module.exports = Game;

