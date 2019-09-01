(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LCController', LCController);
    LCController.$inject = ['$scope'];

    function LCController($scope) {
        $scope.meals = '';
        $scope.display = '';
        $scope.checked = false;

        $scope.checkLunch = function() {
            if ($scope.meals.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.checked = true;
                $scope.empty = false;
                var arraymeals = $scope.meals.split(',');
                var arraymealsWithoutEmptys = arraymeals.filter(function(v) {
                    return v.trim() !== '';
                });

                if (arraymealsWithoutEmptys.length <= 3) {
                    $scope.display = 'Enjoy!';
                } else {
                    $scope.display = 'Too much!';
                }
            }
        };
    }
})();