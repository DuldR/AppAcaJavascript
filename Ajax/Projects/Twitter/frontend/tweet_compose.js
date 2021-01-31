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


        this.$userButton = this.$ele.find('.test-user-id');
        this.$valsButton = this.$ele.find('.get-vals');

        
        this.$textArea.on('input', this.handleInput.bind(this));
        this.$ele.on("submit", this.handleSubmit.bind(this));
        this.$addMent.on('click', this.handleClick.bind(this));

        this.$userButton.on('click', this.testUser.bind(this));
        this.$valsButton.on('click', this.getMenVals.bind(this));

    }

    testUser(e) {
        this.test();
    }

    test() {
        this.$addedMention = this.$ele.find('.added-mention');
        // $.each(this.$addedMention, function(idx,ele) {
        //     console.log(ele);
        // })
        this.$addedMention.each(function(idx, ele) {

            // IT WORKS BITCH.
            let val = $(ele).find('select').val();
            console.log(val);
            }
        )
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
    // This was my hacky way of doing. It works. But cant handle the form submittion. 
    // newUserSelect() {
    //     let users = window.users;

    //     // Pointer for finding created element. I dont know how to append to just created element :)
    //     let num = this.$ele.find('label').length;
        
    //     this.$addMent.after(`<br><label class='mention-${num} added-mention mention'> Mention <select><option> </option></select></label>`)

    //     let mentionOption = this.$ele.find(`.mention-${num}`).find('select');

    //     $.each(users, function(idx, ele) {
    //         mentionOption.append(`<option value='${ele.userId}'>${ele.name}</option>`)
    //     })
    // }

    newUserSelect() {
        let user = window.users;
        this.$ele.find('mention-select').append('<option>Test</option>')

    }

}

module.exports = TweetCompose;