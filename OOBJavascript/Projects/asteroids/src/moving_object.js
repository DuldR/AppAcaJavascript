function MovingObject(options) {


    this.pos = options.pos;
    this.vel = options.vel;
    this.rad = options.radius;
    this.color = options.color;


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

MovingObject.prototype.print = function() {

    console.log("I'm a test function to make sure inherit worked");
}

module.exports = MovingObject;