var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
var passport = require('passport');
/*
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/unidb', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
var faculty = require('./api/routes/faculty');
var user = require('./api/routes/users');
*/
require('./api/models/db');

require('./api/config/passport');
var routesApi = require('./api/routes/index');


var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
// app.use('/structure', express.static(path.join(__dirname, 'dist')));
// use the API routes when path starts with /api
app.use(passport.initialize());

app.use('/api', routesApi);

// routes all pages using the Angular routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.redirect('/');
});

module.exports = app;

// Routing for all pages excluding 'structure' required (Express side or adapting to Angular routing) - somewhat fixed
// Models to be added
// Details components required (faculty-add;faculty-edit;faculty-delete)
// 404 pages required
// Currently 'structure' working as intended
