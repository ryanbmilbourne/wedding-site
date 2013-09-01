process.env.NODE_ENV = 'test';
var Browser = require('zombie')
  , browser = new Browser({ site:'http://localhost:8080',silent:true})
  , assert = require('assert')
  , server = require('../testhelper.js')
  , should = require('should');


describe('shopping cart', function(){
    before(function(done){
      done();//browser.visit('/shop',done);
    });
    it('should allow login');
    it('should allow authed user to add items');
    it('should allow items to have description');
    it('should allow items to have picture');
    it('should allow items to be added to cart');
    it('should allow cart to check out');
});
