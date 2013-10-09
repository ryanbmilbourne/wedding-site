var config = require('../modules/config')
  , app = config.app
  ;

require('./restart');
require('./send');
require('./registry');
require('./rsvp');
require('./photos');
require('./manager');

app.get('/', function(req,res){
  "use strict";
  res.render('index',{name:config.NAME,
    h1:config.EVENT_DESCRIPTION,
    date:config.EVENT_DATE,
    loc:config.EVENT_LOCATION_LINK
    });
});
