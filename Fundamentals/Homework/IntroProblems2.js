function printCallback(num) {

    console.log(`Mx. ${num} Jingleheimer Schmidt`)

}

function titleize(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i]);
    }
}

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = [];
    tricks.forEach(element => this.tricks.push(element))

    // Below is NOT recommended to do inside of the constructor as this takes up a lot of memory
    // elephant.prototype.trumpet = function() {
    //     console.log(`${this.name} the elephant goes hog mild`);
    // }
    
}

Elephant.prototype.trumpet = function() {
    console.log(`${this.name} the elephant trumpets!`);
}

Elephant.prototype.grow = function() {
    this.height += 12;
}

Elephant.prototype.addTrick = function(trick) {
    this.tricks.push(trick)
}

Elephant.prototype.play = function() {
    let rand = Math.floor(Math.random() * (this.tricks.length));

    console.log(`${this.name} is ${this.tricks[rand]}`);
}

var q = new Elephant("avon", 12, ["Dancing", "Smokin", "Spittin"])