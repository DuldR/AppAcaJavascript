class FollowToggle {
    constructor($el) {
        this.$ele = $($el);
        this.userId = this.$ele.data("user-id");
        this.followState = this.$ele.data("initial-follow-state");


        this.render();
    
    }

    // bindEvents() {
    //     this.$ele.click((ele) => {
    //         alert("I'm clicked");
    //     })
    // }

    render() {
        if (this.followState === true) {
            this.$ele.text("Unfollow!");
        } else {
            this.$ele.text("Follow!")
        }
    }

    method() {
        if (this.followState === true) {
            return "DELETE";
        } else {
            return "POST";
        }
    }

    handleClick(e) {
        e.preventDefault();
        $.ajax({
            method: (this.followState) ? "DELETE" : "POST",
            url: "/users/:id/follow",
            dataType: "json",
            
        })
    }

}

module.exports = FollowToggle;