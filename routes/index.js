var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main');
});

router.get('/main', function(req, res, next) {
  res.render('main');
});

router.get('/main2', function(req, res, next) {
  res.render('main2');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/course', function(req, res, next) {
  res.render('course');
});
module.exports = router;
