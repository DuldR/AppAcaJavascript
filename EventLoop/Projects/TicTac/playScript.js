const Game = require('./game.js');
const Human = require('./humanPlayer.js');

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let p1 = new Human("x");
let p2 = new Human("o");
let g = new Game(p1, p2);

g.run(reader, completion);

function completion() {
  reader.question("Play again? y or n: ", restartGame => {
    if (restartGame === "y") {
      g = new Game(p1, p2);
      g.run(reader, completion);
    } else {
      reader.close();
    }
  });
};