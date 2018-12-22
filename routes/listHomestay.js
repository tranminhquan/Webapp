var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('listHomestay', {title: 'Travelie - List homestays'});
});

router.post('/detailHomestay', function(req, res, next){
    try{
        res.render('detailHomestay', {title: 'Travelie - Card detail'});
    } catch(error){

    }
});

module.exports = router;
