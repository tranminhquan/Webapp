var express = require('express');
var router = express.Router();
var Homestay = require('../models/homestay');

/* GET home page. */
router.get('/', function(req, res, next) {
    Homestay.find().exec((err2, data2) => {
        if (!err2 && data2 !== '') {
            res.render('index', {title: 'Travelie - Homepage', list_homestay: data2});
        }
        else {
            res.render('index', {title: 'Travelie - Homepage'});
            console.log("Can not get document!!!");
        }
    });

});

router.post('/search', function(req, res, next){
  try{
    res.render('search');
  } catch(error){

  }
});

module.exports = router;
