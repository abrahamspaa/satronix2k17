const express = require('express'),
          app = express(),
     {static} = express;

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(static(__dirname + '/source'));