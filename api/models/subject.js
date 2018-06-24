var mongoose = require("mongoose");
var User = require('./users');

var SubjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  abbreviation: {
    type: String,
    uppercase: true,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  start_date: {
    type: Date,
    default: Date.now
  },
  lectures: {
    type: Number,
    min: 1,
    max: 60
  },
  exercises: {
    type: Number,
    min: 1,
    max: 60
  },
  courseWork: {
    type: Boolean,
    default: false
  },
  evaluation: {
    type: String,
    enum: ['Изпит','Текуща оценка']
  },
  files: {
    type: [String],
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

// SubjectSchema.methods.setAuthor() =

module.exports = mongoose.model("Subject", SubjectSchema);
