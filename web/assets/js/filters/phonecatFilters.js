define(['./module'], function (filters) {
    'use strict';

    return filters.filter('checkmark', function() {
        return function(input) {
            return input ? '\u2713' : '\u2718';
        }
    });
});
