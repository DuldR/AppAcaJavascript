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

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("class MovingObject {\n\n    constructor (obj) {\n\n        this.pos = obj.pos;\n        this.vel = obj.vel;\n        this.rad = obj.rad;\n        this.color = obj.color;\n\n    }\n\n}\n\nMovingObject.prototype.print = function() {\n    console.log(\"HUH\");\n}\n\n// MovingObject.prototype.draw(ctx) {\n\n//     ctx.beginPath();\n//     ctx.arc(100, 100, 100, 0, 2 * Math.PI, false);\n//     ctx.fillStyle = 'red';\n//     ctx.fill();\n// }\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

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
eval("// console.log(\"Webpack is working\");\nconst MovingObject = __webpack_require__(/*! ../src/moving_object.js */ \"./src/moving_object.js\");\nconsole.log(MovingObject);\n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n\n\n\n\n    // const canvas = document.getElementById('game-canvas');\n    // const ctx = canvas.getContext('2d');\n    window.MovingObject = MovingObject;\n    const b = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n    });\n\n    b.print();\n    \n\n    \n    // Need to draw moving object here.\n    // How to fill in the window? May need webpack\n    // ctx.beginPath();\n    // ctx.arc(100, 100, 100, 0, 2 * Math.PI, false);\n    // ctx.fillStyle = 'red';\n    // ctx.fill();\n\n\n    \n\n});\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;