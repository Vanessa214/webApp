/**
 * Created by Vanessa on 2017/6/7.
 */
angular.module('app').config(['$sceDelegateProvider',function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://localhost/server/**'
    ])
}]);