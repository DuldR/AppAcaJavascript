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

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nconst DEFAULTS = {\n    COLOR: \"#505050\",\n    RADIUS: 25,\n    SPEED: 4\n};\n\nfunction Asteroid(options) {\n\n    options = options || {};\n    options.color = options.color || DEFAULTS.COLOR;\n    options.rad = options.rad || DEFAULTS.RADIUS;\n    options.vec = options.vec || Utils.randomVec(2);\n    \n\n    // This calls the super constructor functions :)\n    MovingObject.call(this, options);\n\n}\n\nUtils.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nconst GAME_DEFAULTS = {\n\n    DIM_X: 1920,\n    DIM_Y: 1200,\n    NUM_ASTEROIDS: 10\n    \n};\n\nfunction Game(options) {\n    \n    this.asteroids = [];\n    this.addAsteroids();\n\n\n}\n\nfunction getRandomInt(min, max) {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min) + min);\n}\n  \nGame.prototype.addAsteroids = function() {\n\n    for (let i = 0; i < GAME_DEFAULTS.NUM_ASTEROIDS; i++) {\n        this.asteroids.push(new Asteroid({pos: this.randomPosition(), vel: [10,10]}));\n    }\n\n}\n\nGame.prototype.randomPosition = function() {\n    let xCoord = getRandomInt(0, GAME_DEFAULTS.DIM_X);\n    let yCoord = getRandomInt(0, GAME_DEFAULTS.DIM_Y);\n    return [xCoord, yCoord];\n}\n\n// Game.prototype.draw = function(ctx) {\n\n//     for (let i = 0; i < this.asteroids.length; i++) {\n//         this.asteroids[i].draw(ctx);\n//     }\n\n// }\n\nGame.prototype.print = function() {\n    console.log(this.asteroids[0].print());\n}\n\n\n\nmodule.exports = Game;\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(options) {\n\n\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.rad = options.rad;\n    this.color = options.color;\n\n\n}\n\n\nMovingObject.prototype.draw = function(ctx) {\n\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.rad, 0, 2 * Math.PI, false);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n    this.pos[0] = this.pos[0] + this.vel[0];\n    this.pos[1] = this.pos[1] + this.vel[1];\n}\n\nMovingObject.prototype.print = function() {\n\n    console.log(this.color);\n    console.log(this.pos);\n    console.log(this);\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("const Utils = {\n    inherits: function inherits(childClass, parentClass) {\n        childClass.prototype = Object.create(parentClass.prototype);\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec: function randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Utils.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n\n    scale: function scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n}\n\nmodule.exports = Utils;\n\n//# sourceURL=webpack:///./src/utils.js?");

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
eval("console.log(\"Webpack is working\");\nconst MovingObject = __webpack_require__(/*! ../src/moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ../src/asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ../src/game */ \"./src/game.js\")\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n\n\n\n\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d');\n    window.MovingObject = MovingObject;\n    const b = new MovingObject({\n        pos: [100, 100],\n        vel: [10, 10],\n        rad: 100,\n        color: \"red\"\n    });\n\n    const a = new Asteroid({\n        pos: [300, 300]\n    });\n\n    const g = new Game();\n\n    // b.draw(ctx);\n \n\n    g.print();\n    \n\n});\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;