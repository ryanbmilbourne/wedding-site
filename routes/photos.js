var config = require('../modules/config')
  , app = config.app
  , models = require('../models')
  , Photo = models.Photo
  , category = 'yourcategory'
  ;

app.get('/photos',function(req,res){
    "use strict";
    Photo.find({category:category,shown:true}).lean().sort({order:1}).exec(function(err,photos){
      res.render('photos',{
          name:config.NAME+' - Photos',
          photos: photos,
          errordiv:err?'':'hidden',
          error:err,
          thanksdiv:'hidden'
      });
    });
});
