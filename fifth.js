const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const filename =  "." + parsedUrl.pathname;

    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            return res.end("<h1>404 Not Found</h1>");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080, () => {
    console.log('Server is running at http://localhost:8080/');
});
