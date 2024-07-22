const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    movieId: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
