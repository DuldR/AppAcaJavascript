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
        $(this.dom).append('<ul class="row">test</ul>')
    }

    for (let j = 0; j < 3; j++) {
        $("ul.row").append("<li class=top-square></li>")
    }

}

module.exports = View;