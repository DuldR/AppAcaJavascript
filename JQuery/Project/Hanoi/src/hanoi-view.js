class View {

    constructor (game, dom) {
        this.game = game;
        this.dom = dom;
    }

    // View.prototype.setupTowers = function() {

    // }


}

View.prototype.setupTowers = function() {

    for (let i = 0; i < 3; i++) {
        $(this.dom).append('<ul class="row group">test</ul>')
    }

}

module.exports = View;