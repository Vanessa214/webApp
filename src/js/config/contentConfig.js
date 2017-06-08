/**
 * Created by Vanessa on 2017/6/7.
 */
angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('home',{
        url:'/',
        views:{
            home:{
                templateUrl:'../views/home_tpl.html',
                controller:'HomeListController'
            },
            author:{
                //templateUrl:'../views/home_tpl.html',
                //controller:'HomeListController'
            },
            content:{
                //templateUrl:'../views/home_tpl.html',
                //controller:'HomeListController'
            },
            my:{
                //templateUrl:'../views/home_tpl.html',
                //controller:'HomeListController'
            }
        }
    });

    $urlRouterProvider.otherwise('/');
}]);