requirejs.config({
    paths: {
        'angular': "../vendor/angular/angular",
        'angular-route': '../vendor/angular-route/angular-route',
        'bootstrap': "../vendor/bootstrap/dist/js/bootstrap",
        'jquery': "../vendor/jquery/dist/jquery",
        'domReady': "../vendor/requirejs-domready/domReady"
    },
    shim: {
        'bootstrap': ['jquery'],
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        }
    }
});
