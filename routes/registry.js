var config = require('../modules/config')
  , app = config.app
  , mongoose = config.mongoose
  , models = require('../models')
  , Registry = models.Registry;

app.get('/registry',function(req,res){
    Registry.find(function(err,registryEntries){
        res.render('registry',{
            name:'stephanieandgreg.us - Registry',
            errordiv:'hidden',
            thanksdiv:'hidden',
            addmsg:"Sponsor it!",
            items: registryEntries
        });
    });
});