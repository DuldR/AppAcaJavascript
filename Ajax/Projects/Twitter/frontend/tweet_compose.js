const util = require("./api_util.js");

class TweetCompose {

    constructor($el) {
        this.$ele = $($el);
        this.ulId = this.$ele.data("tweets-ul");
        this.$ul = $(this.ulId);

        this.$textArea = this.$ele.find('textarea');
        this.$charLeft = this.$ele.find('.chars-left');

        
        this.$textArea.on('input', this.handleInput.bind(this));
        this.$ele.on("submit", this.handleSubmit.bind(this));

        this.newUserSelect();
    }

    // Update feed with new tweet
    handleSubmit(e) {

        e.preventDefault();
        this.submit();
    }

    // Tweet character length
    handleInput(e) {
        e.preventDefault();
        console.log(e);
        this.renderChar();
    }

    renderChar() {
        this.$charLeft.empty();
        let userEntry = this.$textArea.val().length
        this.$charLeft.append((140 - userEntry) + " characters left.");
    }

    submit() {
        let serialized = this.$ele.serializeJSON();
        this.$ele.children(':input').prop('disabled', true);
        this.$ele.find(':submit').val("Posting");

        util.createTweet(serialized).then((data) => {
            this.clearInput();
            this.enable();
            // Use this to append to the top of the ul feed.
            this.$ul.prepend(`<li>${JSON.stringify(data)}</li>`);
            
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


    // Mentions

    newUserSelect() {
        let users = window.users;
        console.log(users);
    }

}

module.exports = TweetCompose;