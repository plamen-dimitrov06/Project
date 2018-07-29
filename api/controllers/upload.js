var mongoose = require('mongoose');

module.exports = {
  uploadFile: (req,res) => {
    console.log(req.file + "File value is");
    res.redirect('/courses');
  }

};
