const Board = require('./board.js');


class Game {
    constructor (player1, player2) {

        this.human = player1;
        this.comp = player2;
        this.board = new Board();

    }

    run(reader, callback) {

        reader.question('Enter a pos: ', pos => {
            
            let inputPos = pos.split(',').map(Number);

            this.board.placeMark(inputPos, this.human.mark);

            this.board.print();

            if (this.board.won('x') === true || this.board.won('o') === true ) {
                console.log(this.board.winner());
                callback();
            } else {
                this.run(reader, callback);
            }
        })
        
    }


}
module.exports = Game;
