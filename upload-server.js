const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method.toLowerCase() === 'get') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <head>
          <title>File Upload</title>
        </head>
        <body>
          <h1>Upload a File</h1>
          <form action="/upload" method="post" enctype="multipart/form-data">
            <input type="file" name="file" required>
            <input type="submit" value="Upload">
          </form>
        </body>
      </html>
    `);
  } else if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, 'uploads');
    form.keepExtensions = true;

    // Ensure uploads directory exists
    if (!fs.existsSync(form.uploadDir)) {
      fs.mkdirSync(form.uploadDir);
    }

    form.parse(req, (err, fields, files) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>Error uploading file</h1><a href="/">Back</a>');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h1>File uploaded successfully</h1><a href="/">Back</a>');
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Not found</h1><a href="/">Home</a>');
  }
});

server.listen(8080, () => {
  console.log('Server listening on http://localhost:8080/');
});
