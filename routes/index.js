var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/fpt',(req, res)=> {
  //mang 1 chieu
  var fpt = "FPT";
  var year = 2023;
  var clubs =["MU","MC","Chelsea", "liverPools","Jake club"];
  var image = ['Man_Utd_FC_.svg.png','liver.png']
  //multi dimensional arrays(mang nhieu chieu)
  var capitals = [
    ['vietnam','hanoi'],
    ['thailand','bangkok'],
    ['singapore','singapore'],
    ['malaysia','malaysia']
  ]
  res.render('fpthanoi', {
    fpt:"FPT hanoi", 
    year:year, 
    clubs:clubs, 
    image:image, 
    capitals:capitals

  });

});
//display login form (get method)
router.get('/',(req, res) => {
  res.render('login');
});

//process login form(post method)
router.post('/login',(req, res) => {
  //get input data
   var data = req.body;
  //validate login information
  var username = data.username;
  var password = data.password;
  var message = null;
  if(username =="admin" && password =="123"){
    // res.send("<h1>Login sucessfull</h1>")
    // message = "Login sucessfull";
    res.redirect('/home')
  }else{
    // message = "login failed";
    // res.send("<h1>Login failed</h1>")
    res.redirect('/')
  }
  // res.render('result',{message: message});
});

module.exports = router;
