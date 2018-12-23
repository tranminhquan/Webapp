var express = require('express');
var router = express.Router();
var Homestay = require('../models/homestay');

/* GET home page. */
router.get('/', function(req, res, next) {
    Homestay.findOne({_id: req.query.id}).exec((err, data) => {
        if (!err && data !== '') {
            console.log('detail homestay json: ', data);
            res.render('detailHomestay', {title: 'Travelie - Card detail', homestay: data});
        }
        else {
            console.log("Can not get document!!!");
        }
    });
});


router.post('/booking', function(req, res, next){
    try{
        res.render('booking', {title: 'Travelie - Booking'});
    } catch(error){

    }
});

module.exports = router;
