var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('India', { title: 'Search Results India' });
});

module.exports = router;