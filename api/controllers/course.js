var mongoose = require('mongoose');
const Course = require('../models/course');

module.exports = {
  createCourse: (req,res) =>{
    let createArgs = req.body;

    if (createArgs.courseDegree === 'Бакалавър') {
      createArgs.courseDegree = 'Бакалавър';
    } else {
      createArgs.courseDegree = 'Магистър';
    }

    Course.create(createArgs).then(course => {
      res.redirect("/api/courses");
    }).catch(err =>{
      console.log(err.message);
    });
  },

  getCourses: (req,res) => {
    Course.find().then(faculties =>{
      res.json(faculties);
    }).catch(err =>{
      console.log(err.message);
    });
  },
}
