const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: String,
    info: String,
    published: {
        type: Boolean,
        default: false
    }
});

ArtistSchema.methods.publishArtist = function () {
    this.published = true;
};

const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;