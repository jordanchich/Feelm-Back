var express = require('express');
var router = express.Router();
var moviesModel = require('../models/movies');
var userModel = require('../models/user');
var apiKey = '15322da9c8b22e5a5253028075983b8f';
var passport = require('passport');
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


/* GET facebook auth. */
router.get('/auth/facebook',
  function (req, res, next) {
    passport.authenticate(
      'facebook', { scope: 'email', state: JSON.stringify(req.query) }
    )(req, res, next);
  }
);
/* GET facebook callback. */
router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { session: false }),

  function (req, res) {

    res.redirect(req.user.redirectUrl
      + "?userId=" + req.user.id
      + "&firstName=" + req.user.first_name
      + "&lastName=" + req.user.last_name
      + "&email=" + req.user.email
      + "&picture=" + encodeURIComponent(req.user.picture.data.url));
    UserModel.findOne({
      facebookid: req.user.id,
    }, function (err, user) {
      if (!user) {
        var newUser = new userModel({
          firstname: req.user.first_name,
          lastname: req.user.last_name,
          email: req.user.email,
          picture: req.user.picture.data.url,
          facebookid: req.user.id
        });
        newUser.save(
          function (err, user) {
            res.json({ result: true, user });
          });
      }
    });
  });

module.exports = router;
