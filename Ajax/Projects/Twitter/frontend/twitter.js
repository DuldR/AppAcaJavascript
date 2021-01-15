const FollowToggle = require('./follow_toggle.js');

console.log("Webpack work");

$(() => {
    // This collects all of the buttons
    const rootEl = $("button.follow-toggle");

    
    rootEl.each(function(idx, ele) {
        new FollowToggle(ele);
    })
    
})