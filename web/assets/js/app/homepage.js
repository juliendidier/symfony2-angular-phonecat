define([
    'require',
    'angular',
    'app',
    'routes',
    'ngResource',
    'ngSanitize'
], function (require, ng) {
    'use strict';

    require(['jquery', 'bootstrap', 'ngSanitize', 'angular']);

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
