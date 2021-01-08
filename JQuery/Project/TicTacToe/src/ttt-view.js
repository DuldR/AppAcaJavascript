class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {

    for (let i = 0; i < 3; i++) {
      $(this.$el).append('<ul class="row group"></ul>')
    }

    for (let j = 0; j < 3; j++) {
      $("ul.row").append("<li class=square>Hello</li>")
    }
    $(this.$el).append("<h2>420</h2>")
  }
}

module.exports = View;
