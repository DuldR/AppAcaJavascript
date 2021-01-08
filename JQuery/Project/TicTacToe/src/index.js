const View = require('../src/ttt-view.js');
const Game = require('../src/game.js')

  $(() => {
    // Your code here

    let g = new Game();
    let v = new View(g, $("figure.ttt"));

    v.setupBoard();
  
  });
