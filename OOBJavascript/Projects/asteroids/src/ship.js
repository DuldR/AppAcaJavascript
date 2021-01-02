const MovingObject = require('./moving_object.js');
const Bullet = require('./bullet.js');
const Game = require('./game.js');
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

Ship.prototype.fireBullet = function() {

    const norm = Utils.norm(this.vel);
    let relPos = [0,0];

    if (norm === 0) {
      // Can't fire unless moving.
      return;
    }
  
    const relVel = Utils.scale(
      this.vel,
      2
    );
  
    const bulletVel = [
      relVel[0] + this.vel[0], relVel[1] + this.vel[1]
    ];

    const bulletPos = [
        relPos[0] + this.pos[0], relPos[1] + this.pos[1]
    ];
  
    const bullet = new Bullet({
      pos: bulletPos,
      vel: bulletVel,
      game: this.game
    });

    this.game.addBullet(bullet);
}

// let g = new Game();
// let ship = new Ship({pos: [10,10], vel: [10,10]})
// let b = new Ship();
// b.fireBullet();

module.exports = Ship;