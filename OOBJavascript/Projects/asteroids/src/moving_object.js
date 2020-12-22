class MovingObject {

    constructor (obj) {

        this.pos = obj.pos;
        this.vel = obj.vel;
        this.rad = obj.radius;
        this.color = obj.color;

    }

}


MovingObject.prototype.draw = function(ctx) {

    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.rad, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
}

MovingObject.prototype.move = function() {
    this.pos[0] = this.pos[0] + this.vel[0];
    this.pos[1] = this.pos[1] + this.vel[1];
}

module.exports = MovingObject;