const express = require('express');
const cors = require('cors');

const app = express();
const port = "3000";
const loginRoute = require('./src/routes/login.route');
const authRoute= require('./src/routes/auth.route');
const registerRoute= require('./src/routes/register.route');
const bodyParser = require('body-parser');
const {errorRes} = require('./src/utils/util.statusCode');

// support parsing of application/json type post data
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());

// app.use('/', (req, res, next) => {
//   next()
// })


app.use('/api/login', authRoute);
app.use('/api/register', registerRoute);
app.use('/api/', loginRoute);



app.get('*', function(req, res){
  res.status(404).send({
    'code': 404,
    'message': 'Not Found',
    'timeResponse': "2021-09-14T17:44:08.195+0700",
    'errors' : ''
  });
});

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.log('handling error')
  console.error(err.message, err.stack);
  res.status(statusCode).json({
    'code' : statusCode,
    'message': err.message,
    'timeResponse': "2021-09-14T17:44:08.195+0700",
    'errors': ''
  });
  return;
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
