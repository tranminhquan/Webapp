var express = require('express');
var router = express.Router();
var Homestay = require('../models/homestay');
var Comment = require('../models/comment');

/* GET home page. */
router.get('/', function(req, res, next) {
    Homestay.findOne({_id: req.query.id}).exec((err, data) => {
        if (!err && data !== '') {
            console.log('detail homestay json: ', data);

            var days_arr = [];
            var temp = 1;

            for (var i = 0; i < data.np_days; i++) {
                days_arr.push({index: "Day " + (i + 1), date: temp + "/" + 1 + "/2018"});
                temp += 5;
            }

            //Load comment
            Comment.find({homestay_id: req.query.id}).exec((err2, data2) => {
                if (!err2 && data2 !== '') {
                    res.render('detailHomestay', {
                        title: 'Travelie - Card detail',
                        homestay: data,
                        comments: data2,
                        nb_cmt: data2.length,
                        days: days_arr
                    });
                }
            });
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

router.post('/rating', function (req, res, next) {
    try {
        // Update rating to database

    } catch (error) {

    }
});

router.post('/submit-comment', function (req, res, next) {
    try {
        cmt = new Comment();
        cmt.homestay_id = req.query.id;
        cmt.name = req.body.name;
        cmt.content = req.body.content;

        console.log('id: ', req.query.id);
        console.log('name: ', req.body.name);
        console.log('content: ', req.body.content);
        console.log(cmt);

        cmt.save(function (err) {
            if (err)
                console.log('Error when saving new comment');
            res.redirect('/detailHomestay?id=' + req.query.id);
        });
    } catch (error) {

    }
});
module.exports = router;
