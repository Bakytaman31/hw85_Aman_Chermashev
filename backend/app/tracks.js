const express = require('express');
const bodyParser = require('body-parser');

const Track = require('../models/Track');

const router = express.Router();

router.get('/', async (req, res) => {
    const tracks = await Track.find({album: req.query.album}, {"name": 1, "album": 1, "published": 1, "duration": 1, "number": 1, "_id": 1})
        .sort({"number": 1})
        .populate('album');
    res.send(tracks);
});

router.post('/', bodyParser.json(),async (req, res)=> {
    const tracks = await Track.find({album: req.query.album});
    req.body.number = tracks.length + 1;
    const trackData = {
        name: req.body.name,
        album: req.body.album,
        duration: req.body.duration,
        number: req.body.number
    };
    const track = new Track(trackData);
    await track.save();
    res.send(track);
});

module.exports = router;