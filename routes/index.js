var fs = require("fs");
var path = require("path");

function index(req, res) {

    var main = fs.readFileSync("./public/main_page.html");

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(main);
    res.end();
};

module.exports = index;