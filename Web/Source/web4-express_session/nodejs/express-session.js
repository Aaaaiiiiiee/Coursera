var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')

var app = express()

app.use(session({
  secret: 'keyboard cat',   // github에 올리면 안됨.
  resave: false,
  saveUninitialized: true
}))



app.get('/', function (req, res, next) {
  res.send('Hello session');
})

app.listen(3000, function(){
    console.log('3000!');
});