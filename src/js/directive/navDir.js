/**
 * Created by Vanessa on 2017/6/7.
 */
angular.module('app').directive('navDir',function (){
    return{
        restrict:'EA',
        templateUrl:'../views/nav_tpl.html',
        controller:'NavController'
    }
});