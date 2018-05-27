var express = require('express');
var router = express.Router();

router.get('/*', function(req, res, next) {
    res.render('maps', 
    { locations: [
        {
          x: 16.049743103281894,
          y: 108.2230364322662
        }
      ]
    });
  });

module.exports = router;