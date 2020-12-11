class Board {
    constructor () {

        this.board = [['x'],['o','o', 'x'],['x','o','o']];

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
console.log(b.verticalCheck('x'));

// export { Board }