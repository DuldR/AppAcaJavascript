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
                this.enoughTweets();
            })
        } else {
            util.fetchTweet().then((data) => {
                this.insertTweets(data);
                this.maxCreatedAt = data[data.length - 1].created_at;
                this.enoughTweets();
            })
            
        }
    }

    insertTweets (tweet) {

        tweet.forEach((ele) => {
            this.$feed.append(`<li>${JSON.stringify(ele)}</li>`);
        })

    }

    enoughTweets () {
    
        let len = this.$feed.find('li').length;
        console.log(len);
        if (len > 3) {
            this.$ele.find('a.fetch-more').text("No More Tweets");
            this.$ele.find('a.fetch-more').off('click');
        }
        
    }

}

module.exports = InfiniteTweets;