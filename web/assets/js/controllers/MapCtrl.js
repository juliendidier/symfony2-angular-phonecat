define(['./module'], function (controllers) {
    'use strict';

    controllers.controller('MapCtrl', ['$scope', 'google-maps',
        function($scope) {
            $scope.map = {
                center: {
                    latitude: 48.893901824951,
                    longitude: 2.2885999679565
                },
                zoom: 8
            };
        }
    ]);
});
