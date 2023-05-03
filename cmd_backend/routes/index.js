var express = require('express');
var router = express.Router();
var monk = require('monk')
var cors = require('cors');
var db = monk('127.0.0.1:27017/car');
var users = db.get('users');
if(db){
  console.log("Connected")
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});








router.post('/addlogin',function(req, res){
  console.log(req.body);
  users.insert({"username":req.body.users.username,"password":req.body.users.password},function(err, docs){
    if(err){
      res.sendStatus(500)
    }
    else{
      res.send(docs)
    }
  })
})

router.post('/signup',function(req, res){
  console.log(req.body);
  users.insert({"username":req.body.users.username,"password":req.body.users.password,"role":req.body.users.role},function(err, docs){
    if(err){
      res.sendStatus(500)
    }
    else{
      res.send(docs)
    }
  })
})





module.exports = router;
