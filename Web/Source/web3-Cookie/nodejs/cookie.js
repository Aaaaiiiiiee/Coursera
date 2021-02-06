var http = require('http');
var cookie = require('cookie');

http.createServer((req, res)=>{
    var cookies = {};
    if(requestAnimationFrame.headers.cookie !== undefined){
        cookies = cookie.parse(req.headers.cookie);
    }

    res.writeHead(200, {
        'Set-Cookie': [
            'yummy_cookie=choco',
            'tasty_cookie=strawberry',

            `Permanent=cookies; Max-Age=${60*60*24*30}`, // 60초(1분) * 60분(1시간) * 24시간(1일) * 30 일

            `Secure=Secure; Secure`,
            `HttpOnly=HttpOnly; HttpOnly`,

            'Path=Path; Path=/cookie',
            'Domain=Domain; Domain=o2.org'
        ]
    });

    res.end('Cookie!!');
}).listen(3000);