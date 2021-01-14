class Test {
    constructor(name) {
        this.name = name;
    }

    print() {
        console.log(this.ok);
        if (this.name) {
            console.log("Truthy");
        }
    }
}

// For some reason, this is scoped within the original function.
// Test.prototype.print = function() {
//     console.log(this.name);
// }

// THis is the undefined. As this references the window scope and is thus udnefined.
// Test.prototype.bigButt = this.name;


// console.log(new Test("test"));

let t = new Test('ok');
t.print();