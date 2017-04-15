var express = require('express');
var app = express();
var compression = require('compression');

app.use(compression())

app.use(express.static(__dirname,{maxAge:86400000 }))

app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})