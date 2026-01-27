const http = require('http');
const url = require('url');

// const server = http.createServer((req, resp) =>{
// 	resp.writeHead(200, {'Content-Type': 'text/plain'})
// 	resp.end("hello Node Js");

// });

// server.listen(3000, () =>{
// 	console.log("Server running at http://localhost:3000");
// });

http.createServer((req, resp) =>{
	const myUrl = url.parse(req.url, true);
	switch(myUrl.path){
		case "/": resp.end("Homepage");
		break;
		case "/about": resp.end("about page");
		break;
		case "/contact": resp.end("contact page");
		break;
		default: resp.end("Something Went Wrong");
	};
	console.log(myUrl);
}).listen(3000, () =>{
	console.log("Server is Started at http://localhost:3000");
});