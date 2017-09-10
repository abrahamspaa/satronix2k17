var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ALPHA COLLEGE OF ENGINEERING', eventname: 'SATRONIX2K17' });
});

module.exports = router;
