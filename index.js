/**
 * Created by baoyinghai on 2/3/17.
 */
var express = require('express');
var bodyParder = require('body-parser');
var rpc  = require('./rpc');

var app = express();

app.use(bodyParder.text({ type: 'text/xml' }));
app.use(express.static('./static'));

app.all('/test', function(req, res) {
  res.json({
    k: 'hello'
  });
});

app.get('/connect', rpc.connect);
app.post('/connect', rpc.receiveMsg);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('app listening at http://%s:%s', host, port);
});