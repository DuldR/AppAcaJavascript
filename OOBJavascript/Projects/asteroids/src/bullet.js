const MovingObject = require('./moving_object.js');
const Utils = require('./utils.js');


const BULLET_DEFAULTS = {
    COLOR: "blue",
    RADIUS: 5,
    SPEED: [50, 50]
}
function Bullet(options) {
    options = options || {};
    options.color = BULLET_DEFAULTS.COLOR;
    options.rad = BULLET_DEFAULTS.RADIUS;
    options.pos = options.pos;
    options.vel = options.vel;

    this.isWrappable = false;

    MovingObject.call(this, options);
}

Utils.inherits(Bullet, MovingObject);


module.exports = Bullet;