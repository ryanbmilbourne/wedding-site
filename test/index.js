process.env.NODE_ENV = 'test';
var app = require('../app')
  , http = require('http')
  , Browser = require('zombie')
	, browser = new Browser({ site:'http://localhost:8080',silent:true})
	, assert = require('assert')
	, server = null
	, should = require('should');

describe('server',function(){
		it('should be up',function(done){
			browser.visit('/',function(){
				assert.ok(browser.success);
			}).then(done,done);
		});
});

describe('index page',function(){
	it('should have an awesome message',function(){
		browser.text('p').should.include('awesome');
	});
	it('should have a stylesheet'/*,function(){
		browser.document.styleSheets.length.should.be.above(1);
	}*/);
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
	it('should be doing nyan cats!');
});
