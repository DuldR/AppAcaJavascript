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
        // let t = this.$ele.find('textarea');
        // console.log(t);


        util.createTweet(this.$ele.serializeJSON()).then(() => {
            this.clearInput();
            this.enable();
            
        });
        
    }

    enable() {
        this.$ele.find(':submit').val("Post Tweet");
        this.$ele.children(':input').prop('disabled', false);
        
    }

    clearInput() {
        this.$ele.find('textarea').val("");
        this.$ele.find('select').val("");
    }

}

module.exports = TweetCompose;