/**
 * Created by luis on 7/6/16.
 */

app.controller('codingController', function($scope, $http, $log) {

    $scope.page = new Page('coding', {
        url: 'https://api.github.com/users/vignesh-sankaranarayanan/repos',
        itemName: 'project'
    });

    var ignored_repos = ['BurgerBuilder', 'Sample', 'Webhook', 'WebhookApi', 'Quickstart ios', 'Geethamandalam',  'Ionic preview app',  'Php github api',  'Tools', 'Ionic2 slides test', 'M3uStreamPlayer'];

    Project.all($http, $scope.page, function (projects) {
        $scope.page.items = projects.exclude(function (value) {
            return ignored_repos.contains(value.title);
        });
    });

});
