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

    searchUsers: (queryVal) => {
        
    }
};

module.exports = APIUtil;