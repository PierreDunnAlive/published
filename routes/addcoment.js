var fs = require("fs");

function addComent (req, res) {
    var body = [];
    req.on('data', function(chunk) {
        body.push(chunk);
    }).on('end', function() {
        body = Buffer.concat(body).toString();
        
        console.log("Recieved a new blog request: " + body);

        var data = fs.readFileSync("coments.json");
        var coments = JSON.parse(data);
        coments.push(body);
        
        fs.writeFileSync("coments.json", JSON.stringify(coments, null, " "));
        res.writeHead(200, {"Content-type": "text/plain"});
        res.write(`${coments}`);
        res.end();
    });

    

    
};
module.exports = addComent;