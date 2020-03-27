const path = require('path');

const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');
const bodyParser = require('body-parser');

const config = require('../config');
const auth = require('../middleware/auth');
const permit = require('../middleware/permit');

const Artist = require('../models/Artist');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

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