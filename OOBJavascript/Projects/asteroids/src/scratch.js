const MovingObject = require('./moving_object.js');
const Utils = require('./utils.js');

function Butt(options) {
    options = options || {};
    this.color = options.color;

    console.log(MovingObject);

    // MovingObject.call(this, options);

    console.log(MovingObject);
}

Utils.inherits(Butt, MovingObject);
b = new Butt();
b.print();
