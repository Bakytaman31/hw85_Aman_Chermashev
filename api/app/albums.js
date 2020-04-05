const express = require('express');
const bodyParser = require('body-parser');

const auth = require('../middleware/auth');
const upload = require('../multer').uploads;
const permit = require('../middleware/permit');

const Album = require('../models/Album');



const router = express.Router();


router.get('/', async (req, res) => {
    if (req.query.artist) {
        const albums = await Album.find({artist: req.query.artist}, {"name": 1, image: 1, "year": 1, "published": 1})
            .sort({"year": -1})
            .populate('artist');
        res.send(albums);
    } else {
        const albums = await Album.find({}, {"name": 1, image: 1, "year": 1, "published": 1})
            .sort({"year": -1})
            .populate('artist');
        res.send(albums);
    }

});

router.post('/', [bodyParser.json(), auth, upload.single('image')],async (req, res) => {
    const albumData = {
        name: req.body.name,
        artist: req.body.artist,
        year: req.body.year,
    };
    if (req.file) {
        albumData.image = req.file.filename;
    }
    const album = new Album(albumData);
    await album.save();
    res.send(album);

});

router.delete('/:id', [bodyParser.json(), auth, permit('admin')], async (req, res) => {
    await Album.deleteOne({_id: req.params.id});
    res.send('Deleted');
});

router.post('/publish/:id', [auth, permit('admin')], async (req, res) => {
    const album = await Album.findOne({_id: req.params.id});
    album.publishAlbum();

    await album.save();

    res.send('Published');
});

module.exports = router;