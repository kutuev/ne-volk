'use strict';

let router = require('express').Router();

router.get('/', function(req, res){
    res.sendFile('index.html' , { root : './public'});
});

module.exports = router;