const Board = require('./board.js');



class Comp {

    constructor (mark, currentBoard) {

        this.mark = mark;
        this.positions = [[0,0], [0,1],[0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2]];
        // this.positions = ["0,0", "0,1", "0,2", "1,0", "1,1", "1,2", "2,0", "2,1", "2,2"]

        this.board = currentBoard;

    }

    getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // getRandPos() {

    //     let boolVal = false;

    //     let randPos = this.positions[this.getRandomArbitrary(0, 8)];
        
    //     while(this.getValidPos(randPos) != false) {
    //         randPost = this.positions[this.getRandomArbitrary(0, 8)];
    //     }

    //     return randPos;
    // }

    getValidPos(pos) {
        if (this.board.empty(pos) === true) {
            return true;
        } else {
            return false;
        }
    }



}

b = new Board();
c = new Comp("x", b);

console.log(c.getValidPos([1,2]));

module.exports = Comp;