var config = require('../modules/config')
  , app = config.app;

app.get('/rsvp',function(req,res){
    res.render('rsvp',{
        name:'stephanieandgreg.us - RSVP',
        errordiv:'hidden',
        thanksdiv:'hidden'
    });
});