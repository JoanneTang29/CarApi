const express = require('express');

const carRouter = require('./routes/carRoutes');

const app = express();

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.use(express.static('public'));

app.use('/cars', carRouter);

module.exports = app;
