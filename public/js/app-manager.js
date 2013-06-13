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
        raphael: '../js/raphael.min',
        manager: '../js/manager',
        filedrop: 'jquery-filedrop/jquery.filedrop'
    },
    shim: {
        bootstrap: ['jquery'],
        raphael: ['svg'],
        filedrop: ['jquery']
    }
});


define(['jquery', 'raphael', 'webfonts', 'bootstrap', 'filedrop', 'manager'],
function   ($) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    //$('#loading').addClass('hide');
});