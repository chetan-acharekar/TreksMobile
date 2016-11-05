app.controller('treksController', function ($scope, $timeout, $window, sharedservice, configservice, httpservice, allEventService) {
    $scope.treks = [];
    allEventService.getBlogs().then(function (response) {
        response.data.map(function (trek) {
            if (trek.type == "TREK") {
                $scope.treks.push(trek);
            }
        });
    }, function (error) {

    })
})