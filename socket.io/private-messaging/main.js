const express       = require('express');
const app           = express();
const port          = 3000;
const main          = require('./lib/main');

/* Config */
app.use('/', express.static('public'));
app.use(main.logErrors);
app.use(main.clientErrorHandler);
app.use(main.errorHandler);

/* Route */
app.get('/', (req, res)=>{
    res.send('Hello World!');
});

const homeRouter = require('./router/home');
app.use('/home', homeRouter);

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

/* Run Server */
app.listen(port, ()=>{
    console.log(`private-messaging-web-application is now listening at port ${port}`);
});