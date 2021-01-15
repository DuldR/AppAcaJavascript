const FollowToggle = require('./follow_toggle.js');


$(() => {
    const rootEl = $("button.follow-toggle");
    const toggle = new FollowToggle(rootEl);
    toggle.alert();
})