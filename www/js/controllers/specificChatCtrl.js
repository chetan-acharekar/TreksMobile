app.controller('specificChatController', function ($scope, httpservice, configservice, allEventService, $stateParams, $timeout, sharedservice, $ionicScrollDelegate, socket) {
    $scope.tripId = $stateParams.tripId;
    $scope.chats = [];
    $scope.messageObject = {};
    $scope.currentuser = sharedservice.username();
    $scope.chatMessage = "";
    $scope.pushNotification = {};
    $scope.isLoggedIn = sharedservice.isLoggedIn();
    $scope.getchats = function (tripId) {
        var url = configservice.getTripChats + tripId;
        httpservice.get(url).then(function (response) {
            $scope.chats = response.data;
            $ionicScrollDelegate.scrollBottom();
            //            if (!$scope.$$phase) {
            //                $scope.$apply();
            //            }
        }, function (error) {

        });
    }

    socket.on('updatechatlist', function (data) {
        $scope.getchats($scope.tripId);
    });

    $scope.$on('userLoggedin', function () {
        $scope.currentuser = sharedservice.username();
        $scope.isLoggedIn = true;
    });

    $scope.createChat = function (object) {
        var chatmessage = {
            'message': $scope.messageObject.mesage,
            'creator': $scope.currentuser ? $scope.currentuser : sharedservice.username(),
            'tripID': $scope.tripId
        };
        //$scope.chats.push(chatmessage);

        httpservice.post(configservice.chatURL, chatmessage)
            .then(function (response) {
                socket.emit('chatupdated', response.data.tripid);
                $scope.getchats($scope.tripId);
                //$scope.chatMessage = "";
                $scope.messageObject.mesage = "";

            }, function (error) {

            })
    };

    $scope.pushNotificationChange = function () {
        var object = {
            'userName': sharedservice.username(),
            'userId': sharedservice.userId(),
            'deviceToken': {
                'android': {
                    'value': 'String',
                    'isActive': $scope.pushNotification.checked
                }
            },
            'tripId': $scope.tripId
        };
        httpservice.post(configservice.updateDeviceToken, object).then(function (response) {

        }, function (error) {

        })
    }

    $scope.getchats($scope.tripId);
});