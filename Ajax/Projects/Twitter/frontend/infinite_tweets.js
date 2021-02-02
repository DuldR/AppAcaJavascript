const util = require("./api_util.js");

class InfiniteTweets {

    constructor ($ele) {
        this.$ele = $($ele);
        this.$feed = $($ele).find("ul.feed");
        this.$ele.find('a.fetch-more').on('click', this.fetchTweets.bind(this));
    }


    fetchTweets () {
        util.fetchTweet().then((data) => {
            this.insertTweets(data);
        })
    }

    insertTweets (tweet) {

        tweet.forEach((ele) => {
            this.$feed.append(JSON.stringify(ele));
        })

        console.log(tweet);

    }

}

module.exports = InfiniteTweets;