// Linking to Friends

var friendsData = require("../data/friends");

// Routing

module.exports = function(app) {
    app.get("/api/friends", function (req, res){
        res.json(friendsData);
    });

app.post("/api/friends", function(req, res) {
    
    var newFriend = req.body;
  
    console.log(newFriend);

    var bestMatch = [{
        name: "",
        photo: "",
        different: 0
    }];

    // For loop for friends Array

    for (var i = 0; i < friendsData.length ;i++) {
        var totalDif = 0;
        console.log(friendsData[i].scores);
        for (var j = 0; j < friendsData[i].scores.length; j++) {
            
           totalDif += Math.abs(parseInt(req.body.scores[j]) - friendsData[i].scores[j]);
            
        }
        // Chooses the best match.
        if (totalDif >= bestMatch[0].different) {   
            bestMatch[0].name = friendsData[i].name;
            bestMatch[0].photo = friendsData[i].photo;
            bestMatch[0].different = totalDif;
        }

    }

  
     res.json(bestMatch);
  });  
};