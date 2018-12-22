var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Travelie - Homepage'});
});

router.post('/search', function(req, res, next){
  try{
    res.render('search');
  } catch(error){

  }
});

module.exports = router;
