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

/***/ "./src/compose.js":
/*!************************!*\
  !*** ./src/compose.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MessageStore = __webpack_require__(/*! ./message_store.js */ \"./src/message_store.js\");\n\nconst Compose = {\n\n    render: function render() {\n\n        let divContainer = document.querySelector('div.content');\n        divContainer.addEventListener('change', function(event) {\n            // alert(event.currentTarget);\n            console.log(event.target.name);\n            console.log(event.target.value);\n\n            MessageStore.updateDraftField(event.target.name, event.target.value);\n            console.log(MessageStore.getMessageDraft());\n        })\n\n        \n        // Adds email html\n        let inputDiv = document.createElement('div');\n        inputDiv.className = 'new-message';\n        inputDiv.innerHTML = this.renderForm();\n\n        return inputDiv;\n\n    },\n\n    renderForm: function renderForm() {\n\n        let currentDraft = MessageStore.getMessageDraft();\n        let inputHTML = `<p class='new-message-header'>New Message</p>\n\n\n        <form class='compose-form'>\n            <input placeholder='Recipient' name='to' type='text' value=${currentDraft.to}>\n            <input placeholder='Subject' name='subject' type='text' value=${currentDraft.subject}>\n            <textarea name='body' rows='20'>${currentDraft.body}</textarea>\n\n            <button type='submit' class='btn btn-primary submit-message'>Send</button>\n        </form>`\n\n        return inputHTML\n\n    }\n\n}\n\nmodule.exports = Compose;\n\n//# sourceURL=webpack://Mail/./src/compose.js?");

/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MessageStore = __webpack_require__(/*! ./message_store.js */ \"./src/message_store.js\");\n\nconst Inbox = {\n\n\n    render: function render() {\n        \n        let inboxMessages = MessageStore.getInboxMessages();\n        let inputUL = document.createElement('ul');\n        inputUL.className = 'messages';\n\n        inboxMessages.forEach((message) => {\n\n            let inputMessage = this.renderMessage(message);\n\n\n            inputUL.appendChild(inputMessage);\n        });\n\n        return inputUL;\n    },\n\n    renderMessage: function renderMessage(message) {\n\n        let inputLi = document.createElement('li');\n        inputLi.className = 'message';\n        inputLi.innerHTML = `<span class='from'>${message.from}</span><span class='subject'>${message.subject}</span>\n        <span class='body'>${message.subject}</span>`\n\n        return inputLi;\n\n    \n\n    }\n}\n\nmodule.exports = Inbox;\n\n//# sourceURL=webpack://Mail/./src/inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Inbox = __webpack_require__(/*! ./inbox.js */ \"./src/inbox.js\");\nconst Compose = __webpack_require__(/*! ./compose.js */ \"./src/compose.js\");\nconst Sent = __webpack_require__(/*! ./sent.js */ \"./src/sent.js\");\nconst Router = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\n    console.log(\"Webpack work\");\n\n    let routes = {\n        inbox: Inbox,\n        sent: Sent,\n        compose: Compose,\n    }\n\n    let inputContent = document.querySelector('.content');\n    let sidebarNodes = document.querySelectorAll('.sidebar-nav li');\n\n\n    sidebarNodes.forEach((node) => {\n        node.addEventListener('click', function() {\n\n            // This was setting it to the function :)\n            window.location.hash = node.innerText.toLowerCase();\n\n        })\n    })\n\n    let route = new Router(inputContent, routes);\n    route.start();\n\n\n\n})\n\n//# sourceURL=webpack://Mail/./src/index.js?");

/***/ }),

/***/ "./src/message_store.js":
/*!******************************!*\
  !*** ./src/message_store.js ***!
  \******************************/
/***/ ((module) => {

eval("const Messages = {\n    sent: [\n        {\n            to: \"Coolguy420@69.com\",\n            subject: \"That thing I sent you\",\n            body: \"Did you egt it?\"\n        },\n\n        {\n            to: \"HarvyBirdman@attorny@law.com\",\n            subject: \"A fatty grunt?\",\n            body: \"It IS\"\n        }\n    ],\n\n    inbox: [\n        {\n            from: \"ob\",\n            subject: \"Nigerian Prince - Scam?\",\n            body: \"May be legit\"\n        },\n\n        {\n            from: \"covid\",\n            subject: \"GME\",\n            body: \"To the moon\"\n        }\n    ]\n}\n\nconst Message = function message() {\n    this.from = \"\"\n    this.to = \"\"\n    this.subject = \"\"\n    this.body = \"\"\n}\n\nlet messageDraft = new Message();\n\nconst MessageStore = {\n\n    getInboxMessages: function getInboxMessages() {\n        return Messages.inbox;\n    },\n\n    getSentMessages: function getSentMessages() {\n        return Messages.sent;\n    },\n\n    updateDraftField: function updateDraftField(field, value) {\n        messageDraft[field] = value;\n\n    },\n\n    sendDraft: function sendDraft() {\n        Messages.sent.push(messageDraft);\n        messageDraft = new Message();\n    },\n\n    getMessageDraft: function getMessageDraft() {\n        return messageDraft;\n    }\n}\n\nmodule.exports = MessageStore;\n\n//# sourceURL=webpack://Mail/./src/message_store.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((module) => {

eval("function router(node, routes) {\n\n    this.node = node;\n    this.routes = routes;\n}\n\n\nrouter.prototype.start = function start() {\n\n    this.render();\n    // Lol. It wasnt passing this lol very cool I love javascritp lol :)\n    window.addEventListener('hashchange', this.render.bind(this));\n\n}\n\nrouter.prototype.activeRoute = function activeRoute() {\n\n    return this.routes[window.location.hash.slice(1)];\n}\n\nrouter.prototype.render = function render() {\n\n    this.node.innerHTML = \"\"\n    let component = this.activeRoute();\n  \n\n    if (component === undefined) {\n        return\n    } else {\n        this.node.appendChild(component.render());\n    }\n}\n\n\nmodule.exports = router;\n\n//# sourceURL=webpack://Mail/./src/router.js?");

/***/ }),

/***/ "./src/sent.js":
/*!*********************!*\
  !*** ./src/sent.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MessageStore = __webpack_require__(/*! ./message_store.js */ \"./src/message_store.js\");\n\n\nconst Sent = {\n\n    render: function render() {\n                \n        let sentMessages = MessageStore.getSentMessages();\n        let inputUL = document.createElement('ul');\n        inputUL.className = 'messages';\n\n        sentMessages.forEach((message) => {\n\n            let inputMessage = this.renderMessage(message);\n\n\n            inputUL.appendChild(inputMessage);\n        });\n\n        return inputUL;\n\n    },\n\n    renderMessage: function renderMessage(message) {\n        let inputLi = document.createElement('li');\n        inputLi.className = 'message';\n        inputLi.innerHTML = `<span class='to'>${message.to}</span><span class='subject'>${message.subject}</span>\n        <span class='body'>${message.subject}</span>`\n\n        return inputLi;\n    }\n\n\n\n}\n\nmodule.exports = Sent;\n\n//# sourceURL=webpack://Mail/./src/sent.js?");

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