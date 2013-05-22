var mongoose = require('mongoose')
  , registrySchema = new mongoose.Schema({
    name:String,
    desc:String,
    img:{
        src:String,
        title:String
    }
  })
  , Registry = mongoose.model('Registry',registrySchema);

module.exports = { //ALL_CAPS represent static values, lowercase_stuff are dynamically required resources
	mongoose: mongoose,
	Registry: Registry
};