class Board {
    constructor () {

        this.board = [[null,null, null],[null, null, null],[null, null, null]];

        // this.board = [[null,'o', 'x'],['o', 'x', 'o'],['o', 'x', 'o']];
        this.positions = [[0,0], [0,1],[0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2]];

    }

    horizontalCheck(player) {

        // This verifies a horizontal win.
        let horCheck = (checkArr) => {

            return (JSON.stringify(checkArr) === JSON.stringify([`${player}`, `${player}`, `${player}`]));
        }

        return this.board.some(horCheck);

    }

    verticalCheck(player) {

        // This verifies a vertical win.
        let checkVal = JSON.stringify([`${player}`, `${player}`, `${player}`]);
        let boolVal = false;

        for (let i = 0; i < 3; i++) {

            let emptyArr = [];

            for (let j = 0; j < 3; j++) {
                emptyArr.push(this.board[j][i]);
            }

            if (JSON.stringify(emptyArr) === checkVal) {
                boolVal = true;
            }
        }

        return boolVal;

    }

    diagonalCheck(player) {

        let diagOne = [[0,0], [1, 1], [2,2]];
        let diagTwo = [[2,0], [1,1], [0,2]];
        let emptyArrOne = [];
        let emptyArrTwo = [];
        let checkVal = JSON.stringify([`${player}`, `${player}`, `${player}`]);
        let boolVal = false;

        diagOne.forEach(ele => {
            emptyArrOne.push(this.board[ele[0]][ele[1]]);
        })

        diagTwo.forEach(ele => {
            emptyArrTwo.push(this.board[ele[0]][ele[1]]);
        })

        if ((JSON.stringify(emptyArrOne) === checkVal) ||  (JSON.stringify(emptyArrTwo) === checkVal)) {
            boolVal = true;
        }

        return boolVal;


    }

    print() {
        console.log(this.board.join('\r\n'));
    }

    won(player) {

        if (this.horizontalCheck(player) || this.verticalCheck(player) || this.diagonalCheck(player)) {
            return true;
        } else {
            return false;
        }

    }

    winner() {

        if (this.won('x')) {
            console.log('X is the winner!');
        } else if (this.won('o')) {
            console.log('O is the winner!');
        } else {
            console.log('Tie!');
        }

    }

    getPos(pos) {

        return this.board[pos[0]][pos[1]];

    }

    empty(pos) {
        if (this.getPos(pos) === null) {
            return true;
        } else {
            return false;
        }

    }

    full() {

        // This code works.
        let boolVal = true;
        
        for (let i = 0; i < this.positions.length; i++) {
            if (this.empty(this.positions[i]) === true) {
                boolVal = false;
            }
        }

        return boolVal;

    }

    placeMark(pos, mark) {

        if (this.empty(pos)) {
            this.board[pos[0]][pos[1]] = mark;
        } else {
            console.log("Not a vlid pos. Choose somewhere else");
        }

    }


}


module.exports = Board;