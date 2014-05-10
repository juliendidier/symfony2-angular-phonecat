define([
    'require',
    'angular',
    'app',
    'routes',
    'ngResource'
], function (require, ng) {
    'use strict';

    require(['jquery', 'bootstrap', 'angular']);

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
