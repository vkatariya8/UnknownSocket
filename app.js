var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

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

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});