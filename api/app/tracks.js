const express = require('express');
const bodyParser = require('body-parser');

const auth = require('../middleware/auth');
const permit = require('../middleware/permit');
const upload = require('../multer').music;

const Track = require('../models/Track');

const router = express.Router();

router.get('/', async (req, res) => {
    const tracks = await Track.find({album: req.query.album}, {"name": 1, "album": 1, "published": 1, "duration": 1, "number": 1, "track":1, "_id": 1})
        .sort({"number": 1})
        .populate('album');
    res.send(tracks);
});

router.post('/', [bodyParser.json(), auth, upload.single('track')],async (req, res)=> {
    const tracks = await Track.find({album: req.body.album});
    req.body.number = tracks.length + 1;
    const trackData = {
        name: req.body.name,
        album: req.body.album,
        duration: req.body.duration,
        number: req.body.number
    };
    if (req.file) {
        trackData.track = req.file.filename;
    }
    const track = new Track(trackData);
    await track.save();
    res.send(track);
});

router.delete('/:id', [bodyParser.json(), auth, permit('admin')], async (req, res) => {
    await Track.deleteOne({_id: req.params.id});
    res.send('Deleted');
});

router.post('/publish/:id', [auth, permit('admin')], async (req, res) => {
    const track = await Track.findOne({_id: req.params.id});
    track.publishTrack();

    await track.save();

    res.send('Published');
});

module.exports = router;