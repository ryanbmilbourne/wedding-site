var express = require('express')
  , app = express()
  , cons = require('consolidate')
  , connect = require('connect')
  , swig = require('swig')
  , logger = require('./logger')
  , mongoose = require('mongoose');
app.use(express.compress());
app.engine('.html',cons.swig);
app.set('view engine','html');

swig.init({
	cache : app.get('env') === 'production',
	root: '/var/node/templates/',
	allowErrors:true
});
app.set('views','/var/node/templates/');
app.use(connect.static('/var/node/public', { maxAge: 86400000 }));


module.exports = { //ALL_CAPS represent static values, lowercase_stuff are dynamically required resources
	EXPRESS_PORT: 80,
	EXPRESS_BAK_PORT: 8080,
	DEBUG: true,
	express : express,
	app : app, //one app to rule them all
	cons : cons,
	connect: connect,
	swig: swig,
	logger: logger,
	mongoose: mongoose
};