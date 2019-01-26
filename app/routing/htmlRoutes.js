// Path Package

var path = require("path");

// Routing

module.exports = function(app) {
    // Survey Route
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // Default to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};