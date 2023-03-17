var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('notes', { title: 'Software Architecture'});
});

module.exports = router;
