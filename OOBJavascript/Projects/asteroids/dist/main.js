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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nconst DEFAULTS = {\n    COLOR: \"#505050\",\n    RADIUS: 50,\n    SPEED: 10\n};\n\nfunction Asteroid(options) {\n\n    options = options || {};\n    options.color = options.color || DEFAULTS.COLOR;\n    options.rad = options.rad || DEFAULTS.RADIUS;\n    options.vel = options.vels || Utils.randomVec(2);\n    options.game = options.game;\n    \n\n    // This calls the super constructor functions :)\n    MovingObject.call(this, options);\n\n}\n\nUtils.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nconst GAME_DEFAULTS = {\n\n    DIM_X: 1920,\n    DIM_Y: 1200,\n    NUM_ASTEROIDS: 15\n    \n};\n\nfunction Game(options) {\n    \n    this.asteroids = [];\n    this.addAsteroids();\n\n\n}\n\nfunction getRandomInt(min, max) {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min) + min);\n}\n  \nGame.prototype.addAsteroids = function() {\n\n    for (let i = 0; i < GAME_DEFAULTS.NUM_ASTEROIDS; i++) {\n        this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: this}));\n    }\n\n}\n\nGame.prototype.randomPosition = function() {\n    let xCoord = getRandomInt(0, GAME_DEFAULTS.DIM_X);\n    let yCoord = getRandomInt(0, GAME_DEFAULTS.DIM_Y);\n    return [xCoord, yCoord];\n}\n\nGame.prototype.move = function() {\n    this.asteroids.forEach(ele => {\n        ele.move();\n    })\n}\n\nGame.prototype.draw = function(ctx) {\n\n    ctx.clearRect(0, 0, GAME_DEFAULTS.DIM_X, GAME_DEFAULTS.DIM_Y);\n\n    this.asteroids.forEach(ele => {\n        ele.draw(ctx);\n    })\n\n}\n\nGame.prototype.checkCollisions = function() {\n    \n    // Need to two for loops. Otherwise you'll need to verify the asteroid doesnt check itself with stringify or some other method.\n\n    let toBeRemoved = [];\n\n    for (let i = 0; i < this.asteroids.length; i++) {\n        for (let j = 0; j < this.asteroids.length; j++) {\n            if (j === i) {\n                continue\n            } else {\n\n                if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {\n                    this.remove(i);\n                    this.remove(j-1);\n  \n                };\n                \n            }\n        }\n\n    }\n\n}\n\nGame.prototype.remove = function(asteroid) {\n    this.asteroids.splice(asteroid, 1);\n}\n\nGame.prototype.wrap = function(pos) {\n\n    if (pos[0] > GAME_DEFAULTS.DIM_X) {\n        return [pos[0] - GAME_DEFAULTS.DIM_X, pos[1]];\n    } else if (pos[0] < 0) {\n        return [pos[0] + GAME_DEFAULTS.DIM_X, pos[1]];\n    } else if (pos[1] > GAME_DEFAULTS.DIM_Y) {\n        return [pos[0], pos[1] - GAME_DEFAULTS.DIM_Y];\n    } else if (pos[1] < 0) {\n        return [pos[0], pos[1] + GAME_DEFAULTS.DIM_Y];\n    } else {\n        return pos;\n    }\n}\n\nGame.prototype.step = function() {\n    this.move();\n    this.checkCollisions();\n}\n\n\nlet g = new Game();\n// console.log(g.asteroids.splice(0, 1));\n// g.remove(0);\n\n// console.log(\"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\");\n// console.log(g.asteroids)\n\n\n// console.log(g.wrap([1930, 1200]));\n// console.log(g.wrap([-10, 1200]));\n// console.log(g.wrap([1920, 1210]));\n// console.log(g.wrap([1920, -10]));\n\n// Game.prototype.print = function() {\n//     console.log(this.asteroid);\n// }\n\n\n\nmodule.exports = Game;\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\nfunction GameView (ctx) {\n\n    this.game = new Game();\n    this.ctx = ctx;\n\n}\n\nGameView.prototype.start = function() {\n    // window.setInterval(this.game.draw(this.ctx), 1000);\n    // window.setInterval(this.game.print, 1000);\n\n    window.setInterval(() => {\n        this.game.step();\n        this.game.draw(this.ctx);\n        \n    }, 20);\n    // console.log(this.game);\n    // for (let i = 0; i < 100000; i++) {\n    //     this.game.move();\n    // }\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nfunction MovingObject(options) {\n\n\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.rad = options.rad;\n    this.color = options.color;\n    this.game = options.game;\n\n\n}\n\n\nMovingObject.prototype.draw = function(ctx) {\n\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.rad, 0, 2 * Math.PI, false);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n\n    this.pos = this.game.wrap(this.pos);\n    this.pos[0] = this.pos[0] + this.vel[0];\n    this.pos[1] = this.pos[1] + this.vel[1];\n}\n\nMovingObject.prototype.isCollidedWith = function(obj) {\n    let sumRadii = this.rad + obj.rad;\n    if (Utils.dist(this.pos, obj.pos) < sumRadii) {\n        return true;\n    }\n\n    return false;\n}\n\nMovingObject.prototype.print = function() {\n\n    console.log(this.color);\n    console.log(this.pos);\n    console.log(this);\n}\n\nlet m = new MovingObject({pos: [0,0], vel: [1,1], rad: 1})\nlet c = new MovingObject({pos: [0,2], vel: [1,1], rad: 2})\n\nconsole.log(m.isCollidedWith(c));\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("const Utils = {\n    inherits: function inherits(childClass, parentClass) {\n        childClass.prototype = Object.create(parentClass.prototype);\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec: function randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Utils.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n\n    scale: function scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    },\n\n    // Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)\n\n    dist: function dist(pos1, pos2) {\n        return Math.sqrt((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2)\n    },\n\n    // Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])\n\n    norm: function norm(pos) {\n        return this.dist([0,0], [pos[0], pos[1]]);\n    }\n}\n\n// console.log(Utils.norm([2,0]));\n// console.log(Utils.randomVec(2));\n\n\nmodule.exports = Utils;\n\n//# sourceURL=webpack:///./src/utils.js?");

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
eval("console.log(\"Webpack is working\");\nconst MovingObject = __webpack_require__(/*! ../src/moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ../src/asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ../src/game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ../src/game_view.js */ \"./src/game_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n\n\n\n\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d');\n    window.GameView = GameView\n    let g = new GameView(ctx);\n\n    g.start();\n\n\n    \n\n});\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;