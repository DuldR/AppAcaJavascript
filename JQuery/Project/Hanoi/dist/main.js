/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module) => {

eval("class Game {\n  constructor() {\n    this.towers = [[3, 2, 1], [], []];\n  }\n\n  isValidMove(startTowerIdx, endTowerIdx) {\n      const startTower = this.towers[startTowerIdx];\n      const endTower = this.towers[endTowerIdx];\n\n      if (startTower.length === 0) {\n        return false;\n      } else if (endTower.length == 0) {\n        return true;\n      } else {\n        const topStartDisc = startTower[startTower.length - 1];\n        const topEndDisc = endTower[endTower.length - 1];\n        return topStartDisc < topEndDisc;\n      }\n  }\n\n  isWon() {\n      // move all the discs to the last or second tower\n      return (this.towers[2].length == 3) || (this.towers[1].length == 3);\n  }\n\n  move(startTowerIdx, endTowerIdx) {\n      if (this.isValidMove(startTowerIdx, endTowerIdx)) {\n        this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());\n        return true;\n      } else {\n        return false;\n      }\n  }\n\n  print() {\n      console.log(JSON.stringify(this.towers));\n  }\n\n  promptMove(reader, callback) {\n      this.print();\n      reader.question(\"Enter a starting tower: \", start => {\n        const startTowerIdx = parseInt(start);\n        reader.question(\"Enter an ending tower: \", end => {\n          const endTowerIdx = parseInt(end);\n          callback(startTowerIdx, endTowerIdx);\n        });\n      });\n  }\n\n  run(reader, gameCompletionCallback) {\n      this.promptMove(reader, (startTowerIdx, endTowerIdx) => {\n        if (!this.move(startTowerIdx, endTowerIdx)) {\n          console.log(\"Invalid move!\");\n        }\n\n        if (!this.isWon()) {\n          // Continue to play!\n          this.run(reader, gameCompletionCallback);\n        } else {\n          this.print();\n          console.log(\"You win!\");\n          gameCompletionCallback();\n        }\n      });\n  }\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/hanoi-view.js":
/*!***************************!*\
  !*** ./src/hanoi-view.js ***!
  \***************************/
/***/ ((module) => {

eval("class View {\n\n    constructor (game, dom) {\n        this.game = game;\n        this.dom = dom;\n    \n    }\n\n    // View.prototype.setupTowers = function() {\n\n    // }\n\n    bindEvents() {\n        $(\"ul.row\").click((ele) => {\n            let target = $(ele.currentTarget);\n            // Use this to give the tower index :)\n            // console.log($(target).attr(\"id\"));\n\n            this.clickTower(target);\n            console.log(this.game.towers);\n        })\n    }\n\n    clickTower($tower) {\n\n        if (this.initialIdx) {\n\n            this.endIdx = $($tower).attr(\"id\");\n            this.render();\n            // this.game.move(this.initialIdx, this.endIdx);\n            this.wipeVars();\n\n        } else {\n            this.initialIdx = $($tower).attr(\"id\");\n        }\n\n    }\n\n    wipeVars() {\n        this.initialIdx = undefined;\n        this.endIdx = undefined;\n    }\n\n\n}\n\nView.prototype.render = function () {\n\n    // try {\n    //     this.game.move(this.initialIdx, this.endIdx);\n        \n    // } catch (e) {\n    //     console.log(e);\n    //     alert(\"Not a valid move\");\n    // }\n\n    // Original code doesnt throw an error. Only false\n    if (this.game.move(this.initialIdx, this.endIdx) === false) {\n        alert(\"Not a vlid move\");\n    }\n\n}\n\nView.prototype.setupTowers = function() {\n\n\n\n    // Applied ID using the for loop :)\n    for (let i = 0; i < 3; i++) {\n        $(this.dom).append('<ul class=\"row\" id=' + i + '></ul>')\n    }\n\n    $(\"#0\").append('<li class=top-square></li>')\n    $(\"#0\").append('<li class=middle-square></li>')\n    $(\"#0\").append('<li class=bottom-square></li>')\n\n\n}\n\nmodule.exports = View;\n\n//# sourceURL=webpack:///./src/hanoi-view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const HanoiGame = __webpack_require__(/*! ../src/game.js */ \"./src/game.js\");\nconst HanoiView = __webpack_require__(/*! ../src/hanoi-view.js */ \"./src/hanoi-view.js\");\n\nconsole.log(\"Webpack work\");\n\n$(() => {\n  const rootEl = $('.hanoi');\n  const game = new HanoiGame();\n  const view = new HanoiView(game, rootEl);\n\n  view.setupTowers();\n  view.bindEvents();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;