const util = require("./api_util.js");

class FollowToggle {
    constructor($el, options) {

        console.log(options);
 


        this.$ele = $($el);
        this.userId = this.$ele.data("user-id") || options.userId;

        console.log(this.$ele.data("initial-follow-state"));
        // this.followState = this.$ele.data("initial-follow-state");

        this.followState = false || options.followState;
        


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

        this.$ele.prop('disabled', false);
    }


    handleClick(e) {

        // Got to have this otherwise util will use the globalthis
        const followToggle = this;

        this.$ele.prop('disabled', true);
    
        e.preventDefault();

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

        

    }

}

module.exports = FollowToggle;