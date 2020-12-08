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

        let initialIdx = readline.question("Enter the first tower: ", first => {
            console.log(`You picked: ${first}`);
            readline.close();
        });

    }
}

b = new Game();
b.promptMove();