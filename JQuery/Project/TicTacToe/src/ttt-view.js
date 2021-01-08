class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  // So annoying
  // bindEvents() {
  //   $("li.square").click((ele) => {

  //     // This only allows if you use an anon function. But you dont get to reference this.game
  //     // let pos = $(this).attr('data-pos');

  //     // Use arrow functions and reference current target

  //     // let pos = $(ele.currentTarget).attr('data-pos');
  //     // console.log(this.game);
  //     // console.log(pos);
  //   //   this.game.playMove(pos);
  //   //   $(this).css('background-color', "white");
  //   //   console.log($(this).css('background-color'))
  //   // })
  //   })
  // }

  bindEvents() {
    // WHAT IS THIS MADNESS????
    var that = this;
    $('li.square').click(function() {
      let pos = $(this).attr('data-pos').split(",").map(Number);
      console.log(pos);
      // that.game.playMove(pos);
      // $(this).css('background-color', 'white');
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
