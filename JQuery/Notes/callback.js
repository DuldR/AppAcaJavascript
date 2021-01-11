function myCall(param1, param2) {
    console.log(param1 + param2)
}

function myFun(cb) {
    cb();
}

// THis works. Arrow notation provides an anon wrapper function. Why that's required? ECMAScript is garbage.
// myFun(cb => { myCall(1, 2) });

let person = {
    name: "Idiot",
    greet: function () {
        console.log(this.name);
    }
}

// person.greet();

// let b = person.greet;

// b();

let bob = b => person.greet

bob();