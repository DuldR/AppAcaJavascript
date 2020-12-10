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

        this.towers = [[1], [], [2,3]]

    };



    promptMove(cb) {

        let initialIdx = readline.question("Enter the first tower: ", first => {
            let finalIdx = readline.question("Enter the final tower: ", final => {
                console.log(`You picked: ${first} and ${final}`);
                this.move(first, final);

                if (this.isWon() === true) {
                    cb("You won!");
                } else {
                    this.run(cb);
                }
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

            let movePiece = this.towers[startIdx].shift();

            this.towers[finalIdx].unshift(movePiece);
            this.print();

        } else {
            console.log("Not a valid move");
        }
    };

    print() {
        console.log(JSON.stringify(this.towers));
    }

    isWon() {

        let checkVal = JSON.stringify([1,2,3]);
        let finalVal = false;

        for (let i = 1; i < this.towers.length; i++) {
            if (JSON.stringify(this.towers[i]) === checkVal) {
                finalVal = true;
            }
        }

        return finalVal;
    }

    run(cb) {
        this.promptMove(cb);
    }
}

b = new Game();

// console.log(b.isWon());
// b.promptMove();
// b.print();
// b.move(1, 2);
// b.move(0, 0);
// b.move(2, 1);
// b.move(0, 1);
b.run(console.log);