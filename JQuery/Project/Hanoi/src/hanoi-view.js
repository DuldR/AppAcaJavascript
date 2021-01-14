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

            console.log(this.initialIdx);
            console.log(this.endIdx);
        })
    }

    clickTower($tower) {

        if (this.endIdx) {
            this.initialIdx = undefined;
            this.endIdx = undefined;
            return
        }

        if (this.initialIdx) {

            this.endIdx = $($tower).attr("id");

        } else {
            this.initialIdx = $($tower).attr("id");
        }

    }


}

View.prototype.render = function () {

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