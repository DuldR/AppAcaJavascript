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

      // Do all this in makeMove
      // try {
      //   console.log(this.game.currentPlayer);
      //   this.game.playMove(pos);
      //   console.log(this.game.currentPlayer);
      //   this.makeMove($(target))
      //   // console.log(this.game);

      //   // alert(this.game.winner());
      //   // alert(this.game.isOver())
      //   if (this.game.isOver()) {

      //     let win = this.game.winner();
      //     $('li').not(':contains(' + win + ')').addClass('loser');
      //     $('li:contains(' + win + ')').css("background-color", "green").addClass("winner");

      //     alert(win + " is the winner!")
      //   }

      // } catch (error) {
      //   alert(error.msg);
      // }
    })
  }

  makeMove($square) {

    let player = this.game.currentPlayer;
    let pos = $($square).attr('data-pos').split(',').map(Number);

    $square.css('background-color', 'white');
    // box.text(this.game.currentPlayer).addClass('checked');

    try {
      console.log(player);
      this.game.playMove(pos);
      console.log(player);
      // Here's the problem :)
      console.log(this.game.currentPlayer);

    } catch (e) {
      alert(e.msg);
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
