var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test');
});

router.get('/index', function(req, res, next) {
  res.render('test');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/course', function(req, res, next) {
  res.render('course');
});
module.exports = router;
