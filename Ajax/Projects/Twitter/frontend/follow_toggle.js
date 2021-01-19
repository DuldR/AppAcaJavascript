const util = require("./api_util.js");

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

        const followToggle = this;
    
        e.preventDefault();
        // $.ajax({
        //     method: (this.followState) ? "DELETE" : "POST",
        //     url: "/users/" + this.userId + "/follow",
        //     dataType: "json",
        //     data: this.$ele.serialize(),
        //     success: function(ele){
        //         this.followState = (!this.followState);
        //         this.render();
        //     }.bind(this)
        // });

        // if (this.followState === true) {
        //     util.unfollowUser(this.userId).then(() => {
        //         console.log("Win");
        //     });
        // } else if (this.followState === false) {

        //     console.log(this.userId);
        //     util.followUser(this.userId).then(() => {
        //         console.log("Fail");
        //     })
        // }

        if (this.followState === true) {
            util.unfollowUser(this.userId).then(() => {
                followToggle.followState = (!followToggle.followState)
                followToggle.render();
                
            })
        } else if (this.followState === false) {
            util.followUser(this.userId).then(() => {
                followToggle.followState = (!followToggle.followState)
                followToggle.render();
                
            })
        }

        console.log(this.userId);

    }

}

module.exports = FollowToggle;