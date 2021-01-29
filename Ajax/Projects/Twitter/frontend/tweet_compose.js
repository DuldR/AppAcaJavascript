const util = require("./api_util.js");

class TweetCompose {

    constructor($el) {
        this.$ele = $($el);
        this.ulId = this.$ele.data("tweets-ul");
        this.$ul = $(this.ulId);

        this.$textArea = this.$ele.find('textarea');
        this.$charLeft = this.$ele.find('.chars-left');

        this.$addMent = this.$ele.find('.add-mention');
        this.$initMent = this.$ele.find('.initial-mention');

        
        this.$textArea.on('input', this.handleInput.bind(this));
        this.$ele.on("submit", this.handleSubmit.bind(this));
        this.$addMent.on('click', this.handleClick.bind(this));

    }

    // Update feed with new tweet
    handleSubmit(e) {

        e.preventDefault();
        this.submit();
    }

    // Tweet character length
    handleInput(e) {
        e.preventDefault();
        this.renderChar();
    }

    handleClick(e) {
        e.preventDefault();
        this.newUserSelect();

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

        // Pointer for finding created element. I dont know how to append to just created element :)
        let num = this.$ele.find('label').length;
        console.log(num);
        
        // Need to figure out to iterature over user and add them as options.
        // this.$addMent.after("<select class="mention">"
        //     $.each(users, function(idx, ele) {

        //     })

        // $.each(users, function(idx, ele) {
        //     console.log(ele);
        // })

        this.$addMent.after(`<br><label class='mention-${num}'> Mention <select><option> </option></select></label>`)

        this.$ele.find(`.mention-${num}`).find('select').append("<option>test</option>");
        
    }

}

module.exports = TweetCompose;