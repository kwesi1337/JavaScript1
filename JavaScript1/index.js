let http = require("http");

let server = http.createServer(function(req,res){

    res.setHeader("Content-type", "text/html");
    res.end("<h1>JavaScript Hand-in 1");
});

server.listen(1234, "localhost",()=> console.log("Server started..."));

