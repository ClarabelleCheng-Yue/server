var db = require('../models/Database.js');

module.exports = {

  createEntry: function(req, res, next){
    console.log("POST QUERY RECEIVED");
    var query = req.body;
    query['userId'] = req.user.id;
    
    db.Entry.create(query)
      .then(function(newEntry) {
        console.log("Creating new entry: ", newEntry);
        res.send('Success');
      })
      .catch(function(err){
        res.status(404).json(err)
      })
  },

  getEntries: function(req, res, next) {
    console.log("GET QUERY RECEIVED");
    db.Entry.findAll({ where: { userId: req.query.userId }})
      .then(function(entries){
        res.send(entries);
      })
      .catch(function(err){
        res.status(404).json(err)
      })
  }

};