let a = [1,2,1]

checkVal = JSON.stringify(1);

// a.forEach((ele, idx) => {
//     if (idx === 0) {
//         return
//     } else {
//         console.log("Found it.");
//         return true
//     }
// })

function testFunction() {
    for (let i = 1; i < a.length; i++) {
        if (JSON.stringify(a[i]) === checkVal) {
            console.log(true);
        }
    }

    console.log(false);
}

testFunction();