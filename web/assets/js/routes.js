/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/phones', {
                templateUrl: '/partials/phone-list.html',
                controller: 'PhoneListCtrl'
            })
            .when('/phones/:phoneId', {
                templateUrl: '/partials/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            })
            .when('/map', {
                templateUrl: '/partials/map.html',
                controller: 'MapCtrl'
            })
            .otherwise({
                redirectTo: '/phones'
            })
        ;
    }]);
});
