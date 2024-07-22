const Favorite = require('../models/Favorite');

// Add a movie to favorites
const addFavorite = async (req, res) => {
    const { movieId, title, posterPath } = req.body;
    if (!movieId || !title || !posterPath) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
    try {
        const favorite = new Favorite({
            userId: req.user._id,
            movieId,
            title,
            posterPath
        });
        await favorite.save();
        res.status(201).json(favorite);
    } catch (error) {
        res.status(400).json({ message: 'Failed to add favorite', error });
    }
};

// Get all favorite movies for the user
const getFavorites = async (req, res) => {
    try {
        const favorites = await Favorite.find({ userId: req.user._id });
        res.status(200).json(favorites);
    } catch (error) {
        res.status(400).json({ message: 'Failed to fetch favorites', error });
    }
};

// Remove a movie from favorites
const removeFavorite = async (req, res) => {
    try {
        await Favorite.deleteOne({ userId: req.user._id, movieId: req.params.movieId });
        res.status(200).json({ message: 'Favorite removed' });
    } catch (error) {
        res.status(400).json({ message: 'Failed to remove favorite', error });
    }
};

module.exports = {
    addFavorite,
    getFavorites,
    removeFavorite,
};
