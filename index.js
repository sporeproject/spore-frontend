const express = require('express');
const app = express();
const port = process.env.PORT || 8088;
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.static('dist'));
app.listen(port);

app.use(express.static(__dirname + '/dist'));

app.get('/api', async (req, res) => {
  
  const apiUrl = process.env.API_URL || 'https://frontend-api.sporeproject.com/api';
  try {
    const query = req.query.q;
    const response = await fetch(query ? `${apiUrl}?q=${query}` : apiUrl);
    const contentType = response.headers.get('content-type');
    if (contentType.includes('text/html')) {
      const text = await response.text();
      return res.send(text);
    } else {
      const data = await response.json();
      return res.json(data);
    }
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

