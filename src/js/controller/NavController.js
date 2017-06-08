/**
 * Created by Vanessa on 2017/6/7.
 */
angular.module('app').controller('NavController',['$scope',function ($scope) {
    $scope.title = '首页';
    $scope.$on('modifyTitle',function (e,obj) {
        $scope.title = obj.type;
    })
}]);