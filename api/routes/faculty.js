<<<<<<< HEAD
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Faculty = require('../models/faculty.js');

/* GET ALL FACULTIES
router.get('/', function(req, res, next) {
  Faculty.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});*/

/* GET SINGLE FACULTY BY ID */ /*
router.get('/:id', function(req, res, next) {
  Faculty.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}); */

/* SAVE/ADD FACULTY
router.post('/faculty-add', function(req, res, next) {
  Faculty.create(req.body, function (err, post) {
    if (err) return next(err);
    if (post.abbreviation === undefined){
      post.abbreviation = ' ';
    }
    if (post.description === undefined){
      post.description = ' ';
    }
    res.json(post);
  });
});
*/
/* UPDATE FACULTY */ /*
router.put('/:id', function(req, res, next) {
  Faculty.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
*/
/* DELETE FACULTY */
router.delete('/:id', function(req, res, next) {
  Faculty.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
// This is not being used
=======
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Faculty = require('../models/faculty.js');

/* GET ALL FACULTIES
router.get('/', function(req, res, next) {
  Faculty.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});*/

/* GET SINGLE FACULTY BY ID */ /*
router.get('/:id', function(req, res, next) {
  Faculty.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}); */

/* SAVE/ADD FACULTY
router.post('/faculty-add', function(req, res, next) {
  Faculty.create(req.body, function (err, post) {
    if (err) return next(err);
    if (post.abbreviation === undefined){
      post.abbreviation = ' ';
    }
    if (post.description === undefined){
      post.description = ' ';
    }
    res.json(post);
  });
});
*/
/* UPDATE FACULTY */ /*
router.put('/:id', function(req, res, next) {
  Faculty.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
*/
/* DELETE FACULTY */
router.delete('/:id', function(req, res, next) {
  Faculty.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
// This is not being used
>>>>>>> cb301ef32fa68589775835cefdd4c7e6f86489c8
