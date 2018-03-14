/*
var http = require('http');
//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(3011); //the server object listens on port 8080
*/

// with new ES6 syntax
const http = require('http');
const hostName = '127.0.0.1'
const port = 3011;

// with express module
const express = require('express')
const bodyparser = require ('body-parser')
//const path = require ('path')

const app = express();

app.get('/',(req,res)=>{
	res.send('Hello.. you are in GET Home')
})

app.get('/about',(req,res)=>{
	res.send('Hello.. you are in GET About')
})

app.listen(port,()=>{
	console.log('server started on port '+port +'....');
});

/*
const fs = require('fs');
fs.readFile('index.html',(err,html)=>{
	if(err){
		throw err
	}
	const server = http.createServer((req,res)=>{
		res.statusCode = 200;
		res.setHeader('content-type','text/html');
		res.write(html);
		res.end('hello user');
	});

	server.listen(port,hostName,()=>{
		console.log('server started on port '+port);
	})
})
*/





