define([
    'require',
    'angular',
    'app',
    'routes',
    'ngGoogleMaps'
], function (require, ng) {
    'use strict';

    require(['jquery', 'bootstrap', 'angular', 'ngGoogleMaps']);

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
