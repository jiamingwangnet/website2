const http = require("http");
const fs = require("fs");
const path = require('path')

const network = "192.168.1.9";
const local = "127.0.0.1";

const connectionSettings = {
    port: 8080,
    address: network
}

const buildLoc = "../build";
const index = buildLoc + "/index.html";

function getType(name) {
    switch (path.extname(name)) {
        case ".css":
            return "text/css";
        case ".js":
            return "application/javascript";
        case ".html":
            return "text/html";
        default:
            return "*/*";
    }
}

http.createServer(function (req, res) {
    const url = req.url == '/' ? "/index.html" : req.url;
    
    res.writeHead(200, { 'Content-Type': getType(url) });
    fs.readFile(buildLoc + url, function (err, data) {
        if(err) {
            fs.readFile(buildLoc + "/index.html", function (err, data) {
                res.write(data);
                return res.end();
            })
        }
        else
        {
            res.write(data);
            return res.end();
        }
    })
}).listen(connectionSettings.port, connectionSettings.address);
console.log("Server on " + connectionSettings.address + ":" +connectionSettings.port);