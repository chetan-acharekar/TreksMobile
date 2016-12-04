app.controller('loginController', function ($scope, $auth, $ionicModal, $timeout, $ionicPopup, httpservice, configservice, sharedservice) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:

  $scope.$on('$ionicView.enter', function (e) {
    // $scope.isLoggedIn = sharedservice.isLoggedIn();
    // if ($scope.isLoggedIn !== null && $scope.isLoggedIn) {
    //   $scope.username = sharedservice.username();
    // } else {
    //   $scope.isLoggedIn = false;
    // }
  });

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

  // Execute action on hide modal
  $scope.$on('modal.hidden', function () {
    // Execute action
    // console.log('hidden');
    // $scope.isLoggedIn = sharedservice.isLoggedIn();
    // if ($scope.isLoggedIn !== null && $scope.isLoggedIn) {
    //   $scope.username = sharedservice.username();
    // } else {
    //   $scope.isLoggedIn = false;
    // }
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function () {
    // Execute action
    console.log('removed');
  });


  // Open the login modal
  $scope.login = function () {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function () {
    httpservice.post(configservice.loginURL, $scope.loginData).then(function (response) {
      if (!response.data.IsError) {
        sharedservice.setuserlogin(response.data.user.firstname);
        $scope.showAlert({
          title: 'Yayy!',
          template: 'You are logged in'
        });
        $scope.username = response.data.user.username;
        $scope.isLoggedIn = true;
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

  // $scope.googleLogin = function(){
  //     // $cordovaOauth.google("930983681431-o1gr6t3ubvjefoi45ehijih08p6g95ma", ["email"]).then(function(response){
  //     //     console.log(response);
  //     // });
  // };
  $scope.authenticate = function (provider) {
    $auth.authenticate(provider).then(function (response) {
      sharedservice.setuserlogin({
        _id: response.data.userObject._id,
        username: response.data.userObject.firstname
      });
      $scope.showAlert({
        title: 'Yayy!',
        template: 'You are logged in'
      });
      $scope.username = response.data.userObject.firstname;
      $scope.isLoggedIn = true;
      $scope.$emit('userLoggedin');
    }, function (error) {
      $scope.showAlert({
        title: 'OOPs',
        template: 'Login failed!'
      });

    });
  };

  $scope.signOut = function () {
    $scope.$emit('logout');
    sharedservice.logout();
    $scope.isLoggedIn = false;
    $auth.logout().then(function (response) {
      $scope.showAlert({
        title: 'Success',
        template: 'You are logged out now.'
      });
    }, function (error) {

    });
  };

  // An alert dialog
  $scope.showAlert = function (alertObject) {
    var alertPopup = $ionicPopup.alert(alertObject);
    alertPopup.then(function (res) {
      $scope.closeLogin()
    });
  };

})
