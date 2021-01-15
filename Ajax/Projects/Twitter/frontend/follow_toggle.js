class FollowToggle {
    constructor($el) {
        this.$ele = $($el);
        this.userId = this.$ele.data("user-id");
        this.followState = this.$ele.data("initial-follow-state");
    }

    alert() {
        alert("OK");
    }
}

module.exports = FollowToggle;