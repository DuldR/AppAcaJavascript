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
            reader.question('Enter mark: ', mark => {
                let inputPos = pos.split(',').map(Number);
                let inputMark = mark;

                this.board.placeMark(inputPos, mark);


                if (this.board.won('x') === true || this.board.won('o') === true) {
                    console.log(this.board.winner());
                }
            })
        })
        
    }


}

g = new Game();
let cb = function() {

};
g.run(reader, cb);

module.exports = Game;
