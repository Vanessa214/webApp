/**
 * Created by Vanessa on 2017/6/8.
 */
angular.module('app').controller('AuthorListController',['$scope','httpService',function ($scope,httpService) {
    /*
    * 作者推荐
    * */
    httpService.getData('author',function (res) {
        $scope.data = res;
    },function (e) {
        console.log(e);
    });

    /*
    * 热门作者
    * */
    httpService.getData('authorHot',function (res) {
        $scope.dataHot = res;
    },function (e) {
        console.log(e);
    });
}]);