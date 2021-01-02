const MovingObject = require('./moving_object.js');
const Utils = require('./utils.js');

const SHIP_DEFAULTS = {

    COLOR: "red",
    RADIUS: 30,
    SPEED: [0,0]

}

function Ship(options) {
    options = options || {};
    options.color = options.color || SHIP_DEFAULTS.COLOR;
    options.rad = options.rad || SHIP_DEFAULTS.RADIUS;
    options.vel = SHIP_DEFAULTS.SPEED;
    options.pos = options.pos;
    options.game = options.game;

    MovingObject.call(this, options);
}


Utils.inherits(Ship, MovingObject);

Ship.prototype.relocate = function(cb) {
    this.pos = cb;
    this.vel = SHIP_DEFAULTS.SPEED;
}

Ship.prototype.power = function(amount) {

    // this.vel = [this.vel[0] + amount[0], this.vel[1] + amount[1]];

    if (amount === "w") {
        this.vel[1] = this.vel[1] - 5;
    } else if (amount === "s") {
        this.vel[1] = this.vel[1] + 5;
    } else if (amount === "a") {
        this.vel[0] = this.vel[0] - 5;
    } else {
        this.vel[0] = this.vel[0] + 5;
    }

}

// s = new Ship({pos: [1,1]});

// console.log(s);

// s.relocate({pos: [2,2]})

// console.log(s);

module.exports = Ship;