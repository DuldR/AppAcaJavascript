const util = require("./api_util.js");

class UsersSearch {

    constructor($el) {
        this.$ele = $($el);
        this.$input = $($el).find("input");
        this.$ul = $($el).find("ul");


        // This is working.
        // this.$input.on('input', function() {
        //     alert("I've gotten it");
        // })

        this.$ele.on("input", this.handleInput.bind(this));
    }

    handleInput(e) {

        e.preventDefault();

        $.ajax({
            url: "/users/search",
            dataType: 'html',
            data: this.$input
        })

        
    }



}

module.exports = UsersSearch;