#!/usr/bin/env node
var models = require('./models')
  , Photo = models.Photo
  , fs = require('fs')
  , path = require('path')
  , imgPath = path.join(__dirname,'public','images','engagement-photos')
  , publicPath = path.join('/images','engagement-photos')
  , walk = function(dir,callback){
      console.log('walking dir: '+dir);
      var results = [];
      fs.readdir(dir,function(err,list){
        console.log('found files: %s',JSON.stringify(list));
        if(err) return callback(err);
        var pending = list.length;
        if(!pending) return callback(null,results);
        list.forEach(function(file){
          file = dir + '/' + file;
          fs.stat(file, function(err,stat){
            if(stat && stat.isDirectory()){
              walk(file,function(err,res){
                results = results.concat(res);
                if(!--pending) callback(null,results);
              });
            } else {
              results.push(file);
              if(!--pending) callback(null,results);
            }
          });
        });
      });
    };
var saving = 0;
walk(imgPath,function(err,files){
  console.log('finished walking, found files %s',JSON.stringify(files));
  if(err) process.exit(console.log(err));
  files.forEach(function(file){
    if(path.extname(file) === '.png'){
      console.log('found png file: %s',file);
      var photo = new Photo({
        src:path.join(publicPath,file)
      , location:path.join(imgPath,file)
      , title:path.basename
      , subtitle:''
      });
      console.log('saving photo...');
      saving++;
      photo.save(function(err,newdoc){
        saving--;
        console.log('saved photo: ',newdoc);
      });
    }
  });
});
console.log(models);
setInterval(function(){
    if(saving > 0){
      console.log('waiting for %d images to save',saving);
    }else{
      process.exit(console.log('finished waiting!'));
    }
  },1000);
