class View {

    constructor (game, dom) {
        this.game = game;
        this.dom = dom;
    
    }

    // View.prototype.setupTowers = function() {

    // }

    bindEvents() {
        $("ul.row").click((ele) => {
            let target = $(ele.currentTarget);
            // Use this to give the tower index :)
            // console.log($(target).attr("id"));

            this.clickTower(target);
            console.log(this.game.towers);
        })
    }

    clickTower($tower) {

        if (this.initialIdx) {

            this.endIdx = $($tower).attr("id");
            this.render();
            // this.game.move(this.initialIdx, this.endIdx);
            this.wipeVars();

        } else {
            this.initialIdx = $($tower).attr("id");
        }

    }

    wipeVars() {
        this.initialIdx = undefined;
        this.endIdx = undefined;
    }


}

View.prototype.render = function () {

    // try {
    //     this.game.move(this.initialIdx, this.endIdx);
        
    // } catch (e) {
    //     console.log(e);
    //     alert("Not a valid move");
    // }

    // Original code doesnt throw an error. Only false
    if (this.game.move(this.initialIdx, this.endIdx) === false) {
        alert("Not a vlid move");
    }

}

View.prototype.setupTowers = function() {



    // Applied ID using the for loop :)
    for (let i = 0; i < 3; i++) {
        $(this.dom).append('<ul class="row" id=' + i + '></ul>')
    }

    $("#0").append('<li class=top-square></li>')
    $("#0").append('<li class=middle-square></li>')
    $("#0").append('<li class=bottom-square></li>')


}

module.exports = View;