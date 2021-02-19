/* default module */
var fs = require('fs');

/* npm install module*/
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const helmet = require('helmet');

/* personal module*/
var topicRouter = require('./routes/topic');
var indexRouter = require('./routes/index');

// How to Use MiddleWare.
// * Create `.body` in `request` parameter. Run both POST and GET.
app.use(bodyParser.urlencoded({ extended: false }));
// * Create `.list` in `request` parameter. Only request in GET.
app.get('*', function (request, response, next){
    fs.readdir('./data', function(error, filelist){
        request.list = filelist;
        next();
    });
});
// 'public'이란 Directory 안에 있는 파일들을 웹상에서 접근할 수 있도록 하는 것.
app.use(express.static('public'));
// 보안 관련 Middleware
app.use(helmet());

/* Add GET, POST link */
app.use('/', indexRouter);
app.use('/topic', topicRouter);

/* Page not Found (404) */
app.use((req, res, next)=>{
    res.status(404).send('Sorry cant find that!');
});

/* 
*** Error Middleware ***
*   Error가 발생했을 때, handling이 가능하다.*/
app.use((err, req, res, next)=>{
    console.log(err.stack);
    res.status(500).send('Something broke!');
});

/* Open ports 3000 */
app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000!`)
})