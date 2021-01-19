const APIUtil = {


    followUser: id => APIUtil.changeStatus(id, "POST"),

    unfollowUser: id => APIUtil.changeStatus(id, "DELETE"),

    changeStatus: (id, method) => (
        $.ajax({
            url: "/users/" + id + "/follow",
            dataType: "json",
            method
        })
    )

    // followUser: id => APIUtil.changeFollowStatus(id, 'POST'),

    // unfollowUser: id => APIUtil.changeFollowStatus(id, 'DELETE'),

    // changeFollowStatus: (id, method) => (
    //     $.ajax({
    //     url: `/users/${id}/follow`,
    //     dataType: 'json',
    //     method
    //     })
    // )

};

module.exports = APIUtil;