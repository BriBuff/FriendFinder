// Path Package

var path = require("path");

// Routing

module.exports = function(app) {
    // Survey Route
    app.get("/survey", function(res, req){
        res.sendFile(path.join(_dirname, "../public/survey.html"));
    });

    // Default to home
    app.get("*", function(res, req) {
        res.sendFile(path.join(_dirname, "../public/home.html"));
    });
};