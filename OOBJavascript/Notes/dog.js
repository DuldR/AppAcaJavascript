let Animal = require('./animal.js');

function Dog(name) {
    Animal.call(this, name);
};



let Surr = function() {};

console.log(Animal);

Surr.prototype = Animal.prototype;

Dog.prototype = new Surr();




Dog.prototype.woof = function() {
    console.log('woo, I am ' + this.name);
};

d = new Dog();
d.eat();

module.exports = Dog;