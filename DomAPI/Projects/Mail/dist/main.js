/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Router = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\n    console.log(\"Webpack work\");\n\n\n\n    let sidebarNodes = document.querySelectorAll('.sidebar-nav li');\n\n    sidebarNodes.forEach((node) => {\n        node.addEventListener('click', function() {\n\n            // This was setting it to the function :)\n            window.location.hash = node.innerText.toLowerCase;\n\n        })\n    })\n\n    let newRouter = new Router(sidebarNodes[0]);\n\n    console.log(newRouter.node);\n\n\n})\n\n//# sourceURL=webpack://Mail/./src/index.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((module) => {

eval("function router(node) {\n\n    this.node = node;\n}\n\n\nrouter.prototype.start = function start() {\n\n    document.addEventListener('hashchange', this.render);\n\n}\n\nrouter.prototype.activeRoute = function start() {\n    \n}\n\nrouter.prototype.render = function start() {\n    alert('ALERRT HASH CHANGE');\n}\n\n\nmodule.exports = router;\n\n//# sourceURL=webpack://Mail/./src/router.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;