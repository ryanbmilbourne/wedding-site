requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'components',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app',
        jquery: 'jquery/jquery.min',
        bootstrap: '../js/bootstrap',
        webfonts: '../js/webfonts',
        svg: '../js/svg.min',
        gallery: 'blueimp-gallery/js/jquery.blueimp-gallery.min',
        raphael: '../js/raphael.min',
        mygallery: '../js/gallery'
    },
    shim: {
        bootstrap: ['jquery'],
        gallery: ['jquery','bootstrap'],
        raphael: ['svg']
    }
});


define([
    'jquery',
    'gallery',
    'mygallery',
    'raphael',
    'webfonts',
    'bootstrap'
    ], function ($,gallery,mygallery) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    //$('#loading').addClass('hide');
});
