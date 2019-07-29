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


router.get('/auth/facebook', function (req, res, next) {
  passport.authenticate(
    'facebook', { scope: 'email', state: JSON.stringify(req.query) }
  )(req, res, next);
});

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { session: false }),

  function (req, res) {
    res.redirect(req.user.redirectUrl
      + "?userId=" + req.user.id
      + "&firstName=" + req.user.first_name
      + "&lastName=" + req.user.last_name
      + "&email=" + req.user.email);
      +"&picture=" + encodeURIComponent(req.user.picture.data.url);
  }
);

module.exports = router;
