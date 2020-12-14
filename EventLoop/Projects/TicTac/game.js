const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const Board = require('./board.js');


class Game {
    constructor (reader) {

        this.reader = reader;
        this.board = new Board();

    }

    run(reader, callback) {

        reader.question('Enter a pos: ', pos => {
            let inputPos = pos.split(',').map(Number);
            this.board.placeMark(inputPos, 'x');
            console.log(this.board.board);
        })
        
    }


}

g = new Game();
let cb = function() {

};
g.run(reader, cb);

module.exports = Game;
