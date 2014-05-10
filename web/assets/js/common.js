requirejs.config({
    paths: {
        angular: "../vendor/angular/angular",
        'angular-route': '../vendor/angular-route/angular-route',
        ngResource: '../vendor/angular-resource/angular-resource',
        ngSanitize: '../vendor/angular-sanitize/angular-sanitize',
        bootstrap: "../vendor/bootstrap/dist/js/bootstrap",
        jquery: "../vendor/jquery/dist/jquery",
        domReady: "../vendor/requirejs-domready/domReady"
    },
    shim: {
        bootstrap: ['jquery'],
        angular: {
            exports: 'angular',
            init: function () { return angular; }
        },
        'angular-route': {
            deps: ['angular']
        },
        ngSanitize: {
            exports: 'ngSanitize',
            deps: ['angular']
        },
        ngResource: {
            exports: 'ngResource',
            deps: ['angular']
        }
    }
});
