const { join } = require('path');
const compression = require('compression');
const express = require('express');

const profile = require('./routes/profile');
const { pageNotFound, internalServerError } = require('./controllers');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public/')));
app.use(profile);

app.use(pageNotFound);
app.use(internalServerError);

module.exports = app;
