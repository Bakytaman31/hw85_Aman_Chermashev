const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config');
const users = require('./app/users');
const trackHistory = require('./app/trackHistory');
const artists = require('./app/artists');
const albums = require('./app/albums');
const tracks = require('./app/tracks');

const app = express();
const port = 8100;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

mongoose.connect(config.database, config.databaseOptions);

app.use('/artists', artists);
app.use('/albums', albums);
app.use('/tracks', tracks);
app.use('/users', users);
app.use('/trackHistory', trackHistory);

app.listen(port, () => {
    console.log(`HTTP Server started on ${port} port!`);
});