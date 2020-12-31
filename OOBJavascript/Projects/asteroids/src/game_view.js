const Game = require('./game.js')

function GameView (ctx) {

    this.game = new Game();
    this.ctx = ctx;
    this.ship = this.game.addShip();

}

GameView.prototype.bindKeyHandlers = function() {

    const ship = this.ship;
    let print = function() {
        console.log(ship);
        console.log(ship.vel);
    }

    // Wow look ath this you habve tyo DEIFNei ti AS  FGUnction FJfuidgkdfgsdkl
    let shithead = function() {
        ship.power();
    }

    // key('w', this.game.ship.power([0, 10]) });
    key('a', function(){ alert('you pressed a!') });
    key('w', print);
    key('d', shithead);
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