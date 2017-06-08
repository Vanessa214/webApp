/**
 * Created by Vanessa on 2017/6/7.
 */
angular.module('app').service('httpService',['$http',function ($http) {
    this.getData = function (success,error) {
        $http({
            url:"http://localhost/server/home.php",
            method:'jsonp'
        }).then(function (res) {
            success(res.data);
        }).catch(function (e) {
            error(e);
        })
    }
}]);