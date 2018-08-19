var mongoose = require('mongoose');
const Course = require('../models/course');
const Faculty = require('../models/faculty');


module.exports = {
  createCourse: (req,res) =>{
    let createArgs = req.body;

    if (createArgs.courseDegree === 'Бакалавър') {
      createArgs.courseDegree = 'Бакалавър';
    } else {
      createArgs.courseDegree = 'Магистър';
    }

    Course.create(createArgs).then(course => {
      Faculty.findById(course.faculty).then(faculty => {
        faculty.courses.push(course._id);
        faculty.save();
      });
      res.redirect("/api/courses");
    }).catch(err =>{
      console.log(err.message);
    });
  },

  getCourses: (req,res) => {
    Course.find({})
    .populate('faculty').then(courses =>{
      res.json(courses);
    }).catch(err =>{
      console.log(err.message);
    });
  },

  getCourseById: (req,res) => {
    Course.findById(req.params.id).then(course =>{
      res.json(course);
    }).catch(err =>{
      console.log(err.message);
    });
  },

  updateCourse: (req,res) => {
    Course.findByIdAndUpdate(req.params.id, req.body).then(course => {
      res.json();
    }).catch(err => {
      console.log(err.message);
    });
  },

  deleteCourse: (req,res) => {
    Course.findByIdAndRemove(req.params.id, req.body).then(course => {
      res.json();
    }).catch(err => {
    console.log(err.message);
  });
  },

  findCourse: (req,res,next) =>{
    let searchValue = req.search;
    console.log(req);
    next();
  }
};
