const express = require('express');
const server = express();

const PORT = 8081;

server.get('/', (req, resp)=>{
    resp.send("<h1>Hello World!!!</h1>")
});

server.get('/firstView', (req, resp)=>{
    resp.send("<h1>Welcome to FirstView!</h1>" + "\n" + "<p style='color:red;'>Example of node app using webserver from first view page</p>");
});

server.get('/secondView', (req, resp)=>{
    resp.send("<h1>Welcome to secondView!</h1>" + "\n" + "<p style='color:red;'>Example of node app using webserver from second view page</p>");
});

server.listen((process.env.PORT || PORT), ()=>{
    console.log('Server started and running on ' + PORT);
});