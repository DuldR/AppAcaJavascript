function test() {
    a = [['o', 'x'], ['o', 'x', 'x'], ['o', 'o']];

    let checkVal = JSON.stringify([`o`, `o`, `o`]);
    let boolVal = false

    for (let i = 0; i < 3; i++) {
        let emptyArr = [];
        for (let j = 0; j < 3; j++) {
            emptyArr.push(a[j][i])
        }
        // console.log(i);
        // console.log(a[i]);
        // console.log(a[i][i])
        if (JSON.stringify(emptyArr) === checkVal) {
            boolVal = true;
        }
    }

    return boolVal;

 }

 console.log(test());