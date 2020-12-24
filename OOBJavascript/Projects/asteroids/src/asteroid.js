const MovingObject = require('./moving_object.js');
const Utils = require('./utils.js');

const DEFAULTS = {
    COLOR: "#505050",
    RADIUS: 25,
    SPEED: 4
  };

function Asteroid(options) {

    options = options || {};

    MovingObject.call(this, options);

}

module.exports = Asteroid;