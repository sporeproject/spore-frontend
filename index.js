const express = require('express');
const app = express();
const port = process.env.PORT || 8088;
const path = require('path');
const api = require('./api/index.js');
app.use(express.static('dist'));
app.listen(port);

app.use(express.static(__dirname + '/dist'));

app.get('/api', async (req, res) => {
  try {
    const response = await fetch('http://localhost:4201/');
    return res.json(await response.json())
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

