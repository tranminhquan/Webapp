var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('detailHomestay', {title: 'Travelie - Card detail'});
});

router.post('/booking', function(req, res, next){
    try{
        res.render('booking', {title: 'Travelie - Booking'});
    } catch(error){

    }
});

module.exports = router;
