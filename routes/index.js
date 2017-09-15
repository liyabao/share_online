var express = require('express');
var router = express.Router();
var fs = require('fs');
var session = require('express-session');
var dir = require('../model/dir');
router.use(session({ secret: 'dir' }));


json = [];

// Promise.all([fs.readdir('./', function (err, files) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     files.forEach(function (files) {
//       json.push(files);
//       // JSON.parse(json);
//       console.log(files);
//     });
//     console.log(json);
//   }
// })
// ]);

var path = "./routes";

function explorer(path) {
  fs.readdir(path, function (err, files) {
    if (err) {
      console.log("error:\n" + err);
      return;
    }

    files.forEach(function (file) {
      fs.stat(path+"\\"+file,function(err,stat){
      if(err) {
              console.log(err);
              return;
            }

      if (stat.isDirectory()) {
        console.log(path + "\\" + file + "\\");
        explorer(path + "\\" + file);
      } else {
        console.log(path + "\\" + file);
      }

    });
  });

});    
}

explorer(path);

// console.log(json);
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
})
router.get('/index', function (req, res, next) {
  // res.json(json);
  // res.send(json[0]+json[1]);
  // res.render('index');
  // JSON.parse(json);
  // res.cookie("dir",json);
  // res.render('index',json); 
  res.json(json);
});



module.exports = router;
