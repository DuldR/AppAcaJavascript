const MovingObject = require('./moving_object.js');
const Utils = require('./utils.js');

const SHIP_DEFAULTS = {

    COLOR: "red",
    RADIUS: 30,
    SPEED: 0

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

module.exports = Ship;