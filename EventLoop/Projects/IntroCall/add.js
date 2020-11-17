const readline = require('readline');


const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

    let first;

    if (numsLeft > 0) {
        reader.question("What's the number? ", function(ans1) {
            first = parseInt(ans1, 10);
            sum = (sum + first);
            numsLeft = (numsLeft - 1);

            addNumbers(sum, numsLeft, completionCallback);
        });
    } else if (numsLeft === 0) {
        return completionCallback(sum);
    }

}

// function addNumbers(sum, numsLeft, completionCallback) {
//     reader.question("What's the number? ", function(ans1) {
//         completionCallback(ans1);
//     });
// };

addNumbers(0, 3, sum => { 
    console.log(`Total Sum: ${sum}`);
    reader.close();
    
});