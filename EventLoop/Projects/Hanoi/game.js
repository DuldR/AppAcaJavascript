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

    }

    promptMove() {
        console.log(this.towers);

        // let initialIdx = readline.question("Enter the first tower: ", first => {
        //     console.log(`You picked: ${first}`);
        // });

        // let finalIdx = readline.question("Enter the last tower: ", last => {
        //     console.log(`You picked: ${last}`);
        // });

        // const initialIdx = () => {
        //     return new Promise((resolve, reject) => {
        //         readline.question('First tower?', (answer) => {
        //             console.log(`You chose ${answer}`);
        //             resolve();
        //         })
        //     })
        // }


        let initialIdx = readline.question("Enter the first tower: ", first => {
            let finalIdx = readline.question("Enter the final tower: ", final => {
                console.log(`You picked: ${first} and ${final}`);
                console.log(this.isValidMove(first, final));
            })
        });

    }

    printMove(f, l) {
        console.log(`This is the first choice: ${f}`);
        console.log(`THis is the second choice: ${l}`);
    }

    isValidMove(start, end) {
        if (this.towers[start].length === 0) {
            return false;
        } else if (start === end) {
            return false;
        } else {
            return true;
        }
    }
}

b = new Game();
b.promptMove();