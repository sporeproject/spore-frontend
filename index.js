const express = require('express');
const app = express();
const port = process.env.PORT || 8088;
const path = require('path');
app.use(express.static('dist'));
app.listen(port);

app.use(express.static(__dirname + '/dist'));

app.get('/api', async (req, res) => {
  try {
    const response = await fetch('https://cmc-api.sporeproject.org/');
    return res.json(await response.json())
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

