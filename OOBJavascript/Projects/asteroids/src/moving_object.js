const Utils = require('./utils.js');

function MovingObject(options) {


    this.pos = options.pos;
    this.vel = options.vel;
    this.rad = options.rad;
    this.color = options.color;
    this.game = options.game;


}


MovingObject.prototype.draw = function(ctx) {

    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.rad, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
}

MovingObject.prototype.move = function() {

    this.pos = this.game.wrap(this.pos);
    this.pos[0] = this.pos[0] + this.vel[0];
    this.pos[1] = this.pos[1] + this.vel[1];
}

MovingObject.prototype.isCollidedWith = function(obj) {
    let sumRadii = this.rad + obj.rad;
    if (Utils.dist(this.pos, obj.pos) < sumRadii) {
        return true;
    }

    return false;
}

MovingObject.prototype.print = function() {

    console.log(this.color);
    console.log(this.pos);
    console.log(this);
}

let m = new MovingObject({pos: [0,0], vel: [1,1], rad: 1})
let c = new MovingObject({pos: [0,2], vel: [1,1], rad: 2})

console.log(m.isCollidedWith(c));

module.exports = MovingObject;