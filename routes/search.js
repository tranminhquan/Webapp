var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('search');
});

router.post('/register', function(req, res, next){
    try{
        res.render('index', { title: req.body.roomtype_radio });
    } catch(error){

    }
});

module.exports = router;
