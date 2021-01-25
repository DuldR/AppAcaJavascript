const util = require("./api_util.js");

class TweetCompose {

    constructor($el) {
        this.$ele = $($el);

        this.$ele.on("submit", this.handleSubmit.bind(this));
    }

    handleSubmit(e) {

        this.$ele.children(':input').prop('disabled', true);
        let b = this.$ele.find(':submit');

        e.preventDefault();
        // this.submit();

        b.val("POsting");
    

    }

    submit() {
        util.createTweet(this.$ele.serializeJSON());
        
    }

    enable() {
        this.$ele.children(':input').prop('disabled', false);
        
    }

}

module.exports = TweetCompose;