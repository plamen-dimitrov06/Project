var mongoose = require("mongoose");

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
