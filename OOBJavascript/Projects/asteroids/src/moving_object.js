class MovingObject {

    constructor (obj) {

        this.pos = obj.pos;
        this.vel = obj.vel;
        this.rad = obj.rad;
        this.color = obj.color;

    }

}

MovingObject.prototype.print = function() {
    console.log("HUH");
}

MovingObject.prototype.draw = function(ctx) {

    ctx.beginPath();
    ctx.arc(100, 100, 100, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    ctx.fill();
}

module.exports = MovingObject;