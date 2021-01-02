const Game = require('./game.js')

function GameView (ctx) {

    this.game = new Game();
    this.ctx = ctx;
    this.ship = this.game.ship;

}

GameView.prototype.bindKeyHandlers = function() {

    // Have to do this so the scope of the ship gets passed in
    const ship = this.game.ship;


    key('w', function() {ship.power("w")});
    key('s', function() {ship.power("s")});
    key('a', function() {ship.power("a")});
    key('d', function() {ship.power("d")});
    key('f', function() {ship.fireBullet});
}

GameView.prototype.start = function() {

    this.bindKeyHandlers();

    window.setInterval(() => {
        this.game.step();
        this.game.draw(this.ctx);
    }, 20);

}

module.exports = GameView;