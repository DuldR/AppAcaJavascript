const util = require("./api_util.js");

class UsersSearch {

    constructor($el) {
        this.$ele = $($el);
        this.$input = $($el).find("input");
        this.$ul = $($el).find("ul");

        this.$input.on('input', function() {
            alert("I've gotten it");
        })
    }

    handleInput(e) {

        e.preventDefault();



        
    }



}

module.exports = UsersSearch;