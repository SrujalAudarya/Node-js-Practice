const http = require('http');
const express = require('express');

const app = express();

app.get("/", (req, res) => {
	res.send("Hello Good Night");
})

app.get("/about", (req, res) =>{
	res.send("About Page");
})

app.get("/contact", (req, res) =>{
	res.send("Contact Page");
})

app.get("/home", (req, res) =>{
	res.send("Home Page");
})


app.get("/about", (req, res) =>{
	res.send("About Page");
})

app.get("/about/:id", (req, res) =>{
	const id = Number(req.params.id);
	res.send(id);
})


app.listen(8000, () => {
	console.log("Server started http://localhost:8000");
})