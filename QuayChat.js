var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var https = require('https');
var fs = require('fs');
var options = {
  key: fs.readFileSync('/var/www/quay/ssl/private.key'),
  cert: fs.readFileSync('/var/www/quay/ssl/certificate.pem')
};

var httpsServer = https.createServer(options, app);
httpsServer.listen(2210);
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  res.setHeader("Content-Type", "text/json");
    next();
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

function generarid() {
    return ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4)
}

	var socketio = require("socket.io");
var redis = require("redis"),
    client = redis.createClient();
var rooms = [];

client.on("error", function (err) {console.log("Error " + err);});


var storeMessage = function(room, user, message) {
	client.lpush(room, [user, message], function (err, res) {
		client.ltrim(room, 0, 9);
	});
	io.sockets.in(room).emit("displayMessage", [user, message]);
}

var emitMessages = function(room, socket){
	client.lrange(room, 0, -1, function(err, messages){
		console.log("EMIT MESSAGES");
		console.log(messages);
		messages = messages.reverse();
		console.log("EMIT MESSAGES REVERSE");
		console.log(messages);
		messages.forEach(function(message) {
			socket.emit("displayMessage", message);
		});
	});
}

var io = socketio.listen(httpsServer);

io.sockets.on("connection", function (socket) {
	var self = this;
	
	socket.join("room_one");
	
	emitMessages("room_one", socket);
	
	socket.on("chatMessage", function(data){
	  storeMessage(data[0], data[1], data[2]);
	});
	
	for (var i = 0; i < rooms.length; i++) {
		var room = rooms[i];
		var join_event = "join_"+room;
		socket.on(join_event, function(rooms){
			socket.leave(rooms[0]);
			socket.join(rooms[1]);
			socket.emit("clear_room");
			emitMessages(rooms[1], socket);
		});	
	}
	
});
 // JavaScript Document
