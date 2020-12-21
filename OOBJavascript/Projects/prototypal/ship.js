Function.prototype.inherits = function(sup) {

    let Surr = function() {};

    Surr.prototype = sup.prototype;
    this.prototype = new Surr();
    this.prototype.constructor = this;

}

// Function.prototype.inherits1 = function (BaseClass) {
//     function Surrogate () {}
//     Surrogate.prototype = BaseClass.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this;
// };
  

function Dog (name) {
    this.name = name;
}
  
Dog.prototype.bark = function () {
    console.log(this.name + " barks!");
};    


function Butts() {}

Butts.inherits(Dog);

t = new Butts();

t.bark();

