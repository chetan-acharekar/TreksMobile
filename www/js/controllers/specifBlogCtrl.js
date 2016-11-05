app.controller('specificBlogController', function ($scope, httpservice, $timeout, configservice, allEventService, $stateParams, $timeout, sharedservice) {
    $scope.blogid = $stateParams.blogId;
    $scope.blog = {};
    $scope.chats = [];
    $scope.currentuser = sharedservice.username();
    $scope.isLoggedIn = sharedservice.isLoggedIn();

    allEventService.getSpecificBlog($scope.blogid).then(function (response) {
        $scope.blog = response.data;
    }, function (error) {

    });

});