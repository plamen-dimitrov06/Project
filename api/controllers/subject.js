var mongoose = require('mongoose');
const Subject = require('../models/subject');
const User = require('../models/users');

module.exports = {
  createSubject: (req,res) =>{

    let createArgs = req.body;
    if (createArgs.courseWork == '') {
      createArgs.courseWork = false;
    }

    Subject.create(createArgs).then(subject => {
      User.findById(subject.author).then(user =>{
        user.lecturesCreated.push(subject._id);
        user.save();
      })
      res.redirect("/api/subjects");
    }).catch(err =>{
      console.log(err.message);
    });
  },

  getSubjects: (req,res) => {
    Subject.find({}).
      populate('author').then(faculties =>{
      res.json(faculties);
    }).catch(err =>{
      console.log(err.message);
    });
  },

  getSubjectById: (req,res) => {
    Subject.findById(req.params.id).then(faculty =>{
      res.json(faculty);
    }).catch(err =>{
      console.log(err.message);
    });
  },

  updateSubject: (req,res) => {
    Subject.findByIdAndUpdate(req.params.id, req.body).then(faculty => {
      res.json();
    }).catch(err => {
      console.log(err.message);
    });
  },

  deleteSubject: (req,res) => {
    Subject.findByIdAndRemove(req.params.id, req.body).then(faculty => {
      res.json();
    }).catch(err => {
    console.log(err.message);
  });
  }

}
