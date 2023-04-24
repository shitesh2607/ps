const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('src/index.html')
const PORT = 8080;

const server = http.createServer(function(req, res){
    if(req.url == '/'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write(fileContent);
        res.end();

    }else{
        res.end('404 Not Found req, res')
    }
});


server.listen(PORT);