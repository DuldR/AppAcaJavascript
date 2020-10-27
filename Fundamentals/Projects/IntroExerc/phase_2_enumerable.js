Array.prototype.myEach = function(cb) {

    for (i = 0; i < this.length; i++) {
        cb(this[i]);
    }
}

Array.prototype.myMap = function(cb) {

    const newArr = [];

    this.myEach(element => newArr.push(cb(element)));

    return newArr
}

Array.prototype.myReduce = function(cb) {

    var val = 0;

    this.myEach(element => (val = cb(val, element)));

    return val;
}