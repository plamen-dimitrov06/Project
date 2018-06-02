var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'CAT',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlFaculty = require("../controllers/faculty");

router.get('/structure', ctrlFaculty.getFaculties);
router.post('/structure/faculty-add', ctrlFaculty.createFaculty);

router.get('/profile', auth, ctrlProfile.profileRead);


module.exports = router;
