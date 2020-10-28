function range(s, e) {

    if (s === e) {
        return [];
    }
    

    let r = range(s, e - 1)
    r.push(e - 1);
    return r
}

function sumRec(arr) {

    let finalSum = 0

    if (arr.length === 1) {
        return arr[0];
    } else {
        finalSum = arr.pop() + sumRec(arr);
    }
    
    return finalSum;
}

// 1st
function exponent(b, n) {

    let finalSum = 0

    if (n === 0) {
        return 1;
    } else {
        finalSum = b * exponent(b, n-1);
    }

    return finalSum;
}

// 2nd
// exp(b, 0) = 1
// exp(b, 1) = b
// exp(b, n) = exp(b, n / 2) ** 2             [for even n]
// exp(b, n) = b * (exp(b, (n - 1) / 2) ** 2) [for odd n]

function exponent2(b, n) {

    let finalSum = 0

    if (n === 0) {
        return 1;
    } else if (n % 2 === 0) {
        finalSum = exponent2(b, n / 2) ** 2;
    } else {
        finalSum = b * (exponent2(b, (n - 1) / 2) ** 2);
    }

    return finalSum;
}
