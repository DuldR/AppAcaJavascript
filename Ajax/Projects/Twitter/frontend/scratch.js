let b = {a: 1, b: 2}
let a = 3

class test {
    constructor(el, options) {

        this.test = el || options.a;

    }
}

let c = new test(a);
console.log(c);