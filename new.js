var express  = require('express'),
    app      = express(),
    server   = require('http').createServer(app),
    io       = require('socket.io').listen(server),
    port     = 8080,
    chatClients = new Object();

server.listen(port);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/sample.html', function(req, res){
	res.sendFile(__dirname + '/sample.html');
});


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
  	io.emit('chat message', msg);
  });
});