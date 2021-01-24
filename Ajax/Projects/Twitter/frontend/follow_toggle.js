const util = require("./api_util.js");

class FollowToggle {
    constructor($el, options) {


 


        this.$ele = $($el);
        this.userId = this.$ele.data("user-id") || options.userId;

        // this.followState = if (this.$ele.data("initial-follow-state") === undefined) {
        //     options.followState;
        // } else {
        //     this.$ele.data('initial-follow-state');
        // }

        if (this.$ele.data("initial-follow-state") === undefined) {
            this.followState = options.followState;
        } else {
            this.followState = this.$ele.data('initial-follow-state');
        }

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