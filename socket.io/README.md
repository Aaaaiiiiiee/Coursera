# [socket.io](https://socket.ioe/get-started/)

## Reference
* [socket.io/examples](https://github.com/socketio/socket.io/tree/master/examples)

## 2021-02-21
### Get started
done

## 2021-03-01
### socket.io.example
#### private-messaging : (1)
* 어찌어찌 client 접속은 했으나, server가 안됨
* vue.js와 redis에 대한 이해가 부족이 원인으로 판단
* 굳이 이 예제로 진행해야 하는지 고민
* [About Install Redis](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-18-04)

### FreeCodeCamp
#### How to build your own real-time chat app
* Server-Side
``` javascript
socket.on('event', function(msg){});    // wait for 'event'
io.emit('event', 'message');            // when occurs 'event', emit 'message' to all sockets connected
```
* Client-Side
``` javascript
socket.on('event name', function(msg){});   // wait for 'event name'. It calls a callback function whenever that event is called.
socket.emit('event name', message);         // emit `message` to the 'event name'
```
<br>

* [NGINX opentutorial](https://opentutorials.org/module/384/3462)