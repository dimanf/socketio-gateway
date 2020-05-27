var express = require('express');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000, function () {
  console.log('The server is listening on port 3000');
});

io.on('connection', function (socket) {
  console.log('user is connected');

  socket.on('disconnect', function () {
    console.log('user is disconnected');
  });
});

app.io = io;

app.get('/car_request_toolbar', function (req, res) {
  req.app.io.emit('car_request_toolbar');
  res.send('The event "car_request_toolbar" is emitted successfully');
});

app.get('/car_request_driver_toolbar', function (req, res) {
  req.app.io.emit('car_request_driver_toolbar');
  res.send('The event "car_request_driver_toolbar" is emitted successfully');
});

app.get('/autoplanner_result', function (req, res) {
  console.log("req.query: ", req.query.error);
  if (req.query.error) {
    req.app.io.emit('autoplanner_result', {
      result: {
        error: req.query.error
      }
    });
    res.send('The event "autoplanner_result" is emitted badly');
  } else {
    req.app.io.emit('autoplanner_result', {
      result: 'ok'
    });
    res.send('The event "autoplanner_result" is emitted successfully');
  }
});