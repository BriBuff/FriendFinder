// Package

var express = require("express");
var app = express();



// Port

var PORT = process.env.PORT || 8080;

// Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Listen

app.listen(PORT, function () {
    console.log("App listening on PORT: http://localhost:" + PORT + "/");
});