app.factory('configservice', function () {
    var prefix = "http://139.59.47.155:80/"
    return {
        'host':prefix,
        'loginURL': prefix + 'api/login',
        'tripURL': prefix + 'api/trip',
        'chatURL': prefix + 'api/chat',
        'getTripChats': prefix + 'api/chat/trip/',
        'postUser': prefix + 'api/user',
        'uploadImage': prefix + 'api/image',
        'allImageTags': prefix + 'api/image/distinct/tag',
        'socketserver': prefix,
        'updateDeviceToken': prefix + 'api/notification/updateToken'
    }
});