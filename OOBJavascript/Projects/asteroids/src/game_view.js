const Game = require('./game.js')

function GameView (ctx) {

    this.game = new Game();
    this.ctx = ctx;
    this.ship = this.game.getShip();

}

GameView.prototype.bindKeyHandlers = function() {

    // key('w', this.game.ship.power([0, 10]) });
    key('a', function(){ alert('you pressed a!') });
    key('w', this.ship.power);
}

GameView.prototype.start = function() {
    // window.setInterval(this.game.draw(this.ctx), 1000);
    // window.setInterval(this.game.print, 1000);


    this.bindKeyHandlers();
    console.log(this.ship);

    window.setInterval(() => {
        this.game.step();
        this.game.draw(this.ctx);
    }, 1000);
    // console.log(this.game);
    // for (let i = 0; i < 100000; i++) {
    //     this.game.move();
    // }
}

module.exports = GameView;