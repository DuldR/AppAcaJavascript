class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {
    $("li.square").click(function() {
      // I need position first
      // this.game.playMove();
    })
  }

  makeMove($square) {}

  setupBoard() {

    for (let i = 0; i < 3; i++) {
      $(this.$el).append('<ul class="row group"></ul>')
    }

    for (let j = 0; j < 3; j++) {
      $("ul.row").append("<li class=square></li>")
    }

    // This doesnt work as yu're collecting all of the LI items every loop
    // const rowIdx = this.$el.find(".row").length;
    // for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
    //   for (let colIdx = 0; colIdx < 3; colIdx++) {
    //     $("li.square").attr("data-pos", [rowIdx, colIdx]);
    //   }
    // }

    let listItems = $("li.square");
    let colIdx = 0;
    let rowIdx = 0;
    listItems.each( (idx, ele) => {
      // console.log(idx);
      $(ele).attr("data-pos", [rowIdx, colIdx])
      if (idx % 3 === 2) {
        colIdx = 0;
        rowIdx++;
        return;
      }
      colIdx++;
    })
  }
}

module.exports = View;
