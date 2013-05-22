var config = require('../modules/config')
  , app = config.app;

app.get('/photos',function(req,res){
    res.render('photos',{
        name:'stephanieandgreg.us - Photos',
        errordiv:'hidden',
        thanksdiv:'hidden'
    });
});