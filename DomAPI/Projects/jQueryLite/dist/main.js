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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection {\n\n    constructor (arr) {\n        this.collection = arr;\n    }\n}\n\nDOMNodeCollection.prototype.html = function html(string) {\n\n    let inputStr = string || null\n\n\n    if (inputStr !== null) {\n        this.collection.forEach((el) => {\n            el.innerHTML = inputStr;\n        })\n    } else {\n        // IMplicit return :)\n        console.log(this.collection[0].innerHTML)\n        this.collection[0].innerHTML;\n    }\n}\n\nDOMNodeCollection.prototype.empty = function empty() {\n    this.html(\" \");\n}\n\nDOMNodeCollection.prototype.append = function append(ele) {\n    // Test single\n    // This returns true\n    console.log(ele instanceof DOMNodeCollection);\n    // console.log(ele instanceof HTMLElement);\n    // This works for string\n    if ('string' === typeof(ele)) {\n        this.collection.forEach((el) => {\n            el.innerHTML = el.innerHTML + ele;\n        })\n    } else if (ele instanceof HTMLElement) {\n        // This achieves what append does.\n        this.collection.forEach((el) => {\n            let clonedNode = ele.cloneNode(true);\n            el.appendChild(clonedNode);\n        })\n\n        ele.remove();\n    } else if (ele instanceof DOMNodeCollection) {\n        // This also accomplishes jquery append.\n        ele.collection.forEach((el) => {\n            this.collection[0].appendChild(el);\n        })\n\n    }\n\n    // More is needed. If the the this collection is a collection and the appendee is a collection, jqeury uses the first element from the appendee and appends that to the this collection\n\n}\n\nDOMNodeCollection.prototype.attr = function attr(ele, set) {\n    // return this.collection[0].attributes.getNamedItem(ele).value\n    if (set === undefined) {\n        return this.collection[0].getAttribute(ele);\n    } else {\n        this.collection[0].setAttribute(ele, set);\n    }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

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
eval("const nodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    console.log(\"Webpack working\");\n\n\n    window.$l = (e) => {\n        let returnArr = []\n        let nodeList = document.querySelectorAll(e);\n        // let testNode = document.querySelector(\"div\");\n\n        nodeList.forEach((el) => {\n            returnArr.push(el);\n        })\n\n        // These return true and print.\n        // console.log(testNode instanceof HTMLElement);\n        // console.log(testNode.innerText);\n\n        // This return an element\n\n        return new nodeCollection(returnArr);\n    }\n})\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;