var mongoose = require("mongoose");

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
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Faculty", FacultySchema);
