const FollowToggle = require('./follow_toggle.js');

console.log("Webpack work");

$(() => {
    const rootEl = $("button.follow-toggle");
    const toggle = new FollowToggle(rootEl);
    
    
    console.log(toggle);
    
})