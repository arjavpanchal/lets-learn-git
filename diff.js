
const http = require('http');



http.createServer(function (req,res)  {
    res.writeHead(200, {'Content Type' : 'text/plain'});
    res.end("hello world!, welcome to my page");

}).listen(8080);