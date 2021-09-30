
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next){
    res.render('pages/success.html',{home:{
        heading:"Hello okaydexter express page",
    }})});

module.exports = router;