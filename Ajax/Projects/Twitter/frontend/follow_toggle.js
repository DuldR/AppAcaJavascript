class FollowToggle {
    constructor($el) {
        this.$ele = $($el);
        this.userId = this.$ele.data("user-id");
        this.followState = this.$ele.data("initial-follow-state");
    }

    bindEvents() {
        this.$ele.click((ele) => {
            alert("I'm clicked");
        })
    }

}

module.exports = FollowToggle;