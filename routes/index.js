var express = require('express');
var router = express.Router();
var movieModel= require('../models/movies');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET Movies page. */
router.get('/listMovies', function (req, res, next) {

  movieModel.find(
    function (err, movie) {
      res.json({ result: true, movie });
    });
});

module.exports = router;
