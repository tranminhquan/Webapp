var express = require('express');
var router = express.Router();
var Homestay = require('../models/homestay');

router.get('/', function (req, res, next) {
    res.render('admin');
});

router.post('/add-homestay', function (req, res, next) {
    // Add homestay to database
    var homestay = new Homestay();
    var array;
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
    homestay.owner.image = req.body.owner_image;
    homestay.owner.name = req.body.owner_name;
    homestay.owner.dob = req.body.owner_dob;
    homestay.owner.gender = req.body.owner_gender;
    homestay.owner.career = req.body.owner_career;
    homestay.owner.phone = req.body.owner_phone;

    // array = req.body.feature_images_images.split("\n");
    // for (let i = 0; i < array.length; i++)
    //     homestay.feature_images[i].images = array[i];
    //
    // array = req.body.feature_images_description.split("\n");
    // for (let i = 0; i < array.length; i++)
    //     homestay.feature_images[i].description = array[i];
    //
    // array = req.body.food_images.split("\n");
    // for (let i = 0; i < array.length; i++)
    //     homestay.food.images[i].images = array[i];
    //
    // array = req.body.food_description.split("\n");
    // for (let i = 0; i < array.length; i++)
    //     homestay.food[i].description = array[i];

    array = req.body.overview_description.split("\n");
    for (let i = 0; i < array.length; i++)
        homestay.overview[i] = array[i];

    array = req.body.tour_images.split("\n");
    for (let i = 0; i < array.length; i++)
        homestay.tour.images[i] = array[i];

    array = req.body.tour_description.split("\n");
    for (let i = 0; i < array.length; i++)
        homestay.tour.description[i] = array[i];

    array = req.body.rule_description.split("\n");
    for (let i = 0; i < array.length; i++)
        homestay.rule.description[i] = array[i];

    homestay.save(function (err) {
        if (err)
            console.log('Error when saving homestay');
        // res.redirect('/admin');
    });

    res.redirect('/listHomestay');
});
module.exports = router;