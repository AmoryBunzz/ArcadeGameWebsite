const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const gameRoute = require('./routes/games');
const userRoute = require('./routes/user');

app.use(bodyParser.json());

app.use('/posts', gameRoute);
app.use('/user', userRoute);

module.exports = app