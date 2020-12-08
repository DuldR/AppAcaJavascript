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
                this.printMove(first, final);
            })
        });

    }

    printMove(f, l) {
        console.log(f + l);
    }
}

b = new Game();
b.promptMove();