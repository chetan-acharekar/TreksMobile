var express = require('express'),
    app = express();

    app.use(express.static('public'));

    app.get('*', function (req, res) {
    debugger;
    res.sendFile(__dirname + '/www/index.html')
   });

app.use(express.static('www'));
   app.listen(3000, function () {
     console.log('Example app listening on port 3000!');
   });
