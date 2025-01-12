"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("node:http");
var port = 5000;
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World");
});
server.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
