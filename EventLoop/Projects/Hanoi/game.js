const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
//   readline.question('Who are you?', name => {
//     console.log(`Hey there ${name}!`);
//     readline.close();
//   });

class Game {
    constructor() {

        this.towers = [[1,2,3], [], []]

    };



    promptMove() {
        console.log(this.towers);

        let initialIdx = readline.question("Enter the first tower: ", first => {
            let finalIdx = readline.question("Enter the final tower: ", final => {
                console.log(`You picked: ${first} and ${final}`);
            })
        });

    };

    printMove(f, l) {
        console.log(`This is the first choice: ${f}`);
        console.log(`THis is the second choice: ${l}`);
    };

    isValidMove(start, end) {
        if (this.towers[start].length === 0) {
            return false;
        } else if (start === end) {
            return false;
        } else {
            return true;
        }
    };

    move(startIdx, finalIdx) {
        if (this.isValidMove(startIdx, finalIdx)) {
        console.log(true);
        } else {
        console.log(false);
        }
    };
}

b = new Game();
b.promptMove();
b.move(1, 2);
b.move(0, 0);
b.move(2, 1);
b.move(0, 1);