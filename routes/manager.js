var config = require('../modules/config')
  , app = config.app
  , mongoose = config.mongoose
  , models = require('../models')
  , Registry = models.Registry;
mongoose.connect('mongodb://localhost/test');
app.get('/manager',function(req,res){
    
    if(req.query.create){
        var newReg = new Registry();
        newReg.name = 'test';
        newReg.desc = 'test desc';
        newReg.img = {src: '',title: 'test title!'};
        newReg.save(function(err,saved){
            res.json({err:err,saved:saved});
        });
    }
    else{
        Registry.find(function(err,registryEntries){
            res.render('manager',{
                name:'stephanieandgreg.us - Manager',
                items: registryEntries,
                error: err,
                errordiv: err?'':'hidden',
                thanksdiv: 'hidden'
            });
        });
    }
});

app.post('/manager',function(req,res){
    var newReg = new Registry();
    newReg.name = 'test';
    newReg.desc = 'test desc';
    newReg.img = {src: '',title: 'test title!'};
    newReg.save(function(err,saved){
        res.json({err:err,saved:saved});
    });
});

app.delete('/manager',function(req,res){
    if(req.body._id){
        Registry.remove({_id:req.body._id},function(err,count){
            res.json({err:err,count:count});
        });
    }else{
        res.json({err:'no ID provided',body:req.body,query:req.query});
    }
});