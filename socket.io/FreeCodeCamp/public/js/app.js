var socket = io();

function send(){
    var message = document.querySelector('#m');

    if(message.value){
        socket.emit('chat message', message.value);
        message.value = '';
    }
}

socket.on('chat message', (msg)=>{
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(msg));
    document.getElementById('messages').appendChild(li);
});