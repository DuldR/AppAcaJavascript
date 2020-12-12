class Board {
    constructor () {

        this.board = [['x', 'x', 'x'],['x','x', 'o'],['o','o','o']];

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

    won() {

    }

    winner() {

    }

    empty() {

    }

    placeMark(pos, mark) {

    }


}

b = new Board();
// console.log(b.horizontalCheck('x'));
// console.log(b.verticalCheck('x'));
// console.log(b.verticalCheck('o'));
console.log(b.diagonalCheck('x'));

// export { Board }