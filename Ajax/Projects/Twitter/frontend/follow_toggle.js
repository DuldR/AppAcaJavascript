class FollowToggle {
    constructor($el) {
        this.$ele = $($el);
        this.userId = this.$ele.data("user-id");
        this.followState = this.$ele.data("initial-follow-state");


        this.render();

        // This works.
        this.$ele.on("click", this.handleClick.bind(this))
    
    }


    render() {
        if (this.followState === true) {
            this.$ele.text("Unfollow!");
        } else {
            this.$ele.text("Follow!")
        }
    }


    handleClick(e) {
        console.log(e);
        e.preventDefault();
        $.ajax({
            method: (this.followState) ? "DELETE" : "POST",
            url: "/users/" + this.userId + "/follow",
            dataType: "json",
            data: this.$ele.serialize(),
            success: function(ele){
                this.followState = (!this.followState);
                this.render();
            }.bind(this)
        });

    }

}

module.exports = FollowToggle;