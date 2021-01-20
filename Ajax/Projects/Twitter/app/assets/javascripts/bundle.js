/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((module) => {

const APIUtil = {


    followUser: id => APIUtil.changeStatus(id, "POST"),

    unfollowUser: id => APIUtil.changeStatus(id, "DELETE"),

    changeStatus: (id, method) => (
        $.ajax({
            url: "/users/" + id + "/follow",
            dataType: "json",
            method
        })
    ),

    searchUsers: (queryVal) => {
        
    }
};

module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const util = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js");

class FollowToggle {
    constructor($el) {
        this.$ele = $($el);
        this.userId = this.$ele.data("user-id");
        this.followState = this.$ele.data("initial-follow-state");


        this.render();

        // This works.
        this.$ele.on("click", this.handleClick.bind(this))
    
    }


    render() {
        
        if (this.followState === true) {
            this.$ele.text("Unfollow!");
        } else {
            this.$ele.text("Follow!")
        }

        this.$ele.prop('disabled', false);
    }


    handleClick(e) {

        // Got to have this otherwise util will use the globalthis
        const followToggle = this;

        this.$ele.prop('disabled', true);
    
        e.preventDefault();

        if (this.followState === true) {
            util.unfollowUser(this.userId).then(() => {
                followToggle.followState = (!followToggle.followState)
                followToggle.render();
                
            })
        } else if (this.followState === false) {
            util.followUser(this.userId).then(() => {
                followToggle.followState = (!followToggle.followState)
                followToggle.render();
                
            })
        }

        

    }

}

module.exports = FollowToggle;

/***/ }),

/***/ "./frontend/users_search.js":
/*!**********************************!*\
  !*** ./frontend/users_search.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const util = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js");

class UsersSearch {

    constructor($el) {
        this.$ele = $($el);
        this.$input = $($el).find("input");
        this.$ul = $($el).find("ul");

        this.$input.on('input', function() {
            alert("I've gotten it");
        })
    }

    handleInput(e) {

        e.preventDefault();



        
    }



}

module.exports = UsersSearch;

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
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");
const UsersSearch = __webpack_require__(/*! ./users_search.js */ "./frontend/users_search.js");

console.log("Webpack work");

$(() => {
    // This collects all of the buttons
    const rootEl = $("button.follow-toggle");

    // this collects all of the user searchs
    const userEl = $("nav.users-search");

    
    rootEl.each(function(idx, ele) {
        new FollowToggle(ele);
    })

    userEl.each(function(idx, ele) {
        new UsersSearch(ele);
    })
    
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map