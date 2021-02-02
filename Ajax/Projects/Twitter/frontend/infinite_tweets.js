const util = require("./api_util.js");

class InfiniteTweets {

    constructor ($ele) {

        // DOM Selector
        this.$ele = $($ele);
        this.$feed = $($ele).find("ul.feed");

        // Event Handler
        this.$ele.find('a.fetch-more').on('click', this.fetchTweets.bind(this));
    

        // Limit Tweets
        this.maxCreatedAt = null;
    
    }


    fetchTweets () {

        if (this.maxCreatedAt !== null) {
            util.fetchTweet(this.maxCreatedAt).then((data) => {
                this.insertTweets(data);
                this.maxCreatedAt = data[data.length - 1].created_at;

                // This is how you get the last element Lol.
                // console.log(data[data.length - 1]);

                // Json object so using the getter methdo works
                // console.log(data[data.length - 1].created_at);
            })
        } else {

            util.fetchTweet().then((data) => {
                this.insertTweets(data);
                this.maxCreatedAt = data[data.length - 1].created_at;

                // This is how you get the last element Lol.
                // console.log(data[data.length - 1]);

                // Json object so using the getter methdo works
                // console.log(data[data.length - 1].created_at);
            })
            
        }
    }

    insertTweets (tweet) {

        tweet.forEach((ele) => {
            this.$feed.append(JSON.stringify(ele));
        })

    }

}

module.exports = InfiniteTweets;