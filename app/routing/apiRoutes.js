// Linking to Friends

var friendsData = require("../data/friends");

// Routing

module.exports = function(app) {
    app.get("/api/friends", function (req, res){
        res.json(friendsData);
    });

app.post("/api/friends", function(req, res) {
    
    var newFriend = req.body;

     var score = parseFloat(req.body.scores);

    //  console.log(score);
  
    console.log(newFriend);

    var bestMatch = [{
        name: "",
        photo: "",
        different: 0
    }];

    // For loop for friends Array

    for (var i = 0; i < friendsData.length ;i++) {
        // Convert New Friends to #s
        // friendsData.friendsArray.scores
        var totalDif = 0;
        console.log(friendsData[i].scores);
        for (var j = 0; j < friendsData[i].scores.length; j++) {
            
           totalDif += Math.abs(parseInt(req.body.scores[j]) - friendsData[i].scores[j]);
            
        }

        console.log("yes", totalDif);
        totalDif = 0;
        // Chooses the best match.
        // if (totalDif >= bestMatch.different) {

        // }

    }


//   Pushes newFriend to the FriendsArray

     friendsArray.push(newFriend);
  
     res.json(newFriend);
  });  
};