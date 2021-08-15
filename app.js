const { GridFsStorage } = require('multer-gridfs-storage');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const multer = require('multer');
const crypto = require('crypto');
const Grid = require('gridfs-stream');
const mongoose = require('mongoose');

require('./api/models/db');
require('./api/config/passport');

var routesApi = require('./api/routes/index');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(passport.initialize());
app.use(passport.session());

const storage = new GridFsStorage({
  url: 'mongodb+srv://readOnly:CupCake123!@unidb-oqtm9.mongodb.net/unidb?authSource=unidb&w=1',
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = file.originalname;
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });
app.post('/upload', upload.array('file'), (req, res) => {
  fileNames = [];
  req.files.forEach(element => {
    fileNames.push(element.originalname);
  });
  res.json(fileNames);
});
app.get('/download/:filename', (req, res) => {

  let gfs = Grid(mongoose.connection.db, mongoose.mongo);

  gfs.collection('uploads');

  gfs.files.find({filename: req.params.filename}).toArray(function(err, files){
    if(!files || files.length === 0){
        return res.status(404).json({
            responseCode: 1,
            responseMessage: "error"
        });
    }
    // create read stream
    var readstream = gfs.createReadStream({
        filename: files[0].filename,
        root: "uploads"
    });
    // set the proper content type
    res.set('Content-Type', files[0].contentType);
    // Return response
    return readstream.pipe(res);
  });
});
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

