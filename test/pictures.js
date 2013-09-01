process.env.NODE_ENV = 'test';
var Browser = require('zombie')
  , browser = new Browser({ site:'http://localhost:8080',silent:true})
  , assert = require('assert')
  , server = require('../testhelper.js')
  , should = require('should');


describe('picture page', function(){
    before(function(done){
      done();//browser.visit('/pictures',done);
    });
    it('should allow log in');
    it('should allow comment on pictures');
    it('should allow email of picture to self');
    it('should allow authorized user to upload pictures');
});
