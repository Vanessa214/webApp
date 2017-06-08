/**
 * Created by Vanessa on 2017/6/7.
 */
angular.module('app').controller('TabbarController',['$scope',function ($scope) {
    $scope.type = 'home';
    $scope.changeColor = function (temp) {
        var type = 'home';
        var title= '首页';
        switch (temp){
            case 'home':
                type = 'home';
                title = '首页';
                break;
            case 'author':
                type = 'author';
                title = '作者';
                break;
            case 'content':
                type = 'content';
                title = '内容';
                break;
            case 'my':
                type = 'my';
                title = '我的';
                break;
        }
        $scope.type = type;

        $scope.$emit('changeColor',{type:title});
    }


}]);