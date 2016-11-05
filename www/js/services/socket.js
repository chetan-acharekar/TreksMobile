app.factory('socket', function (socketFactory, configservice) {

    var myIoSocket = io.connect(configservice.socketserver);

    mySocket = socketFactory({
        ioSocket: myIoSocket
    });
    return mySocket;
});