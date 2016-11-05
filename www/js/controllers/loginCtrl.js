app.controller('loginController', function ($scope, $ionicModal, $timeout, $ionicPopup, httpservice, configservice, sharedservice) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    //     Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $timeout($scope.modal.hide(), 0);
    };

    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });
    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        httpservice.post(configservice.loginURL, $scope.loginData).then(function (response) {
            if (!response.data.IsError) {
                sharedservice.setuserlogin(response.data.user);
                $scope.showAlert({
                    title: 'Yayy!',
                    template: 'You are logged in'
                });
                $scope.$emit('userLoggedin');
            } else {
                $scope.showAlert({
                    title: 'OOPs',
                    template: 'Login failed!'
                });
            }
        }, function (error) {
            console.log(error);
        })
    };


    // An alert dialog
    $scope.showAlert = function (alertObject) {
        var alertPopup = $ionicPopup.alert(alertObject);
        alertPopup.then(function (res) {
            $scope.closeLogin()
        });
    };

})