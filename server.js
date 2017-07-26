var http = require("http");
var route = require("./route");

var server = http.createServer((req, res) => {
   route(req, res);
}).listen(5000, () => console.log("Serverrino has started!"));