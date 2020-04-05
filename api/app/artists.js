const express = require('express');
const bodyParser = require('body-parser');

const upload = require('../multer').uploads;
const auth = require('../middleware/auth');
const permit = require('../middleware/permit');

const Artist = require('../models/Artist');


const router = express.Router();

router.get('/', async (req, res) => {
    const artists = await Artist.find();
    res.send(artists);
});

router.post('/', [bodyParser.json(), auth, upload.single('image')], async (req, res) => {
    const artistData = {
        name: req.body.name,
        info: req.body.info
    };
    if (req.file) {
        artistData.image = req.file.filename;
    }
    const artist = new Artist(artistData);
    await artist.save();
    res.send(artist);
});

router.delete('/:id', [bodyParser.json(), auth, permit('admin')], async (req, res) => {
    await Artist.deleteOne({_id: req.params.id});
    res.send('Deleted');
});

router.post('/publish/:id', [auth, permit('admin')], async (req, res) => {
    const artist = await Artist.findOne({_id: req.params.id});
    artist.publishArtist();

    await artist.save();

    res.send('Published');
});
module.exports = router;