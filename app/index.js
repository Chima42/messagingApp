"use strict";
exports.__esModule = true;
var express = require("express");
var port = 3000;
var app = express();
app.get('/', function (req, res) {
    res.send('Listening on port 3000');
});
app.listen(port, function (req, res) {
    console.log("listening on " + port);
});
