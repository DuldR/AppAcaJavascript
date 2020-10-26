Array.uniq = function(arr) {

    let newArr = [];

    newArr.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === newArr[newArr.length - 1]) {
            continue;
        } else {
            newArr.push(arr[i]);
        }
    }

    return newArr;

}

Array.twoSum = function(arr) {

    let newArr = [];
    let posArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                continue;
            } else {
                if ((arr[i] + arr[j]) === 0) {
                    newArr.push([i, j]);
                }
            }
        }
    }

    return newArr;
}

Array.transpose = function(arr) {

    let transArr = [];

    for (let i = 0; i < arr.length; i++) {
        transArr.push([]);
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            transArr[j][i] = arr[i][j]
        }
    }

    return transArr;
}