const util = require("./api_util.js");

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
            this.$ul.append("<li>" + `<a href='http://localhost:3000/users/${ele.id}'>` + ele.username + "</a></li>")
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