const util = require("./api_util.js");
const FollowToggle = require("./follow_toggle.js");

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
            this.$ul.append("<li>" + `<a href='http://localhost:3000/users/${ele.id}'>` + ele.username + '</a><button></button></li>')
            // new FollowToggle(this.$ul.find("li:contains('Duld')"), {userId: ele.id, followState: ele.followed});

            // This find it well enough.
            // this.$ul.find("li:contains('Duld')").find('button').addClass("follow-toggle");

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