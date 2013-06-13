var mongoose = require('mongoose')
  , registrySchema = new mongoose.Schema({
    name:String,
    desc:String,
    price:Number,
    img:{
        src:String,
        location:String,
        title:String
    }
  })
  , Registry = mongoose.model('Registry',registrySchema);

mongoose.createConnection('mongodb://localhost/test');
module.exports = { //ALL_CAPS represent static values, lowercase_stuff are dynamically required resources
	mongoose: mongoose,
	Registry: Registry
};