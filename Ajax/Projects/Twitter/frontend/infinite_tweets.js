const util = require("./api_util.js");

class InfiniteTweets {

    constructor ($ele) {
        this.$ele = $($ele);
        this.$ele.find('a.fetch-more').on('click', this.fetchTweets.bind(this));
    }


    fetchTweets () {
        util.fetchTweet().then((data) => {
            this.printTweets(data);
        })
    }

    printTweets (tweet) {
        tweet.forEach((idx,ele) => {
            console.log(idx);
        })
    }

}

module.exports = InfiniteTweets;