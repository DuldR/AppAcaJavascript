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


function fib(n) {

    if (n === 1) {
        return [0, 1];
    } else if (n === 2) {
        return [0, 1, 1];
    } else {
        arr = fib(n - 1);
        arr.push(arr[arr.length-1] + arr[arr.length-2]);
    }

    return arr;
}


// This works, but isn't a binary search.
// function bsearch(arr, target) {
//     if (arr.length === 0) {
//         return -1;
//     } else if(arr[arr.length - 1] === target) {
//         return (arr.length - 1);
//     } else {
//         arr.pop();
//         return bsearch(arr, target);
//     }
// }

// function bsearch(arr, target) {
//     let mid = Math.floor(arr.length / 2);

//     if (arr[mid] === target) {
//         return mid;
//     } else if (arr[mid] > target) {
//         return mid + bsearch(a.slice(0, mid), target);
//     } else if (arr[mid] < target) {
//         return mid + bsearch(a.slice(mid + 1), target);
//     } else {
//         return -1;
//     }
// }

function bsearch(numbers, target) {
    if (numbers.length === 0) {
      return -1;
    }
  
    const probeIdx = Math.floor(numbers.length / 2);
    const probe = numbers[probeIdx];
  
    if (target === probe) {
      return probeIdx;
    } else if (target < probe) {
      return bsearch(numbers.slice(0, probeIdx), target);
    } else {
      const subProblem = bsearch(numbers.slice(probeIdx + 1), target);
  
      return subProblem === -1 ? -1 : subProblem + (probeIdx + 1);
    }
  }