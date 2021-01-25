const util = require("./api_util.js");

class TweetCompose {

    constructor($el) {
        this.$ele = $($el);

        this.$ele.on("submit", this.handleSubmit.bind(this));
    }

    handleSubmit(e) {

        e.preventDefault();
        this.submit();


    }

    submit() {

        util.createTweet(this.$ele.serializeJSON());
        
    }

}

module.exports = TweetCompose;