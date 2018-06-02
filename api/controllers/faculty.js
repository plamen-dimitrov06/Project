var mongoose = require('mongoose');
const Faculty = require('../models/faculty');

module.exports = {
  createFaculty: (req,res) =>{

    let createArgs = req.body;

    Faculty.create(createArgs).then(faculty => {
      res.redirect("/structure");
    }).catch(err =>{
      console.log(err.message);
    });
  },

  getFaculties: (req,res) => {
    Faculty.find().then(faculties =>{
      res.json(faculties);
    }).catch(err =>{
      console.log(err.message);
    });
  }
}
