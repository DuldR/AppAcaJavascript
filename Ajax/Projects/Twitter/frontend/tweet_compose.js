const util = require("./api_util.js");

class TweetCompose {

    constructor($el) {
        this.$ele = $($el);

        this.$ele.on("submit", this.handleSubmit.bind(this));
    }

    handleSubmit(e) {

        this.$ele.children(':input').prop('disabled', true);
        this.$ele.find(':submit').val("Posting");

        e.preventDefault();
        this.submit();
    

    }

    submit() {

        const comp = this;

        util.createTweet(this.$ele.serializeJSON()).then(() => {
            console.log("OK");
        });
        
    }

    enable() {
        this.$ele.find(':submit').val("Post Tweet");
        this.$ele.children(':input').prop('disabled', false);
        
    }

}

module.exports = TweetCompose;