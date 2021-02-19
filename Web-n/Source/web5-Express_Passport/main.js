/* default module */
var fs = require('fs');

/* npm install module*/
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const helmet = require('helmet');
var session = require('express-session');
var FileStore = require('session-file-store')(session)

// How to Use MiddleWare.
// * Create `.body` in `request` parameter. Run both POST and GET.
app.use(bodyParser.urlencoded({ extended: false }));
// * Create `.list` in `request` parameter. Only request in GET.
app.get('*', function (request, response, next) {
    fs.readdir('./data', function (error, filelist) {
        request.list = filelist;
        next();
    });
});
// 'public'이란 Directory 안에 있는 파일들을 웹상에서 접근할 수 있도록 하는 것.
app.use(express.static('public'));
// 보안 관련 Middleware
app.use(helmet());
// Session Middleware
app.use(session({
    HttpOnly: true,
    secure: true,
    secret: 'bawrfwfr3qed',   // github에 올리면 안됨.
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
}))

/* passport 관련 코드 */
var authData = {
    email: 'egoing777@gmail.com',
    password: '111111',
    nickname: 'egoing'
};
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
app.post('/auth/login_process',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/auth/login'
    }));

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'pwd'
    },
  function(username, password, done) {
      console.log('LocalStrategy', username, password);
      if(username === authData.email){
          console.log(1);
        if(password === authData.password){
            console.log(2);
            return done(null, authData);
        } else{
            console.log(3);
            return done(null, false, {message: 'Incorrect password.'});
        }
      } else{
          console.log(4);
        return done(null, false, {message: 'Incorrect username.'});
      }
   }
));

/* personal module*/
var topicRouter = require('./routes/topic');
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');

/* Add Router */
app.use('/', indexRouter);
app.use('/topic', topicRouter);
app.use('/auth', authRouter);

/* Page not Found (404) */
app.use((req, res, next) => {
    res.status(404).send('Sorry cant find that!');
});

/* 
*** Error Middleware ***
*   Error가 발생했을 때, handling이 가능하다.*/
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something broke!');
});

/* Open ports 3000 */
app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000!`)
})