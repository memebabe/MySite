var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('home', { images: ['images/a.jpg', 'images/a.jpg'] });
  });

module.exports = router;