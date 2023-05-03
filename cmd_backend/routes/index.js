var express = require('express');
var router = express.Router();
var monk = require('monk')
var cors = require('cors');
var db = monk('127.0.0.1:27017/carrentalapp');
var logindata = db.get('logindata');
if(db){
  console.log("Connected")
}
// var signup_data = db.get('login_data');
// var logindata = db.get('Login');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// router.get('/adduser', function(req, res) {
//   console.log(req.body);
//   // Code to retrieve data from database
//   login_data.find({}, function(err, docs1) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.send(docs1);
//     }
//   });
// });


// router.get('/Login',function(req, res){
//   console.log(req.body);
//   logindata.find({},function(err, docs){
//     if(err){
//       res.sendStatus(500)
//     }
//     else{
//       res.send(docs)
//     }
//   })
// })


router.post('/addlogin',function(req, res){
  console.log(req.body);
  logindata.insert({"username":req.body.logindata.username,"password":req.body.logindata.password},function(err, docs){
    if(err){
      res.sendStatus(500)
    }
    else{
      res.send(docs)
    }
  })
})
// router.post('/signup',function(req, res){
//   console.log(req.body);
//   signup_data.insert({"username":req.body.signup_data.username,"email":req.body.signup_data.email,"password":req.body.signup_data.password,"confirmPassword":req.body.signup_data.ConfirmPassword},function(err, docs){
//     if(err){
//       res.sendStatus(500)
//     }
//     else{
//       res.send(docs)
//     }
//   })
// })
// router.post('/Signup',function(req, res){
//   console.log(req.body);
//   complaints.insert({
//     // "name":req.body.users.username,"pwd":req.body.users.passowrd
//     "college":req.body.complaints.college,
//     "building":req.body.complaints.building,
//     "location":req.body.complaints.location,
//     "date":req.body.complaints.date,
//     "work":req.body.complaints.work,
//     "priority":req.body.complaints.priority,
//     "description":req.body.complaints.description,
//     "remarks":req.body.complaints.remarks



//       },function(err, docs){
//     if(err){
//       res.sendStatus(500)
//     }
//     else{
//       res.send(docs)
//     }
//   })
// })

module.exports = router;
