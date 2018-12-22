var express = require('express');
var router = express.Router();
var Homestay = require('../models/homestay');

/* GET home page. */
router.post('/', function (req, res, next) {
    // Homestay.find({'np_days' : 2}).exec((err, data) => {
    Homestay.find().exec((err, data) => {
        if (!err && data != '') {

            res.render('listHomestay', {title: 'Travelie - List homestays', feature_homestay: data});
        }
        else
            console.log("Can not get document!!!");
    });

});

router.get('/', function (req, res, next) {
    Homestay.find().exec((err, data) => {
        if (!err && data != '') {

            // for(var i=0; i<data.length; i++){
            //     var stars = new Array();
            //     for(var k=0; k<data[i].rating; k++)
            //         stars.push("icon-star");
            //     data[i]['star'] = stars
            // }
            // // console.log(data);
            // // data['fucking'] = 'fucking json js';
            console.log(data);
            res.render('listHomestay', {
                title: 'Travelie - List homestays',
                feature_homestay: data,
                other_homestay: data
            });
        }
        else
            console.log("Can not get document!!!");
    });

});

router.post('/detailHomestay', function(req, res, next){
    try{
        res.render('detailHomestay', {title: 'Travelie - Card detail'});
    } catch(error){

    }
});

module.exports = router;
