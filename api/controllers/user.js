var mongoose = require('mongoose');
const Subject = require('../models/subject');
const User = require('../models/users');

module.exports = {
  getUsers: (req, res) => {
    User.find({}).
      populate('lecturesCreated').then(users =>{
      res.json(users);
    }).catch(err =>{
      console.log(err.message);
    });
  }
}
