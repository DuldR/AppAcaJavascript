let dumbSum = function fartSum(arg) {
    let returnSum = 0;
    let args = Array.from(arguments);

    args.forEach( ele => {

        returnSum += ele;
    })

    return returnSum;
}

let drumpfSum = function dumpSum(...args) {

    let returnSum = 0;

    args.forEach( ele => {

        returnSum += ele;
    })

    return returnSum;
}


function curry(numArgs) {
    const numbers = [];

    function _curriedSum(num) {
        numbers.push(num)

        if (numbers.length === numArgs) {
            return numbers.reduce((a,b) => a + b, 0);
        } else {
            return _curriedSum;
        }
    }

    return _curriedSum;

}



let d = curry(3);

console.log(d(1)(2)(3));
// console.log(dumbSum(1,2,3,4));
// console.log(dumbSum(1,2,3,4, 5));

// console.log(drumpfSum(1,2,3,4));
// console.log(drumpfSum(1,2,3,4,5));