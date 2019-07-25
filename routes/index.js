var express = require('express');
var router = express.Router();
var moviesModel = require('../models/movies');
var userModel = require('../models/user');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});




/* GET home page. */
router.get('/listMovies', function (req, res, next) {

  moviesModel.find(
    function (err, movie) {
      res.json({ result: true, movie });
    });
});

router.post('/movies', function (req, res, next) {
  console.log("req.body", req.body)
  var jojo = new userModel({
    firstName: "Youssef",
    lastName: "Boulhilat",
    email: "yboulhilat@gmail.com",
    password: "leboss",
    avatar: "gitclope",
  });
  jojo.save(function (error, movie) {
    console.log(movie)
    res.json({ result: true, movie });
  });
}


)



module.exports = router;
