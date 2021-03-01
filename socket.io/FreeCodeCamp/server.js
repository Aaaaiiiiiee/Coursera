const express   = require('express');
const app       = express();
const http      = require('http').Server(app);
const io        = require('socket.io')(http);
const fs        = require('fs');

app.use('/', express.static('/public'));

app.get('/', (req, res)=>{
    fs.readFile('./public/index.html', 'utf8', (err, data)=>{
        if(err) throw err;
        res.send(data);
    });
});

io.on('connection', (socket)=>{
    console.log('user connected');

    // 어떤 `socket`(props)에서 'chat message'를 받으면, server의 `io`(모든 socket들)에게 emit한다.
    socket.on('chat message', (msg)=>{
        io.emit('chat message', msg);
    });
    socket.on('disconnect', ()=>{
        console.log('user disconnected');
    });
});

http.listen(3000, ()=>{
    console.log('listening on *:3000');
});