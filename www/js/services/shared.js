app.factory('sharedservice', function ($http, $window) {
    var self = this;
    return {
        'isLoggedIn': function () {
            return $window.sessionStorage.getItem('isLoggedIn');
        },
        'username': function () {
            return $window.sessionStorage.getItem('username');
        },
        'userId': function () {
            return $window.sessionStorage.getItem('userId');
        },
        'setuserlogin': function (user) {
            $window.sessionStorage.setItem('isLoggedIn', true);
            $window.sessionStorage.setItem('userId', user._id);
            $window.sessionStorage.setItem('username', user.username);
        }
    }
});