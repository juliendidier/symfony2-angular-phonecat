define(['./module'], function (controllers) {
    'use strict';

    controllers.controller('PhoneListCtrl', ['$scope', 'Phone', function($scope, Phone) {
            $scope.phones = Phone.query();
            $scope.orderProp = 'age';

            $scope.map = {
                center: {
                    latitude: 48.893901824951,
                    longitude: 2.2885999679565
                },
                zoom: 8
            };
    }]);
});
