var express = require('express')
  , cons = require('consolidate')
	, connect = require('connect')
  , swig = require('swig')
  , app = express()
	, logger = require('./modules/logger')
	, requireDir = require('require-dir');

app.engine('.html',cons.swig);
app.set('view engine','html');

swig.init({
	root: '/var/node/templates/',
	allowErrors:true
});
app.set('views','/var/node/templates/');
app.use(connect.static('/var/node/public', { maxAge: 86400000 }));
app.get('/', function(req,res){
	//console.log('getting request: ',req);
	res.render('index',{name:'stephanieandgreg.us','h1':'The wedding of Stephanie Schmidt and Greg Cochard','date':'April 25, 2014','loc':'<a href="https://maps.google.com/maps?ie=UTF8&amp;cid=15646201110297392647&amp;q=Five+Crowns&amp;iwloc=A&amp;gl=US&amp;hl=en">Five Crowns, 3801 East Coast Hwy, CA 92625</a>'});
});

app.get('/contact',function(req,res){
	res.render('contact',{name:'stephanieandgreg.us - contact'});
});

if(!module.parent){
	console.log('starting app on port 80');
	app.use(logger);
	try{
		app.listen(80);
	}catch(e){
		console.log('couldnt start on port 80, '+e+'\nstarting on port 8080');
		app.listen(8080);
	}
}
module.exports = app;
