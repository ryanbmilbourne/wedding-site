var server
  , app = require('./app')
  , http = require('http');
before(function(){
  server = http.createServer(app).listen(8080);
});

after(function(done){
  server.close(done);
});

module.exports = server;
