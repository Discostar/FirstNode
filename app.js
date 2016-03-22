var express = require('express'); // require module and create variable to intansiate to express
var app = express();// express inttistiate app a function handler that will be suplyed to http server
var http = require('http').Server(app);// http server
var io = require('socket.io')(http);//new instance of socket.io by passing http server object to lissen to connection in line 9 
var port = process.env.PORT || 3000;// publish on port 3000 or use invironment port for hosting online Azure
app.get('/', function(req, res){
 res.sendFile(__dirname + '/index.html');// pass index.html that i am going to create
});
io.on('connection', function(socket){ //for incomming sockets and login to the concole for console debagin
 socket.on('chat message', function(msg){
 io.emit('chat message', msg);
 });
});
http.listen(port, function(){
 console.log('listening on ' + port);
});