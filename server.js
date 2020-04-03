var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection',function(socket){
    // console.log('User is connected!');
    socket.on('disconnect',function(){ //removed unused socket parameter from function
        io.emit('disconnect user', 'User disconnected');
    });

    socket.on('chat message',function(msg){
        io.emit('chat message', msg);
    });
});


http.listen(3000,function(){
    console.log('Listening on *:3000');
});