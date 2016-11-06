app.controller('treksController', function ($scope, $timeout, $window, sharedservice, configservice, httpservice, allEventService) {
    $scope.treks = [];
      $scope.host = configservice.host;
    allEventService.getBlogs().then(function (response) {
        response.data.map(function (trek) {
            if (trek.type == "TREK") {
                $scope.treks.push(trek);
            }
        });
    }, function (error) {

    })
})