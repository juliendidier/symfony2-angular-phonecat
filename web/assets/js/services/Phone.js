define(['./module'], function (services) {
    'use strict';
    services.factory('Phone', [function(){
        var $injector = angular.injector(['ng', 'ngResource']);
        var $resource = $injector.get('$resource');

        return $resource('phones/:phoneId.json', {}, {
            query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
        });
    }]);
});
