// Linking to Friends

var friendsData = require("../data/friends");

// Routing

module.exports = function(app) {
    app.get("/api/friends", function (res, req){
        res.json(friendsData);
    });

    app.post("/api/friends", function (res, req) {
        friendsData.push(req.body);
    });
};