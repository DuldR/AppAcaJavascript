// function test() {
//     a = [['o', 'x'], ['o', 'x', 'x'], ['o', 'o']];

//     let checkVal = JSON.stringify([`o`, `o`, `o`]);
//     let boolVal = false

//     for (let i = 0; i < 3; i++) {
//         let emptyArr = [];
//         for (let j = 0; j < 3; j++) {
//             emptyArr.push(a[j][i])
//         }
//         // console.log(i);
//         // console.log(a[i]);
//         // console.log(a[i][i])
//         if (JSON.stringify(emptyArr) === checkVal) {
//             boolVal = true;
//         }
//     }

//     return boolVal;

//  }

//  console.log(test());

// function helperTest(arr, row, col) {
//     return arr[row][col]

// }

function diagTest() {

    let testArr = [['x'], ['o', 'x', 'o'], ['o', 'o', 'x']]
    let diagOne = [[0,0], [1, 1], [2,2]];
    let diagTwo = [[2,0], [1,1], [0,2]];
    let emptyArr = [];


    diagOne.forEach(ele => {
        console.log(`The first element: ${ele[0]}`);
        console.log(`The second element: ${ele[1]}`);

        console.log(testArr[ele[0]][ele[1]]);
        // emptyArr.push(testArr[ele[0]]);
    })

    console.log(emptyArr);

}

diagTest();