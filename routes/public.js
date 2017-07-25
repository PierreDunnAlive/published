var path = require("path");
var fs = require("fs");

function public(req, res) {

    var ext = path.extname(req.url);
    var contentType = "";

    switch (ext) {

            case "ico":
                contentType = "image/x-icon";
                break;
            case "html":
                contentType = "text/html";
                break;
            case "css":
                contentType = "text/css";
                break;
            case "js":
                contentType = "text/javascript";
                break;
            case "png":
                contentType = "image/png";
                break;
        };
    
    res.statusCode = 200;
    res.setHeader("Content-type", contentType);
    
    try {
        var staticFile = fs.readFileSync(`./public/${req.url}`);
    } catch(err) {
        if (err.code === "ENOENT") {
            res.writeHead(404, {"Content-Type" : "text/plain"});
            res.write("Not found");
            res.end();
            return;
        } else {
            res.writeHead(500, {"Content-Type" : "text/plain"});
            res.write(err.message);
            res.end();
            return;
        }
    }

    

    
    res.write(staticFile);
    res.end();
    
};

module.exports = public;