requirejs.config({
    paths: {
        angular: '../vendor/angular/angular',
        ngRoute: '../vendor/angular-route/angular-route',
        ngResource: '../vendor/angular-resource/angular-resource',
        ngSanitize: '../vendor/angular-sanitize/angular-sanitize',
        bootstrap: '../vendor/bootstrap/dist/js/bootstrap',
        jquery: '../vendor/jquery/dist/jquery',
        domReady: '../vendor/requirejs-domready/domReady'
    },
    shim: {
        bootstrap: ['jquery'],
        angular: {
            exports: 'angular',
            init: function () { return angular; }
        },
        ngRoute: {
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
