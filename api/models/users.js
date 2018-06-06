var mongoose = require("mongoose");
var crypto = require("crypto");
var jwt = require("jsonwebtoken");


var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    enum: ['teacher', 'admin'],
    default: 'teacher'
  },
  hash: String,
  salt: String,
  registration_date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "CAT"); // DO NOT KEEP YOUR SECRET IN THE CODE! REMOVE BEFORE RELEASE!
};

module.exports = mongoose.model('User', UserSchema);
