/**
 * Created by Vanessa on 2017/6/7.
 */
angular.module('app').directive('tabbarDir',function () {
    return{
        restrict:'EA',
        templateUrl:'views/tabbar_tpl.html',
        controller:'TabbarController'
    }
});

