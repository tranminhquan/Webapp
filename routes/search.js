var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('search');
});

router.post('/listHomestay', function(req, res, next){
    try{
        res.render('listHomestay', { title: 'Travelie - List homestays'});
    } catch(error){

    }
});

module.exports = router;
