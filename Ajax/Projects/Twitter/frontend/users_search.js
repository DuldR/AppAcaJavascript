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

        console.log("UH");


    }

    handleInput(e) {

        const input = this;

        e.preventDefault();

        console.log(input.$input);

        util.searchUsers(this.$input).then(() => {
            input.renderResults();
        })
    }



}

module.exports = UsersSearch;