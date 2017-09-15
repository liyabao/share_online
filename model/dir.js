var express=require('express');
var fs=require('fs');

var path='./';

module.exports=function(fil){
    fs.readdir(path,function(err,files){
        if(err)
            {
              console.log(err);
            }
            else
            {
              // return files;
              fil=files;
              // console.log(fil);             
            }
    })
}