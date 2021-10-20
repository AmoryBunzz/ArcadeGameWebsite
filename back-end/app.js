const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const gameRoute = require('./routes/games');
const userRoute = require('./routes/user');
const imageRoute = require('./routes/images');

const app = express();

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}))
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use('/game', gameRoute);
app.use('/user', userRoute);
app.use('/images', imageRoute);

module.exports = app