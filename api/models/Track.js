const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TrackSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: 'Album',
        required: true
    },
    number: Number,
    published: {
        type: Boolean,
        default: false
    },
    track: String
});

TrackSchema.methods.publishTrack = function () {
    this.published = true;
};

const Track = mongoose.model('Track', TrackSchema);

module.exports = Track;