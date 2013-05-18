var config = require('../modules/config')
  , app = config.app;

require('./restart');

app.get('/', function(req,res){
	//console.log('getting request: ',req);
	res.render('index',{name:'stephanieandgreg.us','h1':'The Wedding of Stephanie Schmidt and Greg Cochard','date':'April 26, 2014','loc':'<a href="https://maps.google.com/maps?ie=UTF8&amp;cid=15646201110297392647&amp;q=Five+Crowns&amp;iwloc=A&amp;gl=US&amp;hl=en">Five Crowns, 3801 East Coast Hwy, CA 92625</a>'});
});

app.get('/contact',function(req,res){
	res.render('contact',{name:'stephanieandgreg.us - contact'});
});
