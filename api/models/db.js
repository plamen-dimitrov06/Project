var mongoose = require('mongoose');
const Grid = require('gridfs-stream');
var gracefulShutdown;
mongoose.Promise = require('bluebird');
var dbURI = 'mongodb+srv://readOnly:CupCake123!@unidb-oqtm9.mongodb.net/unidb?authSource=unidb&w=1';
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGOLAB_URI;
}
// Mongo URI
const mongoURI = 'mongodb+srv://readOnly:CupCake123!@unidb-oqtm9.mongodb.net/unidb?authSource=unidb&w=1';


mongoose.connect(dbURI, {promiseLibrary: require('bluebird'), replicaSet: 'UniDB-shard-0', autoReconnect : true, poolSize: 5});

// Create mongo connection
const conn = mongoose.createConnection(mongoURI, {promiseLibrary: require('bluebird'), replicaSet: 'UniDB-shard-0',});

let gfs;
conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

gracefulShutdown = function(msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};


require('./users');
require('./faculty');
