requirejs.config({
    paths: {
        angular: '../vendor/angular/angular',
        bootstrap: '../vendor/bootstrap/dist/js/bootstrap',
        domReady: '../vendor/requirejs-domready/domReady',
        jquery: '../vendor/jquery/dist/jquery',
        ngGoogleMaps: '../vendor/angular-google-maps/dist/angular-google-maps',
        ngResource: '../vendor/angular-resource/angular-resource',
        ngRoute: '../vendor/angular-route/angular-route',
        ngSanitize: '../vendor/angular-sanitize/angular-sanitize',
        underscore: '../vendor/underscore/underscore'
    },
    shim: {
        angular: {
            exports: 'angular',
            init: function () { return angular; }
        },
        bootstrap: ['jquery'],
        ngGoogleMaps: {
            exports: 'ngGoogleMaps',
            deps: ['angular', 'underscore']
        },
        ngResource: {
            exports: 'ngResource',
            deps: ['angular']
        },
        ngRoute: {
            deps: ['angular']
        },
        ngSanitize: {
            exports: 'ngSanitize',
            deps: ['angular']
        }
    }
});
