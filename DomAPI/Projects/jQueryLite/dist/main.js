/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("document.addEventListener(\"DOMContentLoaded\", () => {\n    console.log(\"Webpack working\");\n\n    window.$l = (e) => {\n        let returnArr = []\n        let nodeList = document.querySelectorAll(e);\n\n        nodeList.forEach((el) => {\n            returnArr.push(el);\n        })\n\n        return returnArr;\n    }\n})\n\n//# sourceURL=webpack:///./src/index.js?");
/******/ })()
;