var express = require('express');
var router = express.Router();
var Homestay = require('../models/homestay');
var Comment = require('../models/comment');
var Booking = require('../models/booking');
var current_id; //current homestay id

/* GET home page. */
router.get('/', function(req, res, next) {
    Homestay.findOne({_id: req.query.id}).exec((err, data) => {
        if (!err && data !== '') {
            console.log('detail homestay json: ', data);

            var tour_arr = [];
            var temp = 1;

            current_id = data._id;

            // For load the day
            for (var i = 0; i < data.tour.description.length; i++) {
                tour_arr.push({
                    index: "Day " + (i + 1),
                    date: 1 + "/" + temp + "/2018",
                    description: data.tour.description[i]
                });
                temp += 1;
            }

            console.log(tour_arr);

            // set star
            var star_arr = [];
            var indice = 0;
            for (indice; indice < data.rating; indice++) {
                star_arr.push("icon-star");
            }

            //Load comment
            Comment.find({homestay_id: req.query.id}).exec((err2, data2) => {
                if (!err2 && data2 !== '') {

                    Homestay.find().exec((err3, data3) => {
                            if (!err3 && data3 !== '') {
                                res.render('detailHomestay', {
                                    title: 'Travelie - Card detail',
                                    homestay: data,
                                    comments: data2,
                                    nb_cmt: data2.length,
                                    stars: star_arr,
                                    tours: tour_arr,
                                    other_homestay: data3
                                });
                            }
                        }
                    );
                }
            });
        }
        else {
            console.log("Can not get document!!!");
        }
    });
});


router.get('/booking', function (req, res, next) {
    try{
        booking = new Booking();
        booking.homestay_id = current_id;
        booking.name = req.query.name;
        booking.phone = req.query.phone;
        booking.id_card = req.query.id_card;
        booking.nb_people = req.query.nb_people;
        booking.date = req.query.checkin;

        console.log('id: ', current_id);

        booking.save(function (err) {
            if (err)
                console.log('Error when saving new comment');
            res.redirect('/detailHomestay?id=' + current_id);
        });
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
