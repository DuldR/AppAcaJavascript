const MovingObject = require('./moving_object.js');
const Utils = require('./utils.js');

const DEFAULTS = {
    COLOR: "#505050",
    RADIUS: 25,
    SPEED: 4
};

function Asteroid(options) {

    options = options || {};
    options.color = options.color || DEFAULTS.COLOR;
    options.rad = options.rad || DEFAULTS.RADIUS;
    options.vec = options.vec || Utils.randomVec(2);
    options.game = options.game;
    

    // This calls the super constructor functions :)
    MovingObject.call(this, options);

}

Utils.inherits(Asteroid, MovingObject);

module.exports = Asteroid;