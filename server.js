const dotenv = require('dotenv');

const mongoose = require('mongoose');

dotenv.config({
  path: './config.env',
});

const app = require('./app');

const port = 3000;

app.listen(port, () => {
  console.log('server is running', port);
});
