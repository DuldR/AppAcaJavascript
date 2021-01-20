const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

console.log("Webpack work");

$(() => {
    // This collects all of the buttons
    const rootEl = $("button.follow-toggle");

    // this collects all of the user searchs
    const userEl = $("nav.users-search");

    
    rootEl.each(function(idx, ele) {
        new FollowToggle(ele);
    })

    // userEl.each(function(idx, ele) {
    //     new UsersSearch(ele);
    // })
    
})