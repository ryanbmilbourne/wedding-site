var config = require('../modules/config')
  , app = config.app
  , mongoose = config.mongoose
  , models = require('../models')
  , Registry = models.Registry;
//mongoose.connect('mongodb://localhost/test');
app.get('/registry',function(req,res){
    console.log('reqest to registry');
    Registry.find(function(err,registryEntries){
        console.log('rendering registryEntries');
        res.render('registry',{
            name:'stephanieandgreg.us - Registry',
            errordiv:'hidden',
            thanksdiv:'hidden',
            //thanks: req.session,
            addmsg:"Sponsor it!",
            items: registryEntries
        });
    });
});