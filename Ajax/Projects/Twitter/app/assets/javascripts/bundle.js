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

    createTweet: (form) => (
        $.ajax({
            url: "/tweets",
            dataType: "json",
            method: "POST",
            data: form
        })
    ),

    fetchTweet: (req) => (
        $.ajax({
            url: "/feed",
            dataType: "json",
            data: {
                max_created_at: req
            }
        })
    )
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

/***/ "./frontend/infinite_tweets.js":
/*!*************************************!*\
  !*** ./frontend/infinite_tweets.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const util = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js");

class InfiniteTweets {

    constructor ($ele) {

        // DOM Selector
        this.$ele = $($ele);
        this.$feed = $($ele).find("ul.feed");

        // Event Handler
        this.$ele.find('a.fetch-more').on('click', this.fetchTweets.bind(this));
    

        // Limit Tweets
        this.maxCreatedAt = null;
    
    }


    fetchTweets () {

        if (this.maxCreatedAt !== null) {
            util.fetchTweet(this.maxCreatedAt).then((data) => {
                this.insertTweets(data);
                this.maxCreatedAt = data[data.length - 1].created_at;
                this.enoughTweets();
            })
        } else {
            util.fetchTweet().then((data) => {
                this.insertTweets(data);
                this.maxCreatedAt = data[data.length - 1].created_at;
                this.enoughTweets();
            })
            
        }
    }

    insertTweets (tweet) {

        tweet.forEach((ele) => {
            this.$feed.append(`<li>${JSON.stringify(ele.content)}</li>`);
        })

    }

    enoughTweets () {
    
        let len = this.$feed.find('li').length;
        console.log(len);
        if (len > 3) {
            this.$ele.find('a.fetch-more').text("No More Tweets");
            this.$ele.find('a.fetch-more').off('click');
        }
        
    }

}

module.exports = InfiniteTweets;

/***/ }),

/***/ "./frontend/tweet_compose.js":
/*!***********************************!*\
  !*** ./frontend/tweet_compose.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const util = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js");

class TweetCompose {

    constructor($el) {

        // This is terrible.
        this.$ele = $($el);
        this.$ul = this.$ele.find('ul.feed');

        this.$textArea = this.$ele.find('textarea');
        this.$charLeft = this.$ele.find('.chars-left');

        

        this.$addMent = this.$ele.find('.add-mention');

        
        this.$textArea.on('input', this.handleInput.bind(this));
        this.$ele.on("submit", this.handleSubmit.bind(this));
        this.$addMent.on('click', this.handleClick.bind(this));


        // This works.
        this.$ele.on('click', '.remove-mentioned-user', event => {
            $(event.currentTarget).parent().remove();
        })

    }

    getMenVals(e) {
        let vals = this.$ele.find('.mention');
        console.log(vals);
    }

    testUser(e) {
        this.test();
    }

    test() {
        this.$addedMention = this.$ele.find('.added-mention');
        // $.each(this.$addedMention, function(idx,ele) {
        //     console.log(ele);
        // })
        this.$addedMention.each(function(idx, ele) {

            // IT WORKS BITCH.
            let val = $(ele).find('select').val();
            console.log(val);
            }
        )
    }

    // Update feed with new tweet
    handleSubmit(e) {

        e.preventDefault();
        this.submit();
    }

    // Tweet character length
    handleInput(e) {
        e.preventDefault();
        this.renderChar();
    }

    handleClick(e) {
        e.preventDefault();
        this.newUserSelect();

    }

    renderChar() {
        this.$charLeft.empty();
        let userEntry = this.$textArea.val().length
        this.$charLeft.append((140 - userEntry) + " characters left.");
    }

    submit() {
        let serialized = this.$ele.serializeJSON();
        this.$ele.children(':input').prop('disabled', true);
        this.$ele.find(':submit').val("Posting");

        util.createTweet(serialized).then((data) => {
            this.clearInput();
            this.enable();
            // Use this to append to the top of the ul feed.
            // this.$ul.append(`<li>${JSON.stringify(data)}</li>`);

            console.log(this.$ul);
            this.$ul.addClass("butts");
            
        });
        
    }

    enable() {
        this.$ele.find(':submit').val("Post Tweet");
        this.$ele.children(':input').prop('disabled', false);
    }

    clearInput() {
        this.$ele.find('textarea').val("");
        this.$ele.find('select').val("");
        this.$ele.find('.mentioned-users').empty();
    }


    // Mentions

    newUserSelect() {
        let users = window.users;

        // Pointer for finding created element. I dont know how to append to just created element :)
        // Easier way to do this. Just map the user options and plug that in to a new html block

        let num = this.$ele.find('label').length;
        
        // Better to set a constant to html and feed it in as a string.
        this.$ele.find('.mentioned-users').append(`<label class='mention-${num} added-mention'>Mention <div><a href='javascript:;' class='remove-mentioned-user'>Remove?</a>  <select name='tweet[mentioned_user_ids][]'><option> </option></select></div></label>`);

        let mentionOption = this.$ele.find(`.mention-${num}`).find('select');

        $.each(users, function(idx, ele) {
            mentionOption.append(`<option value='${ele.userId}'>${ele.name}</option>`)
        })
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
const InfiniteTweets = __webpack_require__(/*! ./infinite_tweets.js */ "./frontend/infinite_tweets.js");

console.log("Webpack work");

$(() => {
    // This collects all of the buttons
    const rootEl = $("button.follow-toggle");

    // this collects all of the user searchs
    const userEl = $("nav.users-search");

    // grab the tweet-compose form
    const composeEl = $("form.tweet-compose");

    // grab infinite feed
    const feedEl = $("div.infinite-feed");

    
    rootEl.each(function(idx, ele) {
        new FollowToggle(ele);
    })

    userEl.each(function(idx, ele) {
        new UsersSearch(ele);
    })

    composeEl.each(function(idx, ele) {
        new TweetCompose(ele);
    })

    feedEl.each(function(idx, ele) {
        new InfiniteTweets(ele);
    })

    
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map