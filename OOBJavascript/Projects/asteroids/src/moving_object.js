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

MovingObject.prototype.print = function() {

    console.log(this.color);
    console.log(this.pos);
    console.log(this);
}

module.exports = MovingObject;