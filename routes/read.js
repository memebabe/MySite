var express = require('express');
var router = express.Router();

router.get('/*', function(req, res, next) {
    res.render('read', 
        {
            texts: [
                "dsadsad",
                "dsadsd"
            ]
        });
  });

module.exports = router;