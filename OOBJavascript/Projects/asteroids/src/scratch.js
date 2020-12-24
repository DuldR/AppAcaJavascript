const MovingObject = require('./moving_object.js');
const Utils = require('./utils.js');

function Butt(options) {
    options = options || {};
    this.color = options.color;


    // MovingObject.call(this, options);

}

Utils.inherits(Butt, MovingObject);
b = new Butt({color: "red", pos: 1});
b.print();
