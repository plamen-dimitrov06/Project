var mongoose = require("mongoose");
var Course = require('./course');

var FacultySchema = new mongoose.Schema({
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
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course'}],
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Faculty", FacultySchema);
