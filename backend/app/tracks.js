const express = require('express');
const bodyParser = require('body-parser');

const Track = require('../models/Track');

const router = express.Router();

router.get('/', async (req, res) => {
    const tracks = await Track.find({album: req.query.album}).populate('album');
    res.send(tracks);
});

router.post('/', bodyParser.json(),async (req, res)=> {
    const tracks = await Track.find({album: req.query.album});
    req.body.number = tracks.length + 1;
    const track = new Track(req.body);
    await track.save();
    res.send(track);
});

module.exports = router;