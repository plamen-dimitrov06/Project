var mongoose = require("mongoose");
var Faculty = require('./faculty');

var CourseSchema = new mongoose.Schema({
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
  faculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty'
  },
  courseDegree: {
    type: String,
    enum: ['Бакалавър', 'Магистър']
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Course", CourseSchema);
