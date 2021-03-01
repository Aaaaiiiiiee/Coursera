const express       = require('express');
const app           = express();

const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
    cors: {
        origin: 'http://0.0.0.0:8080',
    },
});

httpServer.listen(port);