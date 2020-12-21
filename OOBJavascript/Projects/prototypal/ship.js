Function.prototype.inherits = function(sup) {

    let Surr = function() {};

    Surr.prototype = sup.prototype;
    this.prototype = new Surr();
    this.prototype.constructor = this;

}

Function.prototype.inherits2 = function(sup) {
    this.prototype = Object.create(sup.prototype);
    this.prototype.constructor = this;
}
  

function Dog (name) {
    this.name = name;
}
  
Dog.prototype.bark = function () {
    console.log(this.name + " barks!");
};    


let newFunc = function Butts() {}
newFunc.inherits2(Dog);

t = new newFunc();

t.bark();

