Array.prototype.myEach = function(cb) {

    for (i = 0; i < this.length; i++) {
        cb(this[i]);
    }
}