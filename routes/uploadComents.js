var fs = require("fs");

function uploadComments(req, res){

    var coments = fs.readFileSync("coments.json");
    
    res.writeHead(200, {"Content-type": "text/plain"});
    res.write(coments);
    res.end();
};

module.exports = uploadComments;