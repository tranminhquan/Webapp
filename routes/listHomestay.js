var express = require('express');
var router = express.Router();
var Homestay = require('../models/homestay');

/* GET home page. */
router.post('/', function (req, res, next) {
    // Homestay.find({'np_days' : 2}).exec((err, data) => {
    // filter = {
    //     $and:[
    //         {address: "/" + req.body.province + "/i"},
    //         {$or:[
    //                 {},
    //                 {},
    //                 {}
    //             ]}
    //         ]
    // };
    var nb_people_filter;
    if (req.body.nbtravellers_radio == "1")
        nb_people_filter = {$gte: 1};
    if (req.body.nbtravellers_radio == "2to4")
        nb_people_filter = {$gte: 2};
    if (req.body.nbtravellers_radio == "4to8")
        nb_people_filter = {$gte: 4};
    if (req.body.nbtravellers_radio == ">8")
        nb_people_filter = {$gte: 8};

    var np_day_filter;
    if (req.body.duration_radio == "1")
        np_day_filter = {$gte: 1};
    if (req.body.duration_radio == "2to4")
        np_day_filter = {$gte: 2};
    if (req.body.duration_radio == "7" || req.body.duration_radio == ">7")
        np_day_filter = {$gte: 7};

    // var province = req.body.province;

    strict_filter = {
        address: req.body.province,
        room_type: req.body.roomtype_radio,
        location_type: req.body.locationtype_radio,
        vacation_type: req.body.vacationtype_radio,
        nb_people: nb_people_filter,
        np_days: np_day_filter,
        // cuisine: "/" + req.body.cuisine_radio + "/i",
        // lifestyle: "/" + req.body.lifestyle_radio + "/i"
    };

    console.log(strict_filter);

    Homestay.find(strict_filter).exec((err, data) => {
        if (!err && data !== '') {
            console.log(data);
            // if nothing match, then just find in that address
            if (data.length == 0) {
                Homestay.find({address: req.body.province}).exec((err3, data3) => {
                    Homestay.find().exec((err2, data2) => {
                        if (!err2 && data2 !== '') {
                            res.render('listHomestay', {
                                title: 'Travelie - List homestays',
                                feature_homestay: data3,
                                other_homestay: data2
                            });
                        }
                        else
                            console.log("Can not get document!!!");
                    });
                });
            }
            else {
                Homestay.find().exec((err2, data2) => {
                    if (!err2 && data2 !== '') {
                        res.render('listHomestay', {
                            title: 'Travelie - List homestays',
                            feature_homestay: data,
                            other_homestay: data2
                        });
                    }
                    else
                        console.log("Can not get document!!!");
                });
            }
        }

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
