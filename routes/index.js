var express = require('express');
var router = express.Router();
var fs = require('fs');
var session = require('express-session');
var dir = require('../model/dir');
router.use(session({ secret: 'dir' }));
json = [];
var path="./";

function read(path)
{
fs.readdir('./', function (err, files) {
  if (err) {
    console.log(err);
  }
  else {
    files.forEach(function (files) {
      json.push({name:files,children:{name:"123"}}); 
      console.log(files);
    });
    console.log(files);
    // for(var i=0;i<files.length;i++)
    //   {

    //   }
  }
})}
read(path);

// for(var i=0;i<json.length;i++)
//     {
//       json.push(json[i]);
//     }



// var path = "./routes";

// function explorer(path) {
//   fs.readdir(path, function (err, files) {
//     if (err) {
//       console.log("error:\n" + err);
//       return;
//     }

//     files.forEach(function (file) {
//       fs.stat(path+"\\"+file,function(err,stat){
//       if(err) {
//               console.log(err);
//               return;
//             }

//       if (stat.isDirectory()) {
//         console.log(path + "\\" + file + "\\");
//         explorer(path + "\\" + file);
//       } else {
//         console.log(path + "\\" + file);
//       }

//     });
//   });

// });    
// }

// explorer(path);

// console.log(json);
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
})
router.get('/index', function (req, res, next) {
  res.json(json);
});
// router.get('11.mp3',function(req,res,next){
//   res.send('11');
// })



module.exports = router;
