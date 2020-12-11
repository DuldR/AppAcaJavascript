class Board {
    constructor () {

        this.board = [['o'],['x','x', 'x'],[]];

    }

    horizontalCheck(player) {

        // This verifies a horizontal win.
        let horCheck = (checkArr) => {
            
            return (JSON.stringify(checkArr) === JSON.stringify([`${player}`, `${player}`, `${player}`]));
        }

        return this.board.some(horCheck);

    }

    verticalCheck() {

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
console.log(b.horizontalCheck('x'));

// export { Board }