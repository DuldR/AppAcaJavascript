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

    searchUsers: (queryVal) => (
        $.ajax({
            url: "/users/search",
            dataType: 'json',
            data: queryVal
        })
    ),

    createTweet: (form) => {
        $.ajax({
            url: "/tweets",
            dataType: "json",
            method: "POST",
            data: form
        })
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
    constructor($el, options) {


 


        this.$ele = $($el);
        this.userId = this.$ele.data("user-id") || options.userId;

  
        if (this.$ele.data("initial-follow-state") === undefined) {
            this.followState = options.followState;
        } else {
            this.followState = this.$ele.data('initial-follow-state');
        }

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

/***/ "./frontend/tweet_compose.js":
/*!***********************************!*\
  !*** ./frontend/tweet_compose.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const util = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js");

class TweetCompose {

    constructor($el) {
        this.$ele = $($el);

        this.$ele.on("submit", this.handleSubmit.bind(this));
    }

    handleSubmit(e) {

        e.preventDefault();
        this.submit();


    }

    submit() {

        util.createTweet(this.$ele.serializeJSON());
        
    }

}

module.exports = TweetCompose;

/***/ }),

/***/ "./frontend/users_search.js":
/*!**********************************!*\
  !*** ./frontend/users_search.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const util = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js");
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");

class UsersSearch {

    constructor($el) {
        this.$ele = $($el);
        this.$input = $($el).find("input");
        this.$ul = $($el).find("ul.users");


        // This is working.
        // this.$input.on('input', function() {
        //     alert("I've gotten it");
        // })

        this.$ele.on("input", this.handleInput.bind(this));
    }

    renderResults(data) {
        data.forEach(ele => {
            console.log(ele);
            this.$ul.append("<li>" + `<a href='http://localhost:3000/users/${ele.id}'>` + ele.username + '</a><br><button></button></li>')
 
            let buttonEle = this.$ul.find(`li:contains(${ele.username})`).find('button')
            new FollowToggle(buttonEle, {userId: ele.id, followState: ele.followed});
        })

        this.$ul.find("li").each((idx, ele) => {
            console.log(ele);
        })
    }

    handleInput(e) {

        const input = this;

        e.preventDefault();

        this.$ul.empty();

        util.searchUsers(this.$input).then((data) => {
            this.renderResults(data);
        })
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
const TweetCompose = __webpack_require__(/*! ./tweet_compose.js */ "./frontend/tweet_compose.js");

console.log("Webpack work");

$(() => {
    // This collects all of the buttons
    const rootEl = $("button.follow-toggle");

    // this collects all of the user searchs
    const userEl = $("nav.users-search");

    // grab the tweet-compose form
    const composeEl = $("form.tweet-compose");

    
    rootEl.each(function(idx, ele) {
        new FollowToggle(ele);
    })

    userEl.each(function(idx, ele) {
        new UsersSearch(ele);
    })

    composeEl.each(function(idx, ele) {
        new TweetCompose(ele);
    })
    
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map