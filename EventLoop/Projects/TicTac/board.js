class Board {
    constructor () {

        this.board = [[],['x','x','x'],[]];

    }

    horizontalCheck() {

        let horCheck = (checkArr) => {
            return (JSON.stringify(checkArr) === JSON.stringify(['x', 'x', 'x']));
        }

        return this.board.some(horCheck);

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
console.log(b.horizontalCheck());

// export { Board }