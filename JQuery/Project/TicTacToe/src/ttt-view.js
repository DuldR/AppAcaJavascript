class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  // So annoying - Which is more readable? Neither.
  bindEvents() {
    $("li.square").click((ele) => {

      let target = $(ele.currentTarget);
      this.makeMove(target);
    })
  }

  makeMove($square) {

    let player = this.game.currentPlayer;
    let pos = $($square).attr('data-pos').split(',').map(Number);

    $square.css('background-color', 'white');

    try {
      this.game.playMove(pos);
      $square.text(player).addClass('checked');
    } catch (e) {
      alert(e.msg);
    }

    if (this.game.isOver()) {

      let win = this.game.winner();
      $('li').not(':contains(' + win + ')').addClass('loser');
      $('li:contains(' + win + ')').css("background-color", "green").addClass("winner");

      alert(win + " is the winner!")
    }
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
