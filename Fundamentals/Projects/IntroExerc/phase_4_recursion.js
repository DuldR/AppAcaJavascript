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

function bsearch(arr, target) {

    // THIS is the base case
    if (arr.length === 0) {
        return -1;
    }
    let mid = Math.floor(arr.length / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return bsearch(a.slice(0, mid), target);
    } else {
        check = bsearch(a.slice(mid + 1), target);
        return check === -1 ? -1 : check + (mid + 1);
    }
}

// merge, mergeSort
function merge(left, right) {
    const merged = [];
  
    while (left.length > 0 && right.length > 0) {
      let nextItem = (left[0] < right[0]) ? left.shift() : right.shift();
      merged.push(nextItem);
    }
  
    return merged.concat(left, right);
  }
}
  
function mergeSort(array) {
    if (array.length < 2) {
      return array;
    } else {
      const middle = Math.floor(array.length / 2);
  
      const left = mergeSort(array.slice(0, middle));
      const right = mergeSort(array.slice(middle));
  
      return merge(left, right);
    }
}

function subset(arr) {
    
}