/**
 * Created by luis on 7/6/16.
 */

app.controller('codingController', function($scope, $http, $log) {

    $scope.page = new Page('coding', {
        url: 'https://api.github.com/users/vignesh-sankaranarayanan/repos',
        itemName: 'project'
    });

    var ignored_repos = [];

    Project.all($http, $scope.page, function (projects) {
        $scope.page.items = projects.exclude(function (value) {
            return ignored_repos.contains(value.title);
        });
    });

});
