class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  // So annoying - Which is more readable? Neither.
  bindEvents() {
    $("li.square").click((ele) => {

      let target = $(ele.currentTarget);

      let pos = $(target).attr('data-pos').split(',').map(Number);
      try {
        this.game.playMove(pos);
        this.makeMove($(target))
        // console.log(this.game);

        // alert(this.game.winner());
        // alert(this.game.isOver())
        if (this.game.isOver()) {

          let win = this.game.winner();
          $('li').not(':contains(' + win + ')').addClass('loser');
          $('li:contains(' + win + ')').css("background-color", "green").addClass("winner");

          alert(win + " is the winner!")
        }

      } catch (error) {
        alert(error.msg);
      }
    })
  }

  makeMove($square) {
    
    $square.css('background-color', 'white');
    $square.text(this.game.currentPlayer).addClass('checked');

  }

  setupBoard() {

    for (let i = 0; i < 3; i++) {
      $(this.$el).append('<ul class="row group"></ul>')
    }

    for (let j = 0; j < 3; j++) {
      $("ul.row").append("<li class=square></li>")
    }

    let listItems = $("li.square");
    let colIdx = 0;
    let rowIdx = 0;
    listItems.each( (idx, ele) => {
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
