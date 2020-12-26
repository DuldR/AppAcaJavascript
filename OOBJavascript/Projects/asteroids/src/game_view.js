const Game = require('./game.js')

function GameView (ctx) {

    this.game = new Game();
    this.ctx = ctx;

}

GameView.prototype.start = function() {
    // window.setInterval(this.game.draw(this.ctx), 1000);
    // window.setInterval(this.game.print, 1000);

    window.setInterval(() => {
        this.game.draw(this.ctx);

        this.game.move();
    }, 20);
    // console.log(this.game);
    // for (let i = 0; i < 100000; i++) {
    //     this.game.move();
    // }
}

module.exports = GameView;