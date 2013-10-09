var config = require('../modules/config')
  , app = config.app;

app.get('/rsvp',function(req,res){
    res.render('rsvp',{
        name:config.NAME+' - RSVP',
        errordiv:'hidden',
        thanksdiv:'hidden'
    });
});
