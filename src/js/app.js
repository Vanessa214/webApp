/**
 * Created by Vanessa on 2017/6/7.
 */
(function (angular) {
    var app = angular.module('app',['ui.router']);
    app.controller('WebController',['$scope',function ($scope) {
        $scope.t = 'webApp';

        $scope.$on('changeColor',function (e,obj) {
            //console.log(obj);
            $scope.$broadcast('modifyTitle',obj);
        })

        
    }])
})(angular);