const express = require('express');
const app = express();
const port = process.env.PORT || 8088;
const path = require('path');
const api = require('./api/index.js');
app.use(express.static('build'));
app.listen(port);

app.use(express.static(__dirname + '/build'));

app.get('/api', api);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

