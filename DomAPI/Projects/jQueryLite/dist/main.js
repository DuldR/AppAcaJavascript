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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection {\n\n    constructor (arr) {\n        this.collection = arr;\n    }\n}\n\nDOMNodeCollection.prototype.html = function html(string) {\n\n    let inputStr = string || null\n\n\n    if (inputStr !== null) {\n        this.collection.forEach((el) => {\n            el.innerHTML = inputStr;\n        })\n    } else {\n        // IMplicit return :)\n        console.log(this.collection[0].innerHTML)\n        this.collection[0].innerHTML;\n    }\n}\n\nDOMNodeCollection.prototype.empty = function empty() {\n    this.html(\" \");\n}\n\nDOMNodeCollection.prototype.append = function append(ele) {\n    // Test single\n    // This returns true\n    console.log(ele instanceof DOMNodeCollection);\n    // console.log(ele instanceof HTMLElement);\n    // This works for string\n    if ('string' === typeof(ele)) {\n        this.collection.forEach((el) => {\n            el.innerHTML = el.innerHTML + ele;\n        })\n    } else if (ele instanceof HTMLElement) {\n        // This achieves what append does.\n        this.collection.forEach((el) => {\n            let clonedNode = ele.cloneNode(true);\n            el.appendChild(clonedNode);\n        })\n\n        ele.remove();\n    } else if (ele instanceof DOMNodeCollection) {\n        // This also accomplishes jquery append.\n        ele.collection.forEach((el) => {\n            this.collection[0].appendChild(el);\n        })\n\n    }\n\n    // More is needed. If the the this collection is a collection and the appendee is a collection, jqeury uses the first element from the appendee and appends that to the this collection\n\n}\n\nDOMNodeCollection.prototype.attr = function attr(ele, set) {\n    // return this.collection[0].attributes.getNamedItem(ele).value\n    if (set === undefined) {\n        return this.collection[0].getAttribute(ele);\n    } else {\n        this.collection[0].setAttribute(ele, set);\n    }\n}\n\nDOMNodeCollection.prototype.addClass = function addClass(el) {\n\n\n    this.collection.forEach((ele) => {\n        ele.classList.add(el);\n    })\n}\n\nDOMNodeCollection.prototype.removeClass = function removeClass(el) {\n\n    this.collection.forEach((ele) => {\n        ele.classList.remove(el);\n    })\n\n}\n\n// Add this later\nDOMNodeCollection.prototype.wrapString = function wrapString(str) {\n    \n}\n\nDOMNodeCollection.prototype.children = function children(selector) {\n    let returnArr = [];\n\n    // Use an if to modify the selector lol.\n    // If its a class or id method\n    if (selector !== undefined) {\n        if (selector[0] === '.' || selector[0] === '#') {\n            selector = selector.slice(1);\n        }\n    }\n\n    this.collection.forEach((el) => {\n\n        if (selector !== undefined) {\n            for (i=0; i < el.children.length; i++) {\n                if (el.children[i].classList.contains(selector)) {\n                    returnArr.push(el.children[i]);\n                }\n            }\n        } else {\n            for (i=0; i < el.children.length; i++) {\n                returnArr.push(el.children[i]);\n            }\n        }\n\n    })\n\n    return new DOMNodeCollection(returnArr);\n}\n\n\nDOMNodeCollection.prototype.parent = function parent(selector) {\n    let returnArr = [];\n\n    // Use an if to modify the selector lol.\n    // If its a class or id method\n    // We can refactor this to another method\n    if (selector !== undefined) {\n        if (selector[0] === '.' || selector[0] === '#') {\n            selector = selector.slice(1);\n        }\n    }\n\n    this.collection.forEach((el) => {\n\n        if (selector !== undefined) {\n            if (el.parentElement.classList.contains(selector)) {\n                // Jquery doesnt return duplicates\n                if (returnArr.includes(el.parentElement) !== true) {\n                    returnArr.push(el.parentElement);\n                }\n            }\n        } else {\n            if (returnArr.includes(el.parentElement) !== true) {\n                    returnArr.push(el.parentElement);\n            }\n        }\n\n    })\n\n    return new DOMNodeCollection(returnArr);\n\n}\n\n\nDOMNodeCollection.prototype.find = function find(selector) {\n\n    let returnArr = []\n\n    // Dont need the string modification on this as it uses query selector\n\n    this.collection.forEach((ele) => {\n\n        let nodeList = ele.querySelectorAll(selector);\n\n        nodeList.forEach((node) => {\n\n            returnArr.push(node);\n\n        })\n    })\n\n    return new DOMNodeCollection(returnArr);\n}\n\nDOMNodeCollection.prototype.remove = function remove(selector) {\n\n    this.collection.forEach((node) => {\n        // let candidate = document.querySelector(node);\n        // JUST THAT EASY LOl\n        node.remove();\n    })\n}\n\nDOMNodeCollection.prototype.on = function on(event, func) { \n\n    this.collection.forEach((node) => {\n        node.addEventListener(event, func);\n    })\n\n}\n\nDOMNodeCollection.prototype.off = function on(event, func) { \n    this.collection.forEach((node) => {\n        node.removeEventListener(event, func);\n    })\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack://jQueryLite/./src/dom_node_collection.js?");

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
eval("const nodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    console.log(\"Webpack working\");\n\n\n    window.$l = (e) => {\n\n        let funcArr = []\n        let returnArr = []\n\n        function cycleFun() {\n            funcArr.forEach((func) => {\n                func();\n            })\n        }\n\n        if (e instanceof Function) {\n            funcArr.push(e);\n            if (document.readyState === 'complete') {\n                cycleFun();\n            }\n        } else {\n            let nodeList = document.querySelectorAll(e);\n\n            nodeList.forEach((el) => {\n                returnArr.push(el);\n            })\n\n            return new nodeCollection(returnArr);\n        }\n    }\n\n    // This works\n    window.$l.extend = function (target, arg1, arg2) {\n        return Object.assign(target, arg1, arg2);\n    }\n\n    window.$l.ajax = function (options = {}) {\n\n        let defaults = {\n            method: 'GET',\n            URL: window.location.href,\n            success: function succ() {\n                console.log(\"Success!\");\n            },\n            error: function err() {\n                console.log('Error!');\n            },\n            contentType: 'application/x-www-form-urlencoded; charset=UTF-8'\n        }\n\n        options = this.extend(defaults, options)\n    \n        // console.log(options.method);\n        // console.log(options.URL);\n\n        // THIS SHIT WORKS.\n        const xhr = new XMLHttpRequest();\n        xhr.open(options.method, options.URL);\n        \n        xhr.onload = function () {\n            console.log(xhr.status);\n            console.log(xhr.responseType);\n            console.log(xhr.response);\n        }\n        xhr.send();\n    }\n\n    // This servus up a HTMLDocument error.\n    // window.$l.prototype.take = () => {\n    //     alert(\"balls\");\n    // }\n})\n\n//# sourceURL=webpack://jQueryLite/./src/index.js?");
})();

/******/ })()
;