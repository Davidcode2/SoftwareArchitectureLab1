var express = require('express');
var router = express.Router();
const fs = require('fs');
const config = require('../config.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(config.labNotes);
  fs.readFile('/home/jakob/OneDrive/HochschuleAA/bachelor-3/Software_Architecture/lab1/frontend_notes.md', 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('Not Found');
    }
    res.send({ data });
  },);
});

module.exports = router;
