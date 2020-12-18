function Animal(name) {
    this.name = name;
};


Animal.prototype.eat = function() {
    console.log("food");
}

module.exports = Animal;