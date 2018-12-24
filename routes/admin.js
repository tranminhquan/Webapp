var express = require('express');
var router = express.Router();
var Homestay = require('../models/homestay');

router.get('/', function (req, res, next) {
    res.render('admin');
});

router.post('/add-homestay', function (req, res, next) {
    // Add homestay to database
    var homestay = new Homestay();

    homestay.name = req.body.name;
    homestay.address = req.body.address;
    homestay.full_address = req.body.full_address;
    homestay.distance = req.body.distance;
    homestay.nb_people = req.body.nb_people;
    homestay.np_days = req.body.np_days;
    homestay.time_start = req.body.time_start;
    homestay.time_end = req.body.time_end;
    homestay.rating = 0;
    homestay.video = req.body.video;
    homestay.room_type = req.body.room_type;
    homestay.location_type = req.body.location_type;
    homestay.vacation_type = req.body.vacation_type;
    homestay.cuisine = req.body.cuisine;
    homestay.lifestyle = req.body.lifestyle;

    homestay.save(function (err) {
        if (err)
            console.log('Error when saving homestay');
        res.redirect('/admin');
    });

    res.redirect('/admin');
});
module.exports = router;