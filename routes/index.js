var express = require('express');
var router = express.Router();
var fs = require('fs');
var session = require('express-session');
var dir = require('../model/dir');
// router.use(session({ secret: 'dir' }));
var path="./";
var filesList = [];
var targetObj = {};

function geFileList(path)
{
   readFile(path,filesList,targetObj);
   return filesList;
}

//遍历读取文件
function readFile(path,filesList,targetObj)
{
   files = fs.readdirSync(path);//需要用到同步读取
   files.forEach(walk);
   function walk(file)
   {  
        states = fs.statSync(path+'/'+file); 
        if(states.isDirectory())
        {
            var item ;
            if(targetObj["children"])
            {
                item = {name:file,children:[]};
                targetObj["children"].push(item);
            }
            else
            {
               item = {name:file,children:[]};
               filesList.push(item);
            }

            readFile(path+'/'+file,filesList,item);
        }
        else
        {   
            //创建一个对象保存信息
            var obj = new Object();
            // obj.size = states.size;//文件大小，以字节为单位
            // obj.name = file;//文件名
            obj.path = path+'/'+file; //文件绝对路径

            if(targetObj["children"])
            {
               var item = {name:file,value:obj.path}
               targetObj["children"].push(item);
            }
            else
            {
                var item = {name:file,value:obj.path};
                filesList.push(item);
            }
        }     
    }
}

geFileList(path);



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
})
router.get('/index', function (req, res, next) {
  res.json(filesList);
});
router.get('11',function(req,res,next){
  res.send('11.mp3');
})



module.exports = router;
