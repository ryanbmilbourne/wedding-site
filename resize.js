#!/usr/bin/env node
"use strict";
var models = require('./models/index2')
  , Photo = models.Photo
  , fs = require('fs')
  , path = require('path')
  , gm = require('gm')
  , async = require('async')
  , newImgPath = path.join(__dirname,'public','images','engagement-photos')
  , publicPath = path.join('/images','engagement-photos')
  , walk = function(dir,callback){
      console.log('walking dir: '+dir);
      var results = [];
      fs.readdir(dir,function(err,list){
        console.log('found files: %s',JSON.stringify(list));
        if(err) { return callback(err); }
        var pending = list.length;
        if(!pending) { return callback(null,results); }
        list.forEach(function(file){
          file = dir + '/' + file;
          fs.stat(file, function(err,stat){
            if(stat && stat.isDirectory()){
              walk(file,function(err,res){
                results = results.concat(res);
                if(!--pending) { callback(null,results); }
              });
            } else {
              results.push(file);
              if(!--pending) { callback(null,results); }
            }
          });
        });
      });
    }
  , saving = 0
  , order = 0
  , resize = function(filepath,thmbpath,pubname,photo,cb){
      gm(filepath)
      .size(function(err,size){
        if(!err){
          var newwidth = 800;
          var newheight = null;
          gm(filepath).resize(newwidth,newheight).write(thmbpath,function(err){
            if(!err){
              photo.medloc = thmbpath;
              photo.medsrc = pubname;
              photo.save(function(err,newdoc){
                saving--;
                if(err){
                  console.log('error when inserting db entry: %s',JSON.stringify(err));
                } else {
                  console.log('saved photo: %s',JSON.stringify(newdoc));
                }
                cb();
              });
            } else {
              console.log('error when writing image: %s',JSON.stringify(err));
              cb();
            }
          });
        } else {
          console.log('error when reading image size: %s',JSON.stringify(err));
          cb();
        }
      });
    }
  , q = async.queue(function(task,callback) {
      resize(task.filename,task.outname,task.pubname,task.dbphoto,callback);
    }, 4)
  ;
q.drain = function(){
  if(saving === 0){
    process.exit(console.log('all done!'));
  }
};
//console.log(models);
walk(newImgPath,function(err,files){
  console.log('finished walking, found files %s',JSON.stringify(files));
  if(err) { process.exit(console.log(err)); }
  files.forEach(function(file){
    saving++;
    if(/thmb/.test(file)){
      saving--;
      return;
    }
    var newfile = path.join(newImgPath,path.basename(file));
    var filepath = path.join(newImgPath,path.basename(file));
    var medpath = path.join(newImgPath,path.basename(file,'.jpg'))+'-med.jpg';
    var publicpath = path.join(publicPath,path.basename(file));
    var medpublicpath = path.join(publicPath,path.basename(file,'.jpg'))+'-med.jpg';
    if(path.extname(file).toLowerCase() === '.jpg'){
      Photo.findOne({location:file},function(err,photo){
        if(!err && photo){
          q.push({filename:filepath,outname:medpath,pubname:medpublicpath,dbphoto:photo});
        }else{
          saving--;
          console.log('couldnt find photo in db: %s',JSON.stringify(err));
        }
      });
    }
  });
});
