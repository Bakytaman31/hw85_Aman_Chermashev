const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: Schema.Types.ObjectId,
        ref: 'Artist',
        required: true
    },
    year: String,
    image: String,
    published: {
        type: Boolean,
        default: false
    }
});

AlbumSchema.methods.publishAlbum = function () {
    this.published = true;
};

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;