var express = require('express');
var router = express.Router();
var Homestay = require('../models/homestay');
var temp;
/* GET home page. */
router.get('/', function(req, res, next) {
    Homestay.find({'np_days' : 2}).exec((err, result) => {
        if (!err && result != '')
            temp = result;
        else
            console.log("Can not get document!!!");
    })
    res.render('listHomestay', {title: 'Travelie - List homestays', day: temp});
});

router.post('/detailHomestay', function(req, res, next){
    try{
        res.render('detailHomestay', {title: 'Travelie - Card detail'});
    } catch(error){

    }
});

module.exports = router;
