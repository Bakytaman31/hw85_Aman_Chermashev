const path = require('path');

const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');
const bodyParser = require('body-parser');

const config = require('../config');

const Album = require('../models/Album');

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
    const albums = await Album.find({artist: req.query.artist}, {"name": 1, image: 1, "year": 1})
        .sort({"year": -1})
        .populate('artist');
    res.send(albums);
});

router.post('/', [bodyParser.json(), upload.single('image')],async (req, res) => {
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

module.exports = router;