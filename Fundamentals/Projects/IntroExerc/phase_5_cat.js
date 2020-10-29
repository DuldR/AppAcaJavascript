class Cat {
    constructor(owner, name) {
      this.owner = owner;
      this.name = name;
    }

}

Cat.prototype.cuteStatement = function() {

    console.log(`${this.owner} hates ${this.name}`);

}

Cat.prototype.meow = function() {
    console.log(`${this.name} meows`);
}