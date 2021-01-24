class TweetCompose {

    constructor($el) {
        this.$ele = $($el);

        this.$ele.on("submit", this.handleSubmit.bind(this));
    }

    handleSubmit(e) {

        e.preventDefault();
    }

}