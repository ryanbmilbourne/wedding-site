var config = require('../modules/config')
  , app = config.app
  , models = require('../models')
  , Photo = models.Photo
  ;

app.get('/photos',function(req,res){
    "use strict";
    Photo.find({category:'engagement'}).lean().sort({order:1}).exec(function(err,photos){
      res.render('photos',{
          name:'stephanieandgreg.us - Photos',
          photos: photos,
          errordiv:err?'':'hidden',
          error:err,
          thanksdiv:'hidden'
      });
    });
});
