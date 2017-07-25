var path = require("path");
var fs = require("fs");
var index = require("./routes/index");
var public = require("./routes/public");
var addComent = require("./routes/addcoment");
var uploadComents = require("./routes/uploadComents");

function route(req, res) {


    if (req.url == "/") {
        index(req, res);

    } else if (req.url.match(/\.(html|css|js|png|ico)$/)) {
        public(req, res);

    } else if (req.url == "/addcoment") {
        addComent(req, res);
    } else if (req.url == "/uploadcoments") {
        uploadComents(req, res);
    };
};

module.exports = route;