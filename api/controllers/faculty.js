var mongoose = require('mongoose');
const Faculty = require('../models/faculty');

module.exports = {
  createFaculty: (req,res) =>{

    let createArgs = req.body;

    Faculty.create(createArgs).then(faculty => {
      res.redirect("/api/faculties");
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
  },

  getFacultyById: (req,res) => {
    Faculty.findById(req.params.id).then(faculty =>{
      res.json(faculty);
    }).catch(err =>{
      console.log(err.message);
    });
  },

  updateFaculty: (req,res) => {
    Faculty.findByIdAndUpdate(req.params.id, req.body).then(faculty => {
      res.json();
    }).catch(err => {
      console.log(err.message);
    });
  },

  deleteFaculty: (req,res) => {
    Faculty.findByIdAndRemove(req.params.id, req.body).then(faculty => {
      console.log("Test");
      res.json();
    }).catch(err => {
    console.log(err.message);
  });
  }

}
