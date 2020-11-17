// This works, but utilizes bad function stgructure
// const readline = require('readline');


// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// reader.question("Would you like some tea?", function(answer) {
//     reader.question("Woudl you like some biscuits?", function(ans2) {
//         console.log(` Your answer please: ${answer}!`);
//         console.log(` Your answer please: ${ans2}!`);
//     })
// });



// // THis does not work.
// // reader.question("Would you like some biscuits?", function(ans2) {
// //     console.log(` Your answer please: ${ans2}!`);
// // });

// console.log("Last Program Line");

// const tea = function teaAndBiscuits () {
//     const readline = require('readline');


//     const reader = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     let first, second;

//     reader.question("Would you like some tea?", function(answer) {
//         reader.question("Woudl you like some biscuits?", function(ans2) {
//             first = answer
//             console.log(` Your answer please: ${answer}!`);
//             second = ans2
//             console.log(` Your answer please: ${ans2}!`);
//         });
//     });
    
//     console.log(`So you ${answer} want tea and you ${ans2} want biscuits.`);
//     reader.close();

// }


const readline = require('readline');


const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let first, second;

reader.question("Would you like some tea? ", function(answer) {
    reader.question("Woudl you like some biscuits? ", function(ans2) {
        first = answer
        second = ans2

        const firstRes = (first === 'yes') ? 'do' : 'don\'t';
        const secondRes = (second === 'yes') ? 'do' : 'don\'t';

        console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
    });
});
