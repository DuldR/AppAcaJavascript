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

            // Check for full board before completing comp placement


            if (this.board.full() === true ) {
                console.log(this.board.winner());
                callback();

                // This breaks you out of running the rest of the code.
                return;
            }

            let compPos = this.comp.getRandPos(this.board);
            this.board.placeMark(compPos, this.comp.mark);

            this.board.print();

            if (this.board.won('x') === true || this.board.won('o') === true) {
                console.log(this.board.winner());
                callback();
            } else {
                this.run(reader, callback);
            }
        })
        
    }


}
module.exports = Game;
