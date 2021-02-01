const util = require("./api_util.js");

class InfiniteTweets {

    constructor ($ele) {
        this.$ele = $($ele);
        this.$ele.find('a.fetch-more').on('click', this.fetchTweets.bind(this));
    }


    fetchTweets () {
        let fetched = util.fetchTweet();
        alert(fetched);
    }

}

module.exports = InfiniteTweets;