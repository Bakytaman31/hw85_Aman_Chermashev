const express = require('express');
const bodyParser = require('body-parser');

const TrackHistory = require('../models/TrackHistory');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', [bodyParser.json(), auth], async (req, res) => {
    const user = req.user;
    const obj = {
        userId: user._id,
        track: req.body.track
    };
    const trackHistory = new TrackHistory(obj);
    await trackHistory.save();
    return res.send('Saved');
});

router.get('/', [bodyParser.json(), auth], async (req, res) => {
    const user = req.user;
    const trackHistory = await TrackHistory.find({userId: user._id})
        .populate({path: 'track', populate: {
            path: 'album', populate: {
                path: 'artist'
                }
            }});
    res.send(trackHistory);
});


module.exports = router;