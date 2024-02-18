const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 4200;
const api = require('./api.js');
app.listen(port);
app.get('/', api);



