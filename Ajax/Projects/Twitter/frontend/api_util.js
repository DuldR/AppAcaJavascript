const APIUtil = {


    followUser: id => APIUtil.changeStatus(id, "POST"),

    unfollowUser: id => APIUtil.changeStatus(id, "DELETE"),

    changeStatus: (id, method) => (
        $.ajax({
            url: "/users/" + id + "/follow",
            dataType: "json",
            method
        })
    ),

    searchUsers: (queryVal) => (
        $.ajax({
            url: "/users/search",
            dataType: 'json',
            data: queryVal
        })
    ),

    createTweet: (form) => (
        $.ajax({
            url: "/tweets",
            dataType: "json",
            method: "POST",
            data: form
        })
    ),

    fetchTweet: (req) => (
        $.ajax({
            url: "/feed",
            dataType: "json",
            data: {
                max_created_at: req
            }
        })
    )
};

module.exports = APIUtil;