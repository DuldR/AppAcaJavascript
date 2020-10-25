function madLib(verb, adjective, noun) {
    this.verb = verb;
    this.adjective = adjective;
    this.noun = noun;
    console.log(`We shall ${verb} the ${adjective} ${noun}`)
}


function isSubstring(string, sub) {
    return string.includes(sub);
}

function fizzBuzz(array) {

    var i = 0;
    ret = [];
    for (i; i < array.length; i++) {
        if (array[i] % 3 && array[i] % 5) {
            continue
        } else {
            if (array[i] % 3 || array[i] % 5) {
                ret.push(array[i])
            }
            continue
        }
    }

    return ret;

}

function isPrime(num) {

    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        } else {
            continue
        }
    }

    return true;
}

function sumOfNPrimes(n) {

    var j = 0
    for (var i = 2; i <= n; i++) {

        if (isPrime(i)) {
            j += i;
        } else {
            continue;
        }
    }

    return j
}