var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('home', 
        {
          posts: [
            {
              image: "images/a.jpg",
              title: "post1",
              href: "#"
            },{
              image: "images/a.jpg",
              title: "post2asdsdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdada",
              href: "#"
            },{
              image: "images/a.jpg",
              title: "post2asdsdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdada",
              href: "#"
            },{
              image: "images/a.jpg",
              title: "post2asdsdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdada",
              href: "#"
            },{
              image: "images/a.jpg",
              title: "post2asdsdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdada",
              href: "#"
            },{
              image: "images/a.jpg",
              title: "post2asdsdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdada",
              href: "#"
            },{
              image: "images/a.jpg",
              title: "post2asdsdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdada",
              href: "#"
            },{
              image: "images/a.jpg",
              title: "post2asdsdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdada",
              href: "#"
            },{
              image: "images/a.jpg",
              title: "post2asdsdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdada",
              href: "#"
            }]
        });
  });

module.exports = router;