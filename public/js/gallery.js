'use strict';
/*global define:false*/
define([
'jquery',
'gallery'
], function($,gallery){
  $('#blueimp-gallery')
  .on('open', function(event){
    console.log(arguments);
  })
  .on('opened',function(event){
    console.log(arguments);
  })
  .on('slide', function(e,i,s){
    console.log(arguments);
  })
  .on('slideend', function(e,i,s){
    console.log(arguments);
  })
  .on('slidecomplete', function(e,i,s){
    console.log(arguments);
  })
  .on('close', function(event){
    console.log(arguments);
  })
  .on('closed', function(event){
    console.log(arguments);
  });
});
