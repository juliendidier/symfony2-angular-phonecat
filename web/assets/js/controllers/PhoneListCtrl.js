define(['./module'], function (controllers) {
    'use strict';

    controllers.controller('PhoneListCtrl', ['$scope', 'Phone', function($scope, Phone) {
            $scope.phones = Phone.query();
            $scope.orderProp = 'age';
    }]);
});
