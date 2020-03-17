const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TrackHistorySchema = new Schema ({
    userId: {
        type: String,
        required: true
    },
    track: {
        type: Schema.Types.ObjectId,
        ref: "Track",
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const TrackHistory = mongoose.model('TrackHistory', TrackHistorySchema);

module.exports = TrackHistory;