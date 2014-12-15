var http = require("http")
var express = require("express")
var app = express()
var port = process.env.PORT || 5000


app.use(express.static(__dirname + "/"))

var server = require('http').createServer(app).listen(process.env.PORT || 8080);

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket){
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
});
