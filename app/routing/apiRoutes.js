// Linking to Friends

var friendsData = require("../data/friends");

// Routing

module.exports = function(app) {
    app.get("/api/friends", function (res, req){
        res.json(friendsData);
    });

app.post("/api/friends", function(req, res) {
    
    var newFriend = req.body;
  
    console.log(newFriend);
  
    friendsArray.push(newFriend);
  
    res.json(newFriend);
  });  
};