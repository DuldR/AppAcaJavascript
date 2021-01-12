const HanoiGame = require('../src/game.js');

console.log("Webpack work");

$(() => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
