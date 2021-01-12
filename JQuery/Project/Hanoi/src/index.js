const HanoiGame = require('../src/game.js');
const HanoiView = require('../src/hanoi-view.js');

console.log("Webpack work");

$(() => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  const view = new HanoiView(game, rootEl);

  view.setupTowers();
});
