const express = require('express')
const mongoose = require('mongoose')
const router = require('./routers/router')
var monk = require('monk')
const cors = require('cors')
var db = monk('localhost:27017/car');
var users = db.get('users')


router.get('/', function(req, res, next){
  res.render('index', {title:'Express'})
});

router.post('/adduser', function(req, res){
    console.log(res.body);
    users.insert({"name":req.body.users.username}, {"password": req.body.users.password}, function(err, docs){
        if(err){
            res.sendStatus(500)
        }else{
            res.send(docs)
        }
    })
})
module.exports = router;

