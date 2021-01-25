const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');
const TweetCompose = require('./tweet_compose.js');

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