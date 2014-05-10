define(['./module'], function (services) {
    'use strict';

    services.factory('Phone', ['$resource', function($resource){
        return $resource('phones/:phoneId.json', {}, {
            query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
        });
    }]);
});
