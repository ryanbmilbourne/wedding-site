process.env.NODE_ENV = 'test';
var Browser = require('zombie')
	, browser = new Browser({ site:'http://localhost:8080',silent:true})
	, assert = require('assert')
	, server = require('../testhelper.js')
	, should = require('should');


describe('contact page', function(){
		before(function(done){
			browser.visit('/contact',done);
		});
		it('should display a contact header',function(){
			assert.ok(browser.success);
			browser.text('h1').should.include('Contact');
		});
		it('should show a contact form',function(){
			browser.text('form label').should.include('Name');
		});
		it('should refuse empty submissions');
});
