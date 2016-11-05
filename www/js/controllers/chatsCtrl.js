app.controller('chatsController', function ($scope, $timeout, $window, sharedservice, configservice, httpservice, allEventService) {
    $scope.blogs = [];
    allEventService.getBlogs().then(function (response) {
        $scope.blogs = response.data;

    }, function (error) {

    })
})