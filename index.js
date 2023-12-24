
// 'use strict';

// const express = require('express');
// const socketIO = require('socket.io');

// const PORT = process.env.PORT || 8080;
// const INDEX = '/index.html';

// const server = express()
//   .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
//   .listen(PORT, () => console.log(`Listening on ${PORT}`));

// const io = socketIO(server);

// io.on('connection', (socket) => {
//   console.log('Client connected');
//   socket.on('disconnect', () => console.log('Client disconnected'));
// });

// setInterval(() => io.emit('time', new Date().toTimeString()), 1000);



////////////////////////////////////////////////////////////////////////////////////////////
// socket.IO
const express = require('express');
var app = express();
//var server = require('http').createServer();
var server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	//res.write('<h1>Socket IO Start on port: ${PORT}</h1>');
	//res.end();
	res.send("Socket IO Start on port: " + PORT);
});

server.listen(PORT, function(){
	console.log("Server is now running...");
});

//io.on('connection', function(socket){
io.on("connection", (socket) => {
	console.log("client connected...");

	socket.on("connect_error", (err) => {
		console.log(`connect_error due to ${err.message}`);
	  });

	socket.on('message', function(data) {
		io.emit('message', "Server say hi");
		console.log('received: %s', data);
	});

	socket.on('disconnect', function(){
		
		console.log("Player Disconnected: " + socket.id);
		/*
		for(var i = 0; i < players.length; i++){
			if(players[i].id == socket.id){
				players.splice(i, 1);
			}
		}
		*/
	});
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////
// WS

// const PORT = process.env.PORT || 3000;
// const INDEX = '/index.html';
// const express = require("express");
// const server = express()
//   .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
//   .listen(PORT, () => console.log(`Listening on ${PORT}`));
// const { Server } = require('ws');
// const wss = new Server({ server });
// var parm1;
// var parm2;

// wss.on('connection', (ws) => {
// 	console.log('Client connected');
// 	ws.on('close', () => console.log('Client disconnected'));

// 	ws.on('message', function(data) {
// 		parm1 = data['p1'];
// 		parm2 = data['p2'];

// 		console.log('received: %s', data);
// 		console.log('p1: %s', parm1);
// 		console.log('p2: %s', parm2);
// 		//ws.send('message', "Server say hi");
// 	});

// 	ws.on('message2', function message(data) {
// 		console.log('received2: %s', data);
// 		//ws.send('message', "Server say hi");
// 	});
//   });

////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////////////
// socket.IO

// var express = require('express');
// var app = express();
// app.set('port', (process.env.PORT || 3000));

// var server = app.listen(app.get('port'), function() {
//     console.log('Node app is running on port', app.get('port'));
// });

// var io = require('socket.io')(server);

// app.use(express.static("./views"));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

// app.get('/', function (req, res) {
//     var path = __dirname + '/views/index.html';
//     console.log(path);
//     res.sendFile(path);
// });

// io.on('connection', function(socket) {
// 	console.log('Client connected');
//     socket.on('beep', function(){
//         socket.emit("beep", {data: 5});
//         console.log('beep recieved');
//     });

//     socket.on('change-speed', function(data) {
//         console.log('change speed recieved: ' + data);
//         socket.emit("speed", {newSpeed: data});
//     });

//     socket.on('ios-connection', function(data) {
//         console.log('ios connection with message: ' + data);
//     });
// });