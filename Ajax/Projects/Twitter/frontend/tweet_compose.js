const util = require("./api_util.js");

class TweetCompose {

    constructor($el) {

        // This is terrible.
        this.$ele = $($el);
        this.$ul = $('ul.feed');

        this.$textArea = this.$ele.find('textarea');
        this.$charLeft = this.$ele.find('.chars-left');

        

        this.$addMent = this.$ele.find('.add-mention');

        
        this.$textArea.on('input', this.handleInput.bind(this));
        this.$ele.on("submit", this.handleSubmit.bind(this));
        this.$addMent.on('click', this.handleClick.bind(this));


        // This works.
        this.$ele.on('click', '.remove-mentioned-user', event => {
            $(event.currentTarget).parent().remove();
        })

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
            // this.$ul.prepend(`<li>${JSON.stringify(data.content)}</li>`);

            // This shit is wild. It utilizes inifnite tweets event handler. DRY it uP!!!!!
            // this.$ul.trigger("insert-tweet", data);
            this.$ul.trigger("insert-tweet", [data]);
            
        });
        
    }

    enable() {
        this.$ele.find(':submit').val("Post Tweet");
        this.$ele.children(':input').prop('disabled', false);
    }

    clearInput() {
        this.$ele.find('textarea').val("");
        this.$ele.find('select').val("");
        this.$ele.find('.mentioned-users').empty();
    }


    // Mentions

    newUserSelect() {
        let users = window.users;

        // Pointer for finding created element. I dont know how to append to just created element :)
        // Easier way to do this. Just map the user options and plug that in to a new html block

        let num = this.$ele.find('label').length;
        
        // Better to set a constant to html and feed it in as a string.
        this.$ele.find('.mentioned-users').append(`<label class='mention-${num} added-mention'>Mention <div><a href='javascript:;' class='remove-mentioned-user'>Remove?</a>  <select name='tweet[mentioned_user_ids][]'><option> </option></select></div></label>`);

        let mentionOption = this.$ele.find(`.mention-${num}`).find('select');

        $.each(users, function(idx, ele) {
            mentionOption.append(`<option value='${ele.userId}'>${ele.name}</option>`)
        })
    }

}

module.exports = TweetCompose;