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
        webfonts: '../js/webfonts'
    },
    shim: {
        bootstrap: ["jquery"]
    }
});


define(['jquery', 'webfonts', 'bootstrap'],
function   ($) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    $('#loading').addClass('hide');
});