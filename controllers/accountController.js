var db = require('../models/Database.js');
//use jwt to blacklist token.. somehow
var jwt = require('jwt-simple');

module.exports = {
  deleteAcct: function(req, res, next) {
    var username = req.body.username;
    //var token = req.headers['x-access-token'];
    //delete all entries of user
    db.Entries.destroy({ where: {username: username}}).then(function(result) {
      res.status(200).send('Successfully deleted entries of ' + username);
    }).catch(function(err) {
      console.log(err, 'error');
      res.status(500).send('Error in deleting entries');
    });

    db.User.destroy({ where: {username: username} }).then(function(result) {
      res.status(200).send('Successfully deleted');
    }).catch(function(err) {
      console.log(err, 'error');
      res.status(500).send('Error in deletion');
    });
  } 
};