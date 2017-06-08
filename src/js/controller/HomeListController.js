/**
 * Created by Vanessa on 2017/6/7.
 */
angular.module('app').controller('HomeListController',['$scope','httpService',function ($scope,httpService) {
    httpService.getData(function (res) {
        console.log(res);
        $scope.data = res;
    },function (e) {
        console.log(e);
    })
}]);