var app = require('express')();

app.get('/', function(req, res) {
  return res.sendFile(__dirname + '/index.html');
});

app.listen(3000);
